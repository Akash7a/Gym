import React from 'react'
import { Dumbbell, Users, Clock, HeartPulse } from "lucide-react"

const Features = () => {

  const features = [
    {
      icon: <Dumbbell size={40} />,
      title: "Modern Equipment",
      desc: "Train with the latest gym machines and world-class equipment."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Trainers",
      desc: "Certified trainers to guide you through every workout."
    },
    {
      icon: <Clock size={40} />,
      title: "Flexible Timing",
      desc: "Workout anytime with our flexible gym schedules."
    },
    {
      icon: <HeartPulse size={40} />,
      title: "Personal Training",
      desc: "Get personalized fitness plans tailored to your goals."
    }
  ]

  return (
    <section className='bg-black text-white py-20 px-6 md:px-16'>

      <div className='text-center mb-14'>
        <h2 className='text-4xl font-bold'>
          Why Choose <span className='text-yellow-500'>Our Gym</span>
        </h2>
        <p className='text-gray-400 mt-4'>
          We provide the best environment to transform your body and mind.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

        {features.map((f, i) => (
          <div
            key={i}
            className='bg-gray-900 p-8 rounded-xl text-center hover:bg-gray-800 transition'
          >
            <div className='text-yellow-500 flex justify-center mb-4'>
              {f.icon}
            </div>

            <h3 className='text-xl font-semibold mb-3'>{f.title}</h3>

            <p className='text-gray-400 text-sm'>{f.desc}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Features