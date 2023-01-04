import { FC } from "react";
import classes from "./Spinner.module.scss";

type SpinnerProps = {
  size?: "large" | "small";
};

const Spinner: FC<SpinnerProps> = ({ size }) => {
  return (
    <div className={classes.Spinner}>
      <div className={classes.Spinner__circle} data-size={size}></div>
    </div>
  );
};

Spinner.defaultProps = { size: "large" };

export default Spinner;
