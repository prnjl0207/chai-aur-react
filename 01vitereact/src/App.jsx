import { Outlet } from "react-router";

function App() {
  return (
    <>
      <h4>I am header</h4>
      <Outlet />
      <h4>I am footer</h4>
    </>
  );
}

export default App;
