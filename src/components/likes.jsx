import {useState} from 'react'

const Likes = () => {
  const [like, setLike] = useState(0)

  const likeChanges = () => {
    setLike((prev) => prev + 1)
  }

  const reset = () => {
    setLike((prev) => prev = 0)
  }

  return (
    <div>
      <button onClick={likeChanges}>Add</button>
      <h1>Likes {like}</h1>
      <button onClick={reset}>Clear</button>
    </div>
  )
}

export default Likes