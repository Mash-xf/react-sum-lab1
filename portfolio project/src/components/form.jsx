import { useState } from "react";

function Form({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }

    const newProject = {
      title,
      description,
    };

    try {
      const response = await fetch("http://localhost:3500/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      const data = await response.json();

      addProject(data);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <label htmlFor="projectName">Project Name</label>

      <input
        type="text"
        placeholder="Add project Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>

      <textarea
        placeholder="Add project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">
        Add Project
      </button>
    </form>
  );
}

export default Form;
