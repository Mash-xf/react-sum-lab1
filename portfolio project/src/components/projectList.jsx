function ProjectList({ projects }) {
    if (projects.length === 0) {
        return <p className="empty-projects">No projects found.</p>;
    }

    return (       
        <div className="project-grid">      
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
