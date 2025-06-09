import { useState , useCallback, useEffect, useRef } from 'react'
//Useref use to store a mutable value that does not cause re-renders when changed.
// It can be used to access DOM elements directly or to store any mutable value that you want to persist across renders without triggering a re-render.

// Useeffect describe
// This is a simple password generator application built with React.
// UseEffect is used to run side effects in function components.
// It allows you to perform actions like data fetching, subscriptions, or manually changing the DOM in function components.

import './App.css'

function App() {
  const [Length, SetLength] = useState(8)
  const[Number, SetNumber] = useState(false)
  const[Lowercase, SetLowercase] = useState(false)
  const[Uppercase, SetUppercase] = useState(false)
  const[Symbol, SetSymbol] = useState(false)
  const[Password, SetPassword] = useState('')

  //Useref
  const passwordRef = useRef(null)


  const PasswordGenerator = useCallback(() => {
    let characterList =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
    if (Number) characterList += '0123456789'
    if (Lowercase) characterList += 'abcdefghijklmnopqrstuvwxyz'
    if (Uppercase) characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (Symbol) characterList += '!@#$%^&*()_+[]{}|;:,.<>?'



    let generatedPassword = ''
    for (let i = 1; i <= Length; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length)

      generatedPassword += characterList[randomIndex]
    }

    SetPassword(generatedPassword)
  },
  [Length, Number, Lowercase, Uppercase, Symbol, SetPassword])
  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // and only changes when the dependencies change.

  const copytoclipboard = () => {
    
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0, 9) // For mobile devices
      
      // alert('Password copied to clipboard!')

      // Or
      // window.navigator.clipboard.writeText(Password)
    
  }


  useEffect(() => {
    PasswordGenerator()
  }, [Length, Number, Lowercase, Uppercase, Symbol, PasswordGenerator])
  // useEffect is used to run side effects in function components.
  return (
    <>
      {/* Box section */}
      <div className="w-300 h-100 p-10 m-10  bg-gray-800 text-orange-500 rounded-lg shadow-lg">  
        <h1 className='text-4xl font-bold text-center'>Password Generator</h1>
        {/* Input Section */}
        <input className='w-full p-4 my-6   border border-gray-700 rounded text-gray-500 bg-white text-2xl '
         type="text" 
         value={Password} readOnly 
          ref={passwordRef}
         placeholder=" Password" 
        />
        {/* Copy Section */}
        <button className='w-full p-6 my-6 border border-gray-700 rounded text-gray-500 bg-white text-orange-500 text-2xl ' 
        onClick={copytoclipboard}>
        
          COPY
        </button>
      {/* Range Section and Check boxex Section */}
        <div className="flex justify-between text-xl font-bold">
          {/* Range Section  */}
          <div className="flex justify-center text-xl font-bold">
        <input type="range" name="" id=""
        min={8}
        max={50}
        value={Length}
        className='cursor-pointer text-'
        onChange={(e) => SetLength(e.target.value)}
        />
        <label htmlFor="">
          Length : {Length}
        </label>
      </div>

          {/* Checkboxes Section */}
          <label htmlFor="">
            <input type="checkbox" 
            checked={Number} 
            onChange={() => SetNumber((prev) => !prev)} />
            Include Numbers
          </label>
          <label htmlFor="">
            <input type="checkbox" 
            checked={Lowercase} 
            onChange={() => SetLowercase((prev) => !prev)} />
            Include Lowercase
          </label>
          <label htmlFor="">
            <input type="checkbox" 
            checked={Uppercase} 
            onChange={() => SetUppercase((prev) => !prev)} />
            Include Uppercase
          </label>
          <label htmlFor="">
            <input type="checkbox" 
            checked={Symbol} 
            onChange={() => SetSymbol((prev) => !prev)} />
            Include Symbols
          </label>
        </div>
       
      </div>
      
    </>
  )
}

export default App
