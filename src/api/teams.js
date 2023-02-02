import { useState, useEffect } from 'react'

export default function useHandlerTeams (apiURL) {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setPost(data.data)
      })
  }, [!post])
  console.log(post)
  return post
}
