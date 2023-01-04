import { FC } from "react";
import classes from "./MainLayout.module.scss";
import UsersLogo from "../../assets/users.png";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={classes.MainLayout}>
      <header className={classes.MainLayout__header}>
        <NavLink
          to={routes.homePageRoute}
          className={classes.MainLayout__header_logo}
        >
          <img src={UsersLogo} alt="Users Logo" />
        </NavLink>
        <ul className={classes.MainLayout__header_nav}>
          <li>
            <NavLink to={routes.homePageRoute}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.usersPageRoute}>Users</NavLink>
          </li>
        </ul>
      </header>
      <main className={classes.MainLayout__main}>{children}</main>
      <footer className={classes.MainLayout__footer}>
        Enjoy to find your favorite users
      </footer>
    </div>
  );
};

export default MainLayout;
