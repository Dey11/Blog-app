import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
