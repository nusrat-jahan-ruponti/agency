import { useState } from "react";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const labelCls = "mb-2 block text-sm font-medium text-gray-900 dark:text-white";
const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-4 text-base text-gray-800 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100";

export default function ContactHero() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); 
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50/60 to-pink-50/60 py-16 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 md:py-24">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-full w-1/3"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 0% 100%, rgba(95,92,242,0.07) 0deg 2.5deg, transparent 2.5deg 5deg)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          maskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Want to work with us?
            </h2>
            <p className="mt-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-6xl font-extrabold leading-tight text-transparent md:text-7xl">
              Let’s talk!
            </p>

            <div className="mt-16 space-y-5 text-xl text-gray-700 dark:text-gray-300 md:mt-24">
              <a href="mailto:email@example.com" className="block underline underline-offset-4 hover:text-indigo-500">
                email@example.com
              </a>
              <a href="tel:+14065550120" className="block hover:text-indigo-500">
                +1 406 555-0120
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`${inputCls} h-[52px]`}
                />
              </label>
              <label className="block">
                <span className={labelCls}>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={`${inputCls} h-[52px]`}
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className={labelCls}>Message</span>
              <textarea
                name="message"
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                className={`${inputCls} py-3`}
              />
            </label>           
              <Button>
                Contact Us
             </Button>                  
          </form>
        </div>
      </Container>
    </section>
  );
}