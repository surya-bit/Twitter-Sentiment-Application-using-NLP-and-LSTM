import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import happy from './assets/happy.gif'
import sad from './assets/sad.gif'
import love from './assets/love.gif'
import angry from './assets/anger.gif'
import fear from './assets/fear.gif'
import surprise from './assets/surprise.gif'
function App() {
  const [loading , setLoading] = useState(true)
  const [query , setQuery ] = useState('')
  const [results, setResults] = useState('')
  const emotions = [{
    code : 0,
    name: 'sadness',
    emoji: sad
  },{
    code : 1,
    name: 'joy',
    emoji: happy
  },{
    code : 2,
    name: 'love',
    emoji: love
  },{
    code : 3,
    name: 'anger',
    emoji: angry
  },{
    code : 4,
    name: 'fear',
    emoji: fear
  },{
    code : 5,
    name: 'suprise',
    emoji: surprise
  },
  ]
 const handleChange = (e) => {
    setQuery(e.target.value)
 }
    const postData = {
        key1: query
    }
 const  handleSubmit = async (e) => {
     e.preventDefault()
     if (query.trim !== ''){
        await  axios.post(apiUrl,postData)
             .then((response) => setResults(Number(response.data)))
             .then((response) => console.log(response.data))
             .then(setLoading(false))
             .catch((error) => console.error(error) )
     }
     
    
 }
     //localhost link to Python server (server.py)
  const apiUrl = 'http://127.0.0.1:5000'
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <div className='w-screen flex items-center justify-center gap-1'>
      <form className='w-screen flex items-center justify-center gap-1' onSubmit={handleSubmit}>
      <input autoFocus={true} className='w-3/4 h-10 rounded-full border-2 p-2' type='text' value={query} onChange={handleChange} placeholder='Enter your query here...' />
    <button className='bg-blue-500 h-10  w-16 rounded-full flex items-center justify-center' type='submit'  >  
      <FaSearch />
      </button>
      </form>
      </div>
      <div className='w-3/4 h-1/2 border-2 rounded-xl mt-16 flex flex-col items-center justify-center'>
        {query ? 
            <div>
            <span className='m-12'>
            {query}
            </span> 
            </div>: null

        }
      {!loading ? 
        emotions.filter(item =>  item.code === results).map(item => (
            <div key={item.code} className='flex gap-3 justify-center items-center'>
            <span>{item.name}</span> 
            <img className='h-24' src={item.emoji} />
            </div>
        ))
        
            : 
              null
        }

      </div>
    </div>
  )
}

export default App
