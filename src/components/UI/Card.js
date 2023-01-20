import classes from "./Card.module.css";

export default function Card({ children }) {
  return (
    <div className={classes.card}>
      <div className={classes.container}>{children}</div>
    </div>
  );
}
