import { useState, useEffect } from 'react'
import supabase from '../supabaseClient'
import Auth from '../Auth'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (

      <div>

    <div className="Home">
      <Home />

    </div>
        
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
          <Auth />
        </div>
        
        </div>

  )
}
