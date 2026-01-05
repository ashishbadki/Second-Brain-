import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addContent = async () => {
    try {
      await API.post("/addContent", {
        title,
        description,
        links: [],
        tags: [],
      });
      alert("Content added");
      setTitle("");
      setDescription("");
    } catch {
      alert("Failed to add content");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">
          Add Content
        </h3>

        <input
          className="w-full mb-3 px-4 py-2 border rounded-lg"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addContent}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
}
