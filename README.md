## How I worked on this project

My goal was to simulate a professional work environment.

- I built this app based on Figma designs

![image](https://user-images.githubusercontent.com/50826640/129226347-bec62f86-6f78-48db-99f2-a6f30bc15dd1.png)

- I worked with tasks on a Kanban board: 

![image](https://user-images.githubusercontent.com/50826640/129226589-b2acbdbb-6cf6-419a-93a1-745b70a3cde4.png)


- I used single branches for all features

## How to navigate this project

- Somewhat complex stateful logic: [Link to example code on GitHub]

- Responsive CSS using Tailwind css. [See here](https://github.com/hirwablessing/expense-tracker-client/blob/ec4b70cd4975beafb4ec5c30eb66776804f89985/src/views/Home.tsx#L32)
- The application fetches data from the Express API and Json data transformation with axios: [See here](https://github.com/hirwablessing/expense-tracker-client/blob/ec4b70cd4975beafb4ec5c30eb66776804f89985/src/services/all.service.ts#L50)

## Why I built the project this way

- I didn't use a state management library like Redux on purpose. For this app simple `useState` is sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or react-query are often used for data management.

- Tailwind css is a great CSS framework for styling. The beauty of this thing called tailwind is it doesn't impose design specification or how your site should look like, you simply bring tiny components together to construct a user interface that is unique and allows a seamless integration with JS.

- My plan is to become a good full-stack developer eventually. But for this project I used basic frontend/backend skills.

## If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull Request
- Integration tests using React Testing Library
- Refactor some of the code. Especially this part [on the backend](https://github.com/hirwablessing/expense-tracker-server/blob/c93a1abde3f68b9f250ad2ffe29af4c390076126/controllers/Transaction.controller.js#L22) and another one on the [frontend](https://github.com/hirwablessing/expense-tracker-client/blob/536cefd63e458e34d842777c286bff4afe2cc16a/src/components/ExpenseChart.tsx#L13) because they're too repetitive. On the backend side, I'd move them to a reusable function and on the frontend side, I'd move that section into a custom hook and use it everywhere.

- Add end-to-end tests with Cypress.
- Add validations to my forms and asynchronous codes.
- Good erro handling on both frontend and backend sides.

- Use typescript on the Express server.
- Remove all `any` types on the frontend part like [here](https://github.com/hirwablessing/expense-tracker-client/blob/536cefd63e458e34d842777c286bff4afe2cc16a/src/components/ExpenseChart.tsx#L17).
- Refactor and refactor again.

## Available Scripts

# Vite + React + Tailwind CSS starter

Inspired by [posva's](https://github.com/posva) [vite-tailwind-starter](https://github.com/posva/vite-tailwind-starter) and [wobsoriano](https://github.com/wobsoriano/vite-react-tailwind-starter.git)

Note if you have access to [Tailwind UI](https://tailwindui.com), you can follow the following steps to add it:

1. Install `@tailwindcss/ui`:

```sh

yarn add @tailwindcss/ui

```

2. Add the plugin in `tailwind.config.js` without changing anything else:

```js
// tailwind.config.js

module.exports = {
  // ...

  // rest of the config

  plugins: [require("@tailwindcss/ui")],
};
```

## Installation

```sh

yarn

```

## Development

```sh

yarn dev

```

## Build

```sh

yarn build

```
