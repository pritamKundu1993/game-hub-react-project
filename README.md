# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
});
```

# Game Gub

Game Gub is a React-based web application for exploring games by genre, viewing game ratings, platforms, and more. The project supports both dark and light modes, ensuring an accessible and visually appealing user experience.

## Features

-   **Dark Mode/Light Mode:** Toggle between light and dark themes for a personalized experience.
-   **Fetch Games by Genre:** Explore games categorized by their genre.
-   **Skeleton Loader:** Seamless UI with skeleton loaders while data is being fetched.
-   **Game Details:** View game ratings, supported platforms, and other details.

## Technologies Used

The project leverages the following libraries and plugins:

-   [React](https://reactjs.org/) (v18.3.1): For building the user interface.
-   [React DOM](https://reactjs.org/docs/react-dom.html) (v18.3.1): For rendering components to the DOM.
-   [Axios](https://axios-http.com/) (v1.7.9): For making API requests.
-   [Chakra UI](https://chakra-ui.com/) (v3.2.3): For a customizable and accessible UI design.
-   [Emotion](https://emotion.sh/docs/introduction) (v11.14.0): For styling components.
-   [React Icons](https://react-icons.github.io/react-icons/) (v5.4.0): For adding scalable icons.
-   [Next Themes](https://github.com/pacocoursey/next-themes) (v0.4.4): For theme switching functionality.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/game-gub.git
    cd game-gub
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:3000` to see the application.

## Scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the project for production.
-   `npm start`: Run the production build.

## Folder Structure

```plaintext
src/
├── components/       # Reusable UI components
├── pages/            # Next.js pages
├── styles/           # Global and component-specific styles
├── utils/            # Utility functions and API handlers
└── hooks/            # Custom React hooks
```

## Contributing

Contributions are welcome! If you'd like to improve Game Gub, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore and enjoy Game Gub! 🚀
