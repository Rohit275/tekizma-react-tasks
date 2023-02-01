import classes from "./Elevator.module.css";

export default function Elevator({ children }) {
  return (
    <div className={classes.card}>
      <div className={classes.container}>{children}</div>
    </div>
  );
}
