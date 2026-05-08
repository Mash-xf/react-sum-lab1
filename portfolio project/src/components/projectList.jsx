function ProjectList({ projects }) {
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
