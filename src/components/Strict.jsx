import {useState} from 'react'

const Strict = () => {
  const [name, setName] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log((name))
    setName('')
  }

    return (
    <div>
      <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Strict