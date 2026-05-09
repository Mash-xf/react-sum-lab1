import { useEffect, useState } from 'react'
import Title from './components/title'
import Form from './components/form'
import SearchBar from './components/searchbar'
import ProjectList from './components/projectList'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {
      "id": "1",
      "title": "Voting poll app",
      "description": "This is a voting poll app built with React and Tailwind CSS. It allows users to create and participate in polls, view results, and share polls with others."
    },
    {
      "id": "2",
      "title": "Blog platform",
      "description": "This is a simple blog platform built with React and Tailwind CSS. It allows users to create, edit, and delete blog posts, as well as view a list of all posts."
    },
    {
      "id": "3",
      "title": "E-commerce website",
      "description": "This is an e-commerce website built with React and Tailwind CSS. It allows users to browse products, add items to their cart, and complete purchases."
    },
    {
      "title": "chatting App",
      "description": "it helps the users to chat freely without restriction and it helps users to have end to end encrpted\n",
      "id": "svEnDgY"
    }
  ])
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
