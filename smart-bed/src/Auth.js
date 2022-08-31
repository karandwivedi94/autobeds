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
        .from('users')
        .insert([{ first_name: firstName, last_name: lastName, email: email }])
            console.log("Names: ", data);
        

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Thank you for your Subscription')
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
 <div className='form-container'>
      <div>
        <h1 className="header"></h1>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form className='log-in-form' onSubmit={handleLogin}>
            <h1 className='form-heading-1'>Subscribe and Get a free 3 week trial</h1>
            <h3 className='form-heading-3'>Subscribe to our newsletter to get the voucher code and  latest offers and updates straight to your inbox</h3>
           
            <label className='first-name'>First Name</label><input
            id="firstname"
            className="input-first"
            required
            type="text"
            placeholder="Your First Name"
            value={firstName}
            onChange={handleFirstName} />
                
            <label className='last-Name'>Last Name</label><input
            id="lastname"
            className="input-last"
            required
            type="text"
            placeholder="Your Last Name"
            value={lastName}
            onChange={handleLastName} />
            
            <label className='email-form' htmlFor="email">Email</label>
            <input
              id="email"
              className="input-email"
              required
              type="email"
              placeholder="abc@xyz.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button--block" >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>

  )
}