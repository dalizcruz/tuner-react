import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <h1>
        <Link to="/songs/:id">Songs Index</Link>
      </h1>
      <h1>
        <Link to="/songs/new">Songs New</Link>
      </h1>
    </nav>
  );
}