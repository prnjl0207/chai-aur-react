import { Outlet } from "react-router";

function App() {
  return (
    <div className="mx-auto max-w-[1575px]">
      <h4>I am header</h4>
      <Outlet />
      <h4>I am footer</h4>
    </div>
  );
}

export default App;
