"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Gem,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const inputClasses =
    "w-full rounded-none border border-[#ded8ca] bg-white px-4 py-3.5 text-sm text-[#24211c] outline-none transition focus:border-[#b69a61] focus:ring-1 focus:ring-[#b69a61] placeholder:text-[#aaa49a]";

  const labelClasses =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[1.5px] text-[#575044]";

  return (
    <main className="w-full overflow-hidden bg-[#faf9f6] text-[#24211c]">

      {/* Hero */}
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#211e19] px-5 py-24 text-center sm:min-h-[480px] lg:min-h-[540px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,18,15,0.94),rgba(20,18,15,0.72)),url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-7 flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[3px] text-[#c7ad79] sm:text-xs">
            <span className="h-px w-8 bg-[#c7ad79]" />
            WE WOULD LOVE TO HEAR FROM YOU
            <span className="h-px w-8 bg-[#c7ad79]" />
          </div>

          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Let's Start a
            <br />
            <em className="font-normal text-[#c7ad79]">Conversation</em>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Whether you have a question about our jewellery, need assistance
            or simply want to say hello, we are here for you.
          </p>

          <div className="mx-auto mt-9 flex h-14 w-14 items-center justify-center rounded-full border border-[#c7ad79]/50 text-[#c7ad79]">
            <Gem size={27} strokeWidth={1.2} />
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-5 text-xs tracking-wide sm:px-8 lg:px-10">
        <a href="/" className="text-[#9b8a69] transition hover:text-[#24211c]">
          Home
        </a>
        <span className="text-[#aaa49a]">/</span>
        <span className="text-[#777166]">Contact Us</span>
      </div>

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-14 pt-10 sm:px-8 md:grid-cols-2 md:items-end lg:px-10 lg:pb-20">
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-[3px] text-[#a58b59]">
            GET IN TOUCH
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            We Are Here
            <br />
            <em className="font-normal text-[#b69a61]">For You</em>
          </h2>
        </div>

        <p className="max-w-lg text-sm leading-8 text-[#777166] md:justify-self-end md:text-base">
          At Mandal Jewellers, every customer is special. Our team is happy
          to help you discover the perfect jewellery, answer your questions
          and make your experience memorable.
        </p>
      </section>

      {/* Contact Information and Form */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10">

        {/* Contact Information */}
        <div className="bg-[#f0ede6] p-6 sm:p-9 lg:p-10">
          <p className="mb-4 text-[10px] font-semibold tracking-[2.5px] text-[#a58b59]">
            CONTACT INFORMATION
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#777166]">
            Reach out to us for jewellery enquiries, product assistance
            and customer support.
          </p>

          <div className="mt-9 space-y-7">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7b58f] text-[#a58b59]">
                <Phone size={19} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Call Us</h3>
                <p className="mt-1 text-sm text-[#777166]">
                 6398331187
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7b58f] text-[#a58b59]">
                <Mail size={19} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Email Us</h3>
                <p className="mt-1 break-all text-sm text-[#777166]">
                  info@mandaljewellers.in
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7b58f] text-[#a58b59]">
                <MapPin size={19} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Visit Our Store</h3>
                <p className="mt-1 text-sm leading-6 text-[#777166]">
 "Mothorowala Road, Ajabpur Kalan, Near Railway Crossing, Dehradun, Uttarakhand 248121",                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c7b58f] text-[#a58b59]">
                <Clock size={19} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Business Hours</h3>
                <p className="mt-1 text-sm text-[#777166]">
                  Monday – Sunday
                </p>
                <p className="mt-1 text-sm text-[#777166]">
                  10am-10pm
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-[#d8d0c0] pt-7">
            <p className="mb-4 text-[10px] font-semibold tracking-[2px] text-[#777166]">
              FOLLOW OUR JOURNEY
            </p>

            <a
              href="https://www.instagram.com/mandaljewellers.in/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-[#c7b58f] text-[#a58b59] transition hover:bg-[#a58b59] hover:text-white"
            >
              <Instagram size={19} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:p-9 lg:p-12">
          <div className="mb-9">
            <p className="mb-4 text-[10px] font-semibold tracking-[2.5px] text-[#a58b59]">
              SEND US A MESSAGE
            </p>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              We'd Love to
              <br />
              <em className="font-normal text-[#b69a61]">Hear From You</em>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#777166]">
              Fill in the details below and our team will be happy to assist you.
            </p>
          </div>

          {submitted ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
              <Gem size={38} className="text-[#b69a61]" />

              <h3 className="mt-5 font-serif text-3xl">Thank You!</h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-[#777166]">
                Your form has been submitted in this demo. Connect an email
                service to receive enquiries.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 border border-[#b69a61] px-7 py-3 text-[10px] font-semibold tracking-[2px] text-[#8e7548] transition hover:bg-[#b69a61] hover:text-white"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="mj-name" className={labelClasses}>
                    Your Name *
                  </label>
                  <input
                    id="mj-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mj-email" className={labelClasses}>
                    Email Address *
                  </label>
                  <input
                    id="mj-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="mj-phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="mj-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="mj-subject" className={labelClasses}>
                    Subject *
                  </label>
                  <select
                    id="mj-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select an enquiry</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Custom Jewellery">Custom Jewellery</option>
                    <option value="Order Assistance">Order Assistance</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mj-message" className={labelClasses}>
                  Your Message *
                </label>
                <textarea
                  id="mj-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-y`}
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[#a58b59] px-7 py-4 text-[11px] font-semibold tracking-[2px] text-white transition hover:bg-[#826b43] sm:w-auto"
              >
                SEND MESSAGE
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>
          )}
        </div>
      </section>

      {/* Store Visit */}
      <section className="mx-auto grid max-w-7xl bg-[#211e19] md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 text-white sm:px-10 sm:py-20 lg:px-16">
          <p className="mb-5 text-[10px] font-semibold tracking-[2.5px] text-[#c7ad79]">
            EXPERIENCE MANDAL JEWELLERS
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            A Little More
            <br />
            <em className="font-normal text-[#c7ad79]">
              Personal, A Little More Special.
            </em>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-white/65">
            Discover timeless elegance and beautiful craftsmanship.
            We look forward to welcoming you to Mandal Jewellers.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-flex w-fit items-center gap-3 border border-[#c7ad79] px-6 py-4 text-[10px] font-semibold tracking-[2px] text-[#c7ad79] transition hover:bg-[#c7ad79] hover:text-[#211e19]"
          >
            EXPLORE OUR COLLECTION
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="min-h-[280px] overflow-hidden sm:min-h-[380px]">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85"
            alt="Elegant jewellery collection"
            className="h-full min-h-[280px] w-full object-cover sm:min-h-[380px]"
          />
        </div>
      </section>

  {/* Google Maps */}
<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
  <div className="mb-9 text-center">
    <p className="mb-4 text-[10px] font-semibold tracking-[2.5px] text-[#a58b59]">
      FIND US
    </p>

    <h2 className="font-serif text-3xl sm:text-4xl">
      Visit Our <em className="font-normal text-[#b69a61]">Store</em>
    </h2>

    <p className="mt-3 text-sm text-[#777166]">
      We look forward to welcoming you.
    </p>
  </div>

  <div className="h-[280px] w-full overflow-hidden border border-[#e5dfd2] sm:h-[380px] lg:h-[450px]">
    <iframe
      src="https://maps.google.com/maps?q=Mandal%20Jewellers%20Mothorowala%20Road%20Ajabpur%20Kalan%20Dehradun%20Uttarakhand%20248121&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Mandal Jewellers Google Maps Location"
      className="h-full w-full"
    />
  </div>

  <div className="mt-5 text-center">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Mandal+Jewellers+Mothorowala+Road+Ajabpur+Kalan+Dehradun+Uttarakhand+248121"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[1.5px] text-[#a58b59] transition hover:text-[#80683f]"
    >
      GET DIRECTIONS <ArrowRight size={15} />
    </a>
  </div>
</section>

      {/* Bottom Brand */}
      <section className="flex flex-col items-center justify-center border-t border-[#e9e4da] px-5 py-14 text-center">
        <Gem size={30} strokeWidth={1.2} className="text-[#b69a61]" />

        <h2 className="mt-5 font-serif text-2xl sm:text-3xl">
          Elegance That Lasts Forever
        </h2>

        <p className="mt-3 text-[10px] font-semibold tracking-[4px] text-[#a58b59]">
          MANDAL JEWELLERS
        </p>
      </section>

    </main>
  );
}