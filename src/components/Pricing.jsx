import React from 'react'
import Button from '../components/Button'

const Pricing = () => {

  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Facility",
        "1 Trainer Session"
      ]
    },
    {
      name: "Pro",
      price: "₹1999",
      popular: true,
      features: [
        "All Basic Features",
        "Personal Trainer",
        "Diet Plan",
        "Cardio + Strength Training"
      ]
    },
    {
      name: "Elite",
      price: "₹2999",
      features: [
        "All Pro Features",
        "Unlimited Trainer Support",
        "Advanced Programs",
        "Priority Support"
      ]
    }
  ]

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-950 text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Membership <span className="text-yellow-500">Plans</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Choose a plan that fits your fitness goals.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-8 rounded-xl border text-center transition hover:scale-105 
            ${plan.popular ? "border-yellow-500 bg-black" : "border-gray-800 bg-black"}`}
          >

            {plan.popular && (
              <span className="bg-yellow-500 text-black px-3 py-1 text-xs font-semibold rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold mt-4">
              {plan.name}
            </h3>

            <p className="text-4xl font-bold mt-4 text-yellow-500">
              {plan.price}
              <span className="text-sm text-gray-400"> / month</span>
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {plan.features.map((f, index) => (
                <li key={index}>✔ {f}</li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                innerText="Join Now"
                className="bg-yellow-600 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500"
              />
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Pricing