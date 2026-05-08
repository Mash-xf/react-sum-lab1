import { useEffect, useState } from 'react'
import Title from './components/title'
import Form from './components/form'
import ProjectList from './components/projectList'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:3500/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load projects')
        }

        return response.json()
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error))
  }, [])

  const addProject = (newProject) => {
    setProjects((currentProjects) => [...currentProjects, newProject])
  }

  return (
    <>
      <Title />
      <Form addProject={addProject} />
      <ProjectList projects={projects} />
    </>
  )
}

export default App
