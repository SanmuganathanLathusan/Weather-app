import { useState, useRef } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')
  const timeoutRef = useRef(null)

  const handleChange = (e) => {
    const val = e.target.value
    setInput(val)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      if (val.trim()) {
        onSearch(val)
      }
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (input.trim()) {
      onSearch(input)
    }
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        spellCheck="false"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">
        <img src="/images/search.png" alt="Search" />
      </button>
    </form>
  )
}

export default SearchBar
