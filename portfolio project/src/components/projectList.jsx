function ProjectList({ projects }) {
    if (projects.length === 0) {
        return (
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
            <p className="text-gray-500">No projects found.</p>
          </div>
        );
    }

    return (
        <div className="card">
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
