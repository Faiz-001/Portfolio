import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { title: "Projects Completed", value: 120 },
  { title: "Happy Clients", value: 100 },
  { title: "Businesses Helped", value: 50 },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex justify-around flex-wrap gap-10 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-4xl font-bold text-primary">
              <CountUp end={stat.value} duration={2} />+
            </h2>
            <p className="text-gray-600 mt-2">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}