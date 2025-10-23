import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Copyright ©2025 All Rights Reserved.</footer>
    </>
  );
}
