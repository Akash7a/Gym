import React from 'react'
import Button from './Button'
import { Star } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop)",
      }}
    >
      <div className="max-w-7xl mx-auto py-28 px-6 md:px-12 w-full text-white">

        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Your <span className="text-yellow-400">Fitness Journey Starts</span> Here
          </h1>
          <p className="mt-4 md:mt-6 text-gray-200 text-base md:text-lg">
            Transform your body with expert trainers, modern equipment, and
            personalized workout plans. Start today and become the strongest
            version of yourself.
          </p>

          <div className="mt-6 md:mt-8">
            <Button innerText="Join Now" />
          </div>

          <div className="flex items-center gap-2 mt-6 md:mt-8 flex-wrap">
            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={20}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}

            <span className="text-sm text-gray-300 ml-2">
              4.9 (2.5k Reviews)
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero