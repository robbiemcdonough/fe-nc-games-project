import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="Nav">
      <Link className="Link" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Nav;
