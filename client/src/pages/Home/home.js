import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome to the Code Editor App</h1>
      <nav>
        <Link to="/editor">Go to Code Editor</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Home;
