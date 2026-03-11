import React from 'react'
import Card from '../components/Card'

const Programs = () => {

  const programs = [
    {
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      title: "Beginner Program",
      desc: "Perfect for beginners who want to start their fitness journey."
    },
    {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      title: "Muscle Building",
      desc: "Structured workouts to build strength and gain muscle mass."
    },
    {
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
      title: "Fat Loss Program",
      desc: "High intensity training designed to burn fat quickly."
    },
    {
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
      title: "Athlete Training",
      desc: "Advanced training plans for athletes and professionals."
    }
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-black text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our <span className="text-yellow-500">Programs</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Choose the perfect training program based on your fitness goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {programs.map((program, i) => (
          <Card
            key={i}
            image={program.image}
            title={program.title}
            desc={program.desc}
          />
        ))}

      </div>

    </section>
  )
}

export default Programs