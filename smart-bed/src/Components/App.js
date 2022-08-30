import { useState, useEffect } from 'react'
import supabase from '../supabaseClient'
import Auth from '../Auth'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import './home.css';


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
    <BrowserRouter>
    <div className="container">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Subscribe" element={<Auth  />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

  