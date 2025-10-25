import styles from "./ChildB.module.css";

interface Props {
  kindness: number;
}

export default function ChildB(props: Props) {
  const { kindness } = props;
  return <div className={styles.container}>ChildB Kindness: {kindness}</div>;
}