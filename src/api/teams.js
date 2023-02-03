import { useState, useEffect } from 'react'

export default function useHandlerTeams () {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/teams')
      .then(response => response.json())
      .then(data => {
        setPost(data.data)
      })
  }, [!post])
  return post
}
