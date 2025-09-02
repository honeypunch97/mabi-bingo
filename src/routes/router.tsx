import { createBrowserRouter } from "react-router-dom";
import GlobalLayout from "../layouts/GlobalLayout";
import BingoPage from "../pages/BingoPage";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: '',
    element: <GlobalLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path:'bingo',
        element: <BingoPage />,
      }
    ]
  }
])

export default router;