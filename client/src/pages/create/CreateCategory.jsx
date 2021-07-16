import { useContext, useState } from "react";

import axios from "axios";
import { Context } from "../../context/Context";
import "./create.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      cat,
    };
    try {
      const res = await axios.post("/auth/create", newPost);
      res.data && window.location.replace("/login");
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="category"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setCat(e.target.value)}
          />
        </div>

        <button className="writeSubmit" type="submit">
          Create
        </button>
      </form>
      <div className="height"></div>
    </div>
  );
}
