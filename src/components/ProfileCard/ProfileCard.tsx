interface Props {
  avatar: string;
  description: string;
  name: string;
}

export default function ProfileCard(props: Props) {
  const { name, avatar, description } = props;
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <img src={avatar} alt={name} />
      <p>{description}</p>
    </div>
  );
}
