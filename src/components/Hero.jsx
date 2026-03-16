import { motion } from "framer-motion"
import hero from "../assets/hero.jpg"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
      id="home"
    >
      <div className="bg-black/70 p-10 rounded-xl max-w-3xl">
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-5xl font-bold text-white"
        >
          FizTECH Digital Solutions
        </motion.h1>

        <p className="mt-6 text-gray-300">
          We build modern websites, apps and ecommerce solutions
          that help businesses grow online.
        </p>

        <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-accent transition"
                >
                  Get Started
                </motion.button>
              </a>
      </div>
    </section>
  )
}