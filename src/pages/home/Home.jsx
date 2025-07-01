import HomeLayout from "../../layouts/HomeLayout";
import Login from "../auth/Login";

export default function Home() {
  return (
    <HomeLayout>
      <Login />
    </HomeLayout>
  );
}
