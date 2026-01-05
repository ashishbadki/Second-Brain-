import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Brains() {
  const [owned, setOwned] = useState([]);
  const [shared, setShared] = useState([]);

  useEffect(() => {
    const fetchBrains = async () => {
      try {
        const res = await API.get("/accessibleContent");
        setOwned(res.data.ownedContent);
        setShared(res.data.sharedContent);
      } catch (err) {
        alert("Failed to load brains");
        console.log(err);
      }
    };

    fetchBrains();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* MY BRAINS */}
        <h2 className="text-2xl font-bold mb-4">My Brains</h2>

        {owned.length === 0 && <p>No content created yet.</p>}

        {owned.map((item) => (
          <div
            key={item._id}
            className="bg-white p-4 mb-3 rounded-lg shadow"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}

        {/* SHARED BRAINS */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Shared With Me</h2>

        {shared.length === 0 && <p>No shared content.</p>}

        {shared.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-3 rounded-lg shadow"
          >
            <h3 className="font-semibold">{item.content?.title}</h3>
            <p className="text-gray-600">{item.content?.description}</p>
            <p className="text-sm text-blue-600">
              Access: {item.accessType}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
