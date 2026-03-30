import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Finance App
        </h1>

        <SignedOut>
          <p className="text-gray-500 mb-4">Please sign in to continue</p>
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <p className="text-gray-500 mb-4">You are signed in!</p>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default App