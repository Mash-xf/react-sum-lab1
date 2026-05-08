import { useEffect, useState } from 'react'
import Title from './components/title'
import Form from './components/form'
import SearchBar from './components/searchbar'
import ProjectList from './components/projectList'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const searchedProjects = projects.filter((project) => {
    const searchText = searchTerm.toLowerCase()

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText)
    )
  })

  return (
    <div className="app-shell">
      <div className="app-container">
        <Title />
        <hr className="separator" />
        <Form addProject={addProject} />
        <SearchBar onSearch={setSearchTerm} />
        <ProjectList projects={searchedProjects} />
      </div>
    </div>
  )
}

export default App
