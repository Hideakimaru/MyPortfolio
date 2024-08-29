import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./utils/NotFound/NotFound.tsx";
import Home from "./components/Home/Home.tsx";
import Projects from "./components/Projects/Projects.tsx";
import About from "./components/About/About.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/projects", element: <Projects /> },
			{ path: "/about", element: <About /> },
			{ path: "/contacts", element: <Contacts /> }
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
