import "./App.css";
import { Link } from "react-router-dom";
import MonsterPage from "./features/monster/MonsterPage";
import { Counter } from "./features/counter/Counter";
import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "./features/auth0/Profile";
import ProtectedRoute from "./features/auth0/ProtectedRoute";
import AuthenticationButton from "./features/auth0/AuthenticationButton";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="counter" element={<Counter />} />
          <Route
            path="monster"
            element={<ProtectedRoute component={MonsterPage} />}
          />
          <Route
            path="profile"
            element={<ProtectedRoute component={ProfilePage} />}
          />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <AuthenticationButton />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monster">Monster</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}

function ProfilePage() {
  return (
    <div>
      <h2>Profile</h2>
      <Profile />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
