import type { JSX } from "react";
import { Link, Outlet } from "react-router-dom";

export function Layout(): JSX.Element {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
