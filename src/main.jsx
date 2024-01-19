import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/main.scss";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];

for (const path of Object.keys(pages)) {
	const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
	if (!fileName) {
		continue;
	}

	const normalizedPath = fileName.includes("$")
		? fileName.replace("$", ":")
		: fileName.replace(/\/index/, "");

	routes.push({
		path: fileName === "index" ? "/" : `${normalizedPath.toLocaleLowerCase()}`,
		Element: pages[path].default,
		loader: pages[path]?.loader,
		action: pages[path]?.action,
		ErrorBoundary: pages[path]?.ErrorBoundary,
	});
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
			...rest,
			element: <Element />,
			...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
		})),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
