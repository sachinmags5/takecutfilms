import { useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { motion } from "framer-motion";
import API from "../../services/api";

function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await API.post("/contact", form);
      const res = await fetch("https://takecutfilms.onrender.com/api/contact/sendContactMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {

        toast.success("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: ""
        });

      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (

    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-12">

      {/* LEFT SIDE INFO */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >

        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-10">
          Have a project idea or collaboration in mind?  
          Send us a message and our team will respond shortly.
        </p>

        <div className="space-y-4 text-gray-300">

          <p>📍 Mumbai, India</p>

          <p>📧 sachinmags5@gmail.com</p>

          <p>☎ +91 98765 43210</p>

        </div>

      </motion.div>

      {/* CONTACT FORM */}

      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-xl space-y-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded font-semibold flex items-center justify-center gap-2"
        >

          {loading ? (
            <Oval
              height={20}
              width={20}
              color="black"
              visible={true}
            />
          ) : (
            "Send Message"
          )}

        </button>

      </motion.form>

    </div>
  );
}

export default ContactPage;