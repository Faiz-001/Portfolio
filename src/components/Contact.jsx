import {useState} from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "99664958-7bd2-4cb0-abdb-6d81badf1492");

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong.");
    }
  };
  return (
    <section className="py-20 bg-light px-10 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-center text-secondary">Contact Us</h2>
      <div className="max-w-3xl mx-auto mt-12">
        <form action="" className="flex flex-col gap-6" onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Your Name" className="p-4 border rounded-lg text-black" required/>
          <input name="email" type="email" placeholder="Email Address" className="p-4 border rounded-lg text-black" required/>
          <textarea name="message" placeholder="Message" className="p-4 border rounded-lg text-black" rows="5" required></textarea>
          <input type="hidden" name="subject" value="New message from FizTECH website" />
          <button type="submit" className="bg-primary text-white py-3 rounded-lg hover:bg-accent transition">
            Send Message
          </button>
          <p className="text-gray-400 text-center">
            {result}
          </p>
        </form>
      </div>
    </section>
  );
}
