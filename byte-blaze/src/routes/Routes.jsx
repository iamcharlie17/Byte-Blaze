import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import Content from "../components/Content";
import Author from "../components/Author";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content/>
          },
          {
            path: 'author',
            element: <Author/>
          }
        ]
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
    ],
  },
]);