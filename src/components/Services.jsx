import React from 'react'
import { Dumbbell, HeartPulse, Flame, Apple } from "lucide-react"
import Card from "../components/Card"

const Services = () => {

  const services = [
    {
      icon: <Dumbbell size={32} />,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      title: "Weight Training",
      desc: "Build strength and muscle with professional training programs."
    },
    {
      icon: <HeartPulse size={32} />,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      title: "Cardio Training",
      desc: "Improve stamina and heart health with modern cardio equipment."
    },
    {
      icon: <Flame size={32} />,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
      title: "Fat Loss Program",
      desc: "Special workout plans designed to help you burn fat faster."
    },
    {
      icon: <Apple size={32} />,
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
      title: "Diet Consultation",
      desc: "Get customized nutrition plans from expert fitness coaches."
    }
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-950 text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-gray-400 mt-4">
          We provide complete fitness solutions to help you reach your goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, i) => (
          <Card
            key={i}
            image={service.image}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}

      </div>

    </section>
  )
}

export default Services