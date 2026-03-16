import web from "../assets/web.jpg"
import ui from "../assets/ui.jpg"
import ecommerce from "../assets/ecommerce.jpg"

const services = [
  {
    title:"Web Development",
    img:web,
    desc:"Modern responsive websites"
  },
  {
    title:"UI/UX Design",
    img:ui,
    desc:"Beautiful user interfaces"
  },
  {
    title:"Ecommerce Development",
    img:ecommerce,
    desc:"Online stores with payments"
  }
]

export default function Services(){

  return(
    <section className="py-24 bg-dark px-10" id="services">

      <h2 className="text-center text-4xl text-white font-bold">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16">

        {services.map((s,i)=>(
          <div
            key={i}
            className="bg-dark2 rounded-xl overflow-hidden hover:scale-105 transition"
          >

            <img
              src={s.img}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-primary text-xl font-semibold">
                {s.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {s.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}