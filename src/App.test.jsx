import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

const mockProjects = [
  { id: 1, title: 'Calculator', description: 'A simple math app' },
  { id: 2, title: 'Weather App', description: 'Shows local forecast' },
  { id: 3, title: 'Todo List', description: 'Tracks daily tasks' },
]

describe('App search behavior', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProjects),
      })
    ))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('finds searched items from the mocked db.json response', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByText('Calculator')).toBeTruthy()
      expect(screen.getByText('Weather App')).toBeTruthy()
      expect(screen.getByText('Todo List')).toBeTruthy()
    })

    const searchInput = screen.getByPlaceholderText(/search projects/i)
    await userEvent.type(searchInput, 'weather')

    const searchButton = screen.getByRole('button', { name: /search/i })
    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(screen.queryByText('Calculator')).toBeNull()
      expect(screen.queryByText('Todo List')).toBeNull()
    })

    expect(screen.getByText('Weather App')).toBeTruthy()
  })
})