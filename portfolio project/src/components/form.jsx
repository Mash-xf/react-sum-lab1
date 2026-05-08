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
    <div className="card mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
            Project Name
          </label>
          <input
            id="projectName"
            type="text"
            placeholder="Add project Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Add project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
          ></textarea>
        </div>

        <button type="submit" className="button-primary">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default Form;
