import {useEffect, useState} from 'react'
import axios from 'axios'
import '../components/ApiTest.css'

const ApiTest = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const FetchData = async ()=>{
    try {
    const res = await axios.get('https://www.example.com/users')
    console.log(res.data)
    } catch(err){
      console.error("unable to fetch users")
    }
  }

  useEffect(()=>{
    FetchData()
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (email === "" && password === ''){
      return alert("Put in your details")
    }
    try{
    await axios.post('https://example.com/users',{email, password})
    setEmail('')
    setPassword('')
    
    FetchData()
    } catch(error){
      setError("Failed to log in");
    }
  }

  return (
    <aside>
      <div className='email-div'>
        <label htmlFor="email" className=''>Email</label>
        <input type="text" placeholder='Your Email' value={email} className='email-input' onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <div className='password-div'>
        <label htmlFor="password" className=''>Password</label>
        <input type="password" placeholder='Password' value={password} className='email-input' onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </aside>
  )
}

export default ApiTest