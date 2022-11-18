import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create_new">Create New</Link>
          </li>
          <li>
            <Link to="/go_to">Go To Post</Link>
          </li>
          <li>
            <Link to="/list">List Public Pastes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
	  <br />
	  <br />
	  <br />
	  <br />
	  <a href="https://github.com/jonahksimmons/cs_260_creative_project_4">Link to github repo</a>
    </>
  )
};

export default Layout;

