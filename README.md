
# AMEX Challenge Exercise

[Git Repository](https://github.com/harleycosio/challenge)

## Description

This is an exercise to evaluate my skills as a React developer regarding upcoming interview process.

## Installation

This command installs all the necessary dependencies for the project, including React, TypeScript, Fastify, and other libraries required for development and testing.

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

 > TODO add scripts and environments for the above commands

### Testing with Jest

This project uses **Jest** for unit testing with TypeScript and React. The tests are located in the `tests` folder within each module or in other locations following the `*.test.tsx` or `*.spec.tsx` naming conventions.

#### Running Tests

To run all tests:

```bash
    npm run test
```

## Linting and Code Formatting

This project uses Biome to enforce a consistent code style. You can run the following command to check for linting errors:
```bash
npm run lint
```

* **Biome** is used to identify and fix potential issues in the code, such as unused variables, best practices, and React-specific rules. It helps maintain code quality by enforcing coding standards.

### Linting Commands

npx @biomejs/biome check --write ./src
npx @biomejs/biome lint --write ./src

### Automated Code Quality with Husky

This project uses **Husky** to run validations before committing code, ensuring that only quality code is pushed to the repository. Husky runs **linting** and **tests** before allowing commits.

Husky is automatically configured when you run `npm install`, thanks to the `prepare` script in `package.json`. No manual setup is required.

- **Pre-commit Hook**: Validates code quality by running `npm run lint` and `npm run test` before each commit.
- If any of these commands fail, the commit will be blocked until the issues are resolved.

### Continuous Integration and Deployment (CI/CD)

This project uses GitHub Actions for automated Continuous Integration (CI). The workflow ensures that every code change is validated before being merged into the main branch, helping to maintain code quality and stability.

The CI workflow includes the following steps:

* **Linting**: Runs npm run lint to ensure code follows style and quality guidelines.
* **Testing**: Executes npm run test to verify that all tests pass before changes are accepted.
* **Build**: Compiles the project using npm run build to ensure it can be built successfully.

The workflow is triggered on every push or pull request to the main branch, ensuring that all new code is thoroughly checked and ready for deployment.

## Project Structure

#### How to set up path mapping

We need to set up path mapping in the `tsconfig.json` file to support friendly URLs for module imports. This allows us to import modules using a shorter, more readable path instead of the full relative path.

```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "components/*": ["src/components/*"],
      "utils/*": ["src/utils/*"],
      "hooks/*": ["src/hooks/*"]
    }
  }
}
```

> TODO add the above configuration to the `tsconfig.json` file.

### Improvements Features

##### Cache

  While an in-memory cache (like the one I used with a simple JavaScript object) can work for basic exercise, it has some limitations, such as:

    - Cache Persistence
    - Memory Limitations
    - Scalability
    - Consistency

  Alternative Approaches for Caching in a React App could be:
     
    - Local Storage
    - Session Storage
    - IndexedDB
    - Service Workers
    - Redux Persist

  Environment Variables
  
    - Implementing environment variables in the project can help manage configuration settings more effectively.
      This approach allows for better separation of concerns, as well as easier and more secure configuration management.
    - For production environments, sensitive information and configuration values can be managed using GitHub Secrets
      or other CI/CD tools, ensuring that they are not exposed in the codebase.

### Stay in touch

* LinkedIn - [Harley Cruz](https://www.linkedin.com/in/harley-cruz-736388368/)
