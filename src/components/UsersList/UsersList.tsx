import useUsers from "../../hooks/useUsers";
import UserCard from "../UserCard/UserCard";

export default function UsersList() {
  const { users, message, loading } = useUsers();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
