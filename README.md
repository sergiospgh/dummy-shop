# DummyShop

This project was generated with

- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0
- [Node JS](https://nodejs.org/en) version 18.10.0

## Commands to run the project

```
npm install && npm run start
```

## Commands for running Unit tests

```
npm run test
```

```
npm run test:coverage
```

# Project libraries and utilities

Libraries:

- Prettier
- ESLint
- PrimeFlex (CSS Grid)
- PrimeIcons (Icons)

Patterns:

- Redux pattern (NgRx) for state management
- Facade (Facade) for the communication between the components and the store
- BEM for HTML and SCSS (Block, Element, Modifier)

Utilities:

- Folder structure with modules and LazyLoading
- Shared constats, interfaces, payloads and responses
- Auth Guard
- Auth Interceptor
- Media Queries for responsive design
- SCSS variables for colors, fonts, and sizes
- Routing redirections
- Repository with git conventional commits

# Not included (due to lack of time or not necessary)

- NGX-Translate or multi-language
- Husky (Git hooks management)
- Environments
- Unit testing
- Docker
- Design framework (Bootstrap, Material, PrimeNG, etc)
- Metareducers for session control and data persistence
- Control of different tabs or windows opened with the same application, tab refresh, tab or browser closing, etc. (beyond what Redux controls)
- Inactivity and/or maximum user session timers
- Error interceptor that shows a modal with the errors that come from the Backend
- Backend request interceptor with loading spinner
- SonarQube configurations or checks
- Resolvers
- Mocked Backend (with service-workers)
- PWA Settings
