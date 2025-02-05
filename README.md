# Portfolio Resume Frontend

## Collaboration Convention for Portfolio Resume Project

### Branch Naming Conventions

When creating a branch, use one of the following prefixes to categorize your work:

#### Prefixes

- **`feature`**
  - _Description_: Developing new features.
- **`bugfix`**
  - _Description_: Fixing bugs in the code.
- **`hotfix`**
  - _Description_: Fixing critical bugs in the production environment.
- **`docs`**
  - _Description_: Writing, updating, or fixing documentation.

#### Example Branch Names

```git
feature/T-456-user-authentication
bugfix/T-789-fix-header-styling
hotfix/T-321-security-patch
docs/T-654-update-readme
```

---

### Commit Message Types

When committing changes, use one of the following types to categorize your commit:

#### Types

- **`build`**

  - _Description_: Changes that affect the build configuration, external dependencies, development tools or other changes irrelevant to the user.
  - _Examples_: Updating npm packages, modifying Webpack configuration.

- **`chore`**

  - _Description_: Changes to the build process or auxiliary tools and libraries such as documentation generation.
  - _Examples_: Adding images, updating dependencies, configuration changes.

- **`docs`**
  - _Description_: Documentation-only changes.
  - _Examples_: Updating README, API documentation.
- **`feat`**
  - _Description_: A new feature for the user, not a new feature for build script. Such commit will trigger a release bumping a MINOR version.
  - _Examples_: Adding a new module, API endpoint, or UI component.
- **`fix`**
  - _Description_: A bug fix for the user, not a fix to a build script. Such commit will trigger a release bumping a PATCH version.
  - _Examples_: Correcting a typo, fixing a broken feature.
- **`perf`**
  - _Description_: A code change that improves performance.
  - _Examples_: Optimizing an algorithm, improving database queries.
- **`refactor`**
  - _Description_: A code change that neither fixes a bug nor adds a feature, e.g. renaming a variable.
  - _Examples_: Simplifying logic, reorganizing code for clarity.
- **`style`**
  - _Description_: Changes that do not affect the meaning of the code, formatting changes, missing semicolons, etc.
  - _Examples_: Formatting, indentation, renaming variables.
- **`test`**
  - _Description_: Adding or correcting tests.
  - _Examples_: Writing unit tests, fixing broken test cases.

#### Example Commit Messages

```git
feat: add user authentication
fix: resolve issue with login redirect
docs: update README with installation instructions
perf: improve database query efficiency
style: reformat code for better readability
```
