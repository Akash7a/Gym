import React from 'react'

const Transformation = () => {

  const transformations = [
    {
      name: "Rahul Sharma",
      before: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1000&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1000&auto=format&fit=crop",
      result: "Lost 18kg in 6 months"
    },
    {
      name: "Raj Singh",
      before: "https://plus.unsplash.com/premium_photo-1716312742884-3c1ecd2c035d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhdCUyMGJveXxlbnwwfHwwfHx8MA%3D%3D",
      after: "https://images.unsplash.com/photo-1584952449254-80c846de339d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwYm95fGVufDB8fDB8fHww",
      result: "Lost 12kg in 4 months"
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6 md:px-16 bg-black text-white">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Real <span className="text-yellow-500">Transformations</span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm md:text-base">
          See how our members transformed their bodies with our programs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {transformations.map((t, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl overflow-hidden transition transform hover:scale-105 duration-300"
          >

            {/* Images */}
            <div className="grid grid-cols-2">

              <div className="relative">
                <img
                  src={t.before}
                  alt="before"
                  className="h-40 sm:h-52 md:h-64 w-full object-cover"
                />

                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Before
                </span>
              </div>

              <div className="relative">
                <img
                  src={t.after}
                  alt="after"
                  className="h-40 sm:h-52 md:h-64 w-full object-cover"
                />

                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  After
                </span>
              </div>

            </div>

            {/* Content */}
            <div className="p-4 md:p-6 text-center">

              <h3 className="text-lg md:text-xl font-semibold">
                {t.name}
              </h3>

              <p className="text-yellow-500 mt-2 text-sm md:text-base">
                {t.result}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Transformation