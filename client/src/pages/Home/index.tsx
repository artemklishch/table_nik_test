import { FC } from "react";
import classes from "./HomePage.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const HomePage: FC = () => {
  return (
    <div className={classes.HomePage}>
      <h1 className={classes.HomePage__title}>
        Welcome to favorite users web-site!
      </h1>
      <p className={classes.HomePage__link}>
        <NavLink to={routes.usersPageRoute}>
          Go to the Users Page and see!
        </NavLink>
      </p>
    </div>
  );
};

export default HomePage;
