import React from 'react'
import {Link} from 'react-router-dom'

function TouchMail() {
  return (
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md text-center">
        <h1 class="text-green-500 text-2xl font-semibold">Mail Successfully Send!</h1>
        <p class="text-gray-700 text-base">Your all valuable message send to our server. Thank you for you time.</p>
        <Link to="/home" class="mt-6 inline-block text-white bg-green-500 py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">Go to Home Page</Link>
    </div>

  )
}

export default TouchMail
