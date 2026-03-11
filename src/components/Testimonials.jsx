import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Testimonials = () => {

  const testimonials = [
    {
      name: "Rahul Sharma",
      review: "This gym completely transformed my body. Trainers are amazing!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ankit Verma",
      review: "Best equipment and environment. Highly recommended.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      name: "Priya Singh",
      review: "I lost 12kg in 4 months thanks to their program!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-950 text-white">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-yellow-500">Members Say</span>
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >

        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>

            <div className="bg-black p-8 rounded-xl border border-gray-800">

              <div className="flex items-center gap-4 mb-4">

                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <h4 className="font-semibold">{t.name}</h4>

              </div>

              <p className="text-gray-400 text-sm">
                "{t.review}"
              </p>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}

export default Testimonials