import { motion } from "framer-motion";
import profile from "../assets/profile.png"
export default function About() {

  return (

    <section className="min-h-screen bg-dark px-10 py-10">

      <div className="max-w-5xl mx-auto">

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="text-5xl font-bold text-primary"
        >
          About FizTECH
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.2}}
          className="mt-6 text-gray-400 text-lg"
        >
          FizTECH is a digital development brand focused on building
          modern websites, web applications and ecommerce platforms
          for individuals and businesses.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <div>
            <img src={profile} alt="ProfilePic" className="w-1/2 rounded-full border-2 border-white"/>
          </div>

          <div className="flex flex-col gap-10">

            <div>
                <h2 className="text-2xl font-semibold text-white">
                    Who I Am
                </h2>

            <p className="mt-4 text-gray-400">
              My name is Faiz Ahmed. I am a full-stack developer passionate
              about building modern digital experiences using React,
              Tailwind CSS, Nodejs and modern web technologies.
            </p>
            </div>

            <div>

                <h2 className="text-2xl font-semibold text-white">
                    What I Do
                </h2>

                <ul className="mt-4 text-gray-400 space-y-2">
                    <li>• Portfolio websites</li>
                    <li>• Business websites</li>
                    <li>• Ecommerce stores</li>
                    <li>• Web applications</li>
                    <li>• UI / UX design</li>
                </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}