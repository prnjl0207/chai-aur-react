import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import BgChanger from "./BgChanger.jsx";
import Counter from "./Counter.jsx";
import Chai from "./Chai.jsx";
import Password from "./Password.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "bgchanger",
//         element: <BgChanger />,
//       },
//       {
//         path: "counter",
//         element: <Counter />,
//       },
//       {
//         path: "chai",
//         element: <Chai name="Pranjallll" surname="Vermaaaa" />,
//       },
//       {
//         path: "password",
//         element: <Password />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="chai/:id" element={<Chai />}></Route>
      <Route path="bgchanger" element={<BgChanger />}></Route>
      <Route path="counter" element={<Counter />}></Route>
      <Route path="password" element={<Password />}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
