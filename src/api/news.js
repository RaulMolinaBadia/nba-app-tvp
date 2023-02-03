import { useState, useEffect } from 'react'

export default function useHandlerNews () {
  const [post, setPost] = useState([])

  useEffect(() => {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'X-RapidAPI-Key': 'e8079d9059mshaf2885320dead3bp16650ejsne54672d3a921'
    }
    fetch('https://nba-latest-news.p.rapidapi.com/articles', {
      method: 'GET',
      headers: headersList
    })
      .then(response => response.json())
      .then(data => {
        setPost(data)
      })
  }, [!post])
  return post
}
