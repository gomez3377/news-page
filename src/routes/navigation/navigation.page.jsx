
import { Link, Outlet } from "react-router-dom";
import Logo from '../../assets/images/logo.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
