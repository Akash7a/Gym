import React, { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Button from "../components/Button.jsx"
import Input from "../components/Input.jsx"

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-950 text-white">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-yellow-500">Us</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Have questions? Reach out and start your fitness journey today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <Phone className="text-yellow-500" />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-yellow-500" />
            <p>gym@example.com</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-yellow-500" />
            <p>Delhi, India</p>
          </div>

          <p className="text-gray-400 mt-6">
            Visit our gym and experience world class training facilities and expert coaching.
          </p>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black p-8 rounded-xl border border-gray-800 space-y-6"
        >

          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
          />

          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
          />

          <Button
            type="submit"
            innerText="Send Message"
            className="bg-yellow-600 px-6 py-3 text-black rounded-md font-semibold hover:bg-yellow-500"
          />

        </form>

      </div>

    </section>
  )
}

export default Contact