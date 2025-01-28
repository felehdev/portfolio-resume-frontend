import { useEffect } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import Typed from "typed.js";
import Swal from "sweetalert2";

const useInitApp = (): void => {
  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>(".wrapper");
    const preloader = document.querySelector<HTMLElement>("#preloader");
    const headerToggleBtn =
      document.querySelector<HTMLElement>(".header-toggle");
    const scrollTop = document.querySelector<HTMLElement>(".scroll-top");

    if (wrapper) {
      new PerfectScrollbar(wrapper, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
      });

      wrapper.addEventListener("ps-scroll-y", () => {
        if (scrollTop) {
          scrollTop.classList.toggle("active", wrapper.scrollTop > 100);
        }
      });
    }

    // Header Toggle
    const toggleHeader = () => {
      const header = document.querySelector<HTMLElement>("#header");
      if (!header || !headerToggleBtn) return;
      header.classList.toggle("header-show");
      headerToggleBtn.classList.toggle("bi-list");
      headerToggleBtn.classList.toggle("bi-x");
    };
    async function typeParagraphs(): Promise<void> {
      const paragraphs =
        document.querySelectorAll<HTMLElement>(".typed-greeting p");
      const totalParagraphs = paragraphs.length;

      for (const [index, paragraph] of Array.from(paragraphs).entries()) {
        await new Promise<void>((resolve) => {
          const typedElement =
            paragraph.nextElementSibling as HTMLElement | null;
          if (typedElement) {
            new Typed(typedElement, {
              strings: [paragraph.innerHTML],
              typeSpeed: 100,
              onComplete: () => {
                resolve();
                if (index < totalParagraphs - 1) {
                  typedElement.nextElementSibling?.remove();
                }
              },
            });
          }
        });
      }
    }

    const initTyped = () => {
      if (typeof Typed === "undefined") return;
      typeParagraphs();
    };

    if (headerToggleBtn) {
      headerToggleBtn.addEventListener("click", toggleHeader);
    }

    // Preloader
    window.addEventListener("load", () => {
      if (preloader) preloader.remove();
      initTyped();
    });

    return () => {
      if (headerToggleBtn) {
        headerToggleBtn.removeEventListener("click", toggleHeader);
      }
    };
  }, []);
};

export default useInitApp;
