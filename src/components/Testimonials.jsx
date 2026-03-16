import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice Smith", feedback: "FizTECH transformed our website. Highly recommend!" },
  { name: "Hafiz Ahmed", feedback: "Professional and fast service. Great UX designs." },
  { name: "Mary Johnson", feedback: "Our ecommerce store is thriving thanks to FizTECH." },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light bg-white" id="testimonials">

      <h2 className="text-3xl font-bold text-center text-secondary">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 px-10">

        {testimonials.map((t, idx) => (

          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl bg-dark2 hover:scale-105 transition bg-transparent"
          >

            <p className="text-gray-700 italic">
              "{t.feedback}"
            </p>

            <h4 className="mt-4 font-semibold text-primary">
              {t.name}
            </h4>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
