import React from 'react'

const Trainers = () => {

  const trainers = [
    {
      name: "Rahul Singh",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
    },
    {
      name: "Ankit Verma",
      role: "Cardio Specialist",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
    },
    {
      name: "Priya Sharma",
      role: "Yoga Trainer",
      image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg"
    },
    {
      name: "Rohit Mehta",
      role: "Bodybuilding Coach",
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg"
    }
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-black text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Meet Our <span className="text-yellow-500">Trainers</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Our expert trainers are here to guide you at every step.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {trainers.map((trainer, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition"
          >

            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-xl font-semibold">
                {trainer.name}
              </h3>

              <p className="text-yellow-500 text-sm mt-1">
                {trainer.role}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Trainers