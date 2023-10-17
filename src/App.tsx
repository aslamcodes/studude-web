import Home from "src/pages/Home";
import NotebookPage from "src/pages/Notebook";
import Page from "src/pages/Page";
import Login from "src/pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  return (
    <RouterProvider router={router}>
      {/* <Router>
        <Route path="/" component={Home} />
        <Route path="/notebook/id" component={NotebookPage} />
        <Route path="/notebook/page/id" component={Page} />
        <Route path="/login" component={Login} />
      </Router> */}
    </RouterProvider>
  );
}

export default App;
