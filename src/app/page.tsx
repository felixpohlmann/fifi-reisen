"use client"

import Image from 'next/image'
import { useState } from 'react'


export default function Home() {

  const code = "FLY4-FREE-YULUV2FLY"
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState<Boolean | null>(null)

  const handleInput = () => {
    if (input === code) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <header>
        <Image
          alt="logo-image"
          src="/imagery/logo.png"
          width="300"
          height="300"
        />
        <h1 className="mb-10 text-center">Willkommen bei FiFi-Reisen!</h1>
      </header>
      <main>
        <h4 className="mb-2 text-center">Bitte geben Sie ihren Gutscheincode ein!</h4>

        {isValid === false && (
          <div role="alert" className="alert alert-error mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Invalider Code!</span>
          </div>
        )}


        {isValid === true && (
          <div role="alert" className="alert alert-success mb-5 flex flex-column">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Code gültig!</span>
            <Image
              alt="logo-image"
              src="/imagery/mimi.jpg"
              width="300"
              height="300"
            />
          </div>


        )}

        <input type="text"
          onChange={e => setInput(e.target.value)}
          placeholder="XXXX-XXXX-XXXX" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary w-full mt-5" onClick={() => handleInput()}>Einlösen! </button>
      </main>
    </div>
  )
}
