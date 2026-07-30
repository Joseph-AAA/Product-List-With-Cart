<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
=======
# Product List with Cart

A responsive shopping cart application built with React, 
TypeScript, and Tailwind CSS. 
Users can browse products, add or remove items from the cart, adjust quantities, confirm their order, and start a new order.

##Live Demo

https://your-vercel-link.vercel.app
<img width="1280" height="889" alt="image" src="https://github.com/user-attachments/assets/975b593e-5020-4461-99d4-de0767d5d0f6" />


(Add a screenshot here)

## ✨ Features

- Display products from a local JSON file
- Add products to the shopping cart
- Increase and decrease item quantity
- Remove items from the cart
- Calculate total order price
- Order confirmation modal
- Start a new order by clearing the cart
- Responsive design for mobile, tablet, and desktop

##  Built With

- React
- TypeScript
- Tailwind CSS
- Vite

##  Installation

## 📁 Folder Structure

```
src/
|── assets/
├── components/
├── context/
├── data/
├── types/
├── App.tsx
└── main.tsx
```

## 🎯 What I Learned

During this project I practiced:

- React state management with `useState`
- Global state using Context API
- Creating a custom hook
- TypeScript type definitions
- Array methods (`map`, `find`, `filter`, `reduce`)
- Responsive layouts with Tailwind CSS
- Building a scrollable modal
- Component-based architecture

## 🙏 Acknowledgements

This project is based on a challenge from Frontend Mentor.

https://www.frontendmentor.io/
>>>>>>> bc747b8121c972de928f4863873b8b991ebb50cd
