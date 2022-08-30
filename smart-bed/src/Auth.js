import { useState } from 'react'
import supabase from './supabaseClient'


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    
        const { data, error } = await supabase
        .from('user_name')
        .insert([{ first_name: firstName, last_name: lastName }])
            console.log("Names: ", data);
        

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }
  const handleFirstName = async (e) => {
    e.preventDefault()
    SetFirstName(e.target.value)
    }

    const handleLastName = async (e) => {
    e.preventDefault()
    SetLastName(e.target.value)
    }



  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header"></h1>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <label>First Name</label><input
            id="lastname"
            className="inputField"
            type="text"
            placeholder="Your Last Name"
            value={firstName}
            onChange={handleFirstName} />
                
            <label>Last Name</label><input
            id="firstname"
            className="inputField"
            type="text"
            placeholder="Your Last Name"
            value={lastName}
            onChange={handleLastName} />
            
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Subscription
            </button>
          </form>
        )}
      </div>
    </div>
  )
}