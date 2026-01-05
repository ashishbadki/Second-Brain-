import { useState } from "react";
import API from "../api/api";

export default function Share() {
  const [contentId, setContentId] = useState("");
  const [email, setEmail] = useState("");

  const share = async () => {
    try {
      await API.post("/shareContent", {
        contentId,
        email,
        accessType: "view",
      });
      alert("Content shared");
    } catch {
      alert("Sharing failed");
    }
  };

  return (
    <div>
      <h2>Share Content</h2>
      <input placeholder="Content ID" onChange={(e) => setContentId(e.target.value)} />
      <input placeholder="User Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={share}>Share</button>
    </div>
  );
}
