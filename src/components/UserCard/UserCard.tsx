import { Link } from "react-router-dom";
import type { User } from "../../types/User";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <h3>{user.name}</h3>
      </Link>
      <img src={user.avatar} alt={user.name} />
      <p>{user.email}</p>
    </li>
  );
}
