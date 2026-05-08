import React from "react";
import React, { useState } from "react";

function Form({ addProject }) {
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (project.trim() === "" || description.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }

    const newProject = {
      project,
      description,
    };

    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      const data = await response.json();

      // Optional: update UI immediately
      addProject(data);

      setProject("");
      setDescription("");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="projectName">Project Name</label>

      <input
        type="text"
        placeholder="Add project Name"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />

      <label htmlFor="description">Description</label>

      <textarea
        placeholder="Add project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded p-2"
      ></textarea>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2"
      >
        Add Project
      </button>
    </form>
  );
}

export default Form;