import { useEffect, useState } from "react";
import type { User } from "../../types/User";

export default function Profile() {

  const [user, setUser] = useState<User | undefined>(undefined);
 

  async function fetchProfile() {
    const token = localStorage.getItem("access_token");
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const currentUser = await res.json();
    setUser(currentUser);
  }

  useEffect(() => {fetchProfile()}, []);

  return (
    <div>
      Profile
      {user?.email}
    </div>
  )
}
