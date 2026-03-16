const faqs = [
  { q: "How long does a project take?", a: "Typically 1-4 weeks depending on complexity." },
  { q: "Do you provide hosting?", a: "Yes, we provide hosting and domain setup options." },
  { q: "Can you redesign existing websites?", a: "Absolutely, we modernize and optimize any site." },
];

export default function FAQ() {
  return (
    <section className="py-20 px-10 bg-dark text-white">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto mt-12 space-y-6">
        {faqs.map((f, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="font-semibold text-primary">{f.q}</h3>
            <p className="mt-2 text-gray-400">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}