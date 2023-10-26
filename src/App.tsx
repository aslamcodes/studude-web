import Home from "src/pages/Home";
import NotebookPage from "src/pages/Notebook";
import Page from "src/pages/Page";
import Login from "src/pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { io } from "socket.io-client";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/notebook/:notebookId/page/:pageId",
    element: <Page />,
  },
  {
    path: "/notebook/:id/",
    element: <NotebookPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("reminder", () => {
      alert("Study Bro!");
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
