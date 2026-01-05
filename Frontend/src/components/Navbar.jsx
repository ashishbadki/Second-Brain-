import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="flex gap-6 items-center">
  <h1 className="text-xl font-bold cursor-pointer">
    Second Brain
  </h1>

  <button
    onClick={() => navigate("/brains")}
    className="text-blue-600 hover:underline"
  >
    View Brains
  </button>
</div>

      <button
        onClick={logout}
        className="text-red-600 font-medium hover:underline"
      >
        Logout
      </button>
    </div>
  );
}
