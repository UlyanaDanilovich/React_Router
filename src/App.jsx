import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./components/pages/wrapper";
import Users from "./components/pages/users/index.jsx";
import User from "./components/pages/user/index.jsx";
import Albums from "./components/pages/albums/index.jsx";
import Album from "./components/pages/album/index.jsx";
import NotFound from "./components/pages/notFound/index.jsx";

import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId/albums",
        element: <User />,
      },
      {
        path: "users/:userId/albums/:albumId",
        element: <Album />,
      },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
