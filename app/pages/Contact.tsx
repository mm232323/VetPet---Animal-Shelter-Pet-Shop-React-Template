import React from "react";

export default function Contact() {
  return (
    <main className="mt-8 mb-16 px-2 sm:px-4">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center">Get in Touch</h1>
      <div className="w-full max-w-6xl mx-auto rounded-3xl border-4 border-[#351D04] bg-white relative mt-8 mb-10 flex flex-col lg:flex-row overflow-hidden items-center gap-8 shadow-[0_8px_34px_0_rgba(0,0,0,.09)] z-[-51]">
        <div className="w-full lg:w-5/12 h-[340px] sm:h-[420px] md:h-[520px] lg:h-[910px] overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none relative flex-shrink-0">
          <img
            src="/Contact/ContactFormImg.png"
            alt="A friendly veterinarian holding a small, happy dog"
            className="h-full w-full object-cover absolute z-[-50]"
          />
          <div className="relative w-full px-2 xs:px-4 sm:px-8 flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 flex-col h-full">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-lobster text-white text-center break-words">PetVet</h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white/60 text-center break-words">
              Our mission is to make the world a better place for pets and all animals.
            </p>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center break-words">Address</h3>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words">United States, California, 26 Ham Street</p>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center break-words">Phone</h3>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words"><a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words"><a href="tel:+1234567891" className="hover:underline">+1 234 567 891</a></p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words"><a href="tel:+1234567892" className="hover:underline">+1 234 567 892</a></p>
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center break-words">Email</h3>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words"><a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/80 text-center break-words"><a href="mailto:contact2@example.com" className="hover:underline">contact2@example.com</a></p>
          </div>
          <div className="absolute inset-0 w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none bg-black/5 backdrop-blur-lg z-[-49] pointer-events-none" />
          <div className="absolute inset-0 w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none bg-gradient-to-t from-black/90 to-transparent z-[-48] pointer-events-none" />
        </div>
        <form
          action="#"
          className="flex flex-col justify-center gap-6 w-full lg:w-7/12 px-2 sm:px-8 py-6"
          aria-labelledby="contact-form-title"
        >
          <h2 id="contact-form-title" className="sr-only">Contact Us Form</h2>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            required
            aria-required="true"
            className="w-full h-12 sm:h-16 rounded-full bg-[#987e173a] border border-[#311a04] pl-6 focus:outline-none focus:border-black/70 duration-300 text-base sm:text-lg"
          />
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
            aria-required="true"
            className="w-full h-12 sm:h-16 rounded-full bg-[#987e173a] border border-[#311a04] pl-6 focus:outline-none focus:border-black/70 duration-300 text-base sm:text-lg"
          />
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full h-12 sm:h-16 rounded-full bg-[#987e173a] border border-[#311a04] pl-6 focus:outline-none focus:border-black/70 duration-300 text-base sm:text-lg"
          />
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here*"
            className="w-full rounded-3xl bg-[#987e173a] border border-[#311a04] pl-6 pt-6 min-h-[140px] sm:min-h-[220px] md:min-h-[290px] max-h-[400px] focus:outline-none focus:border-black/70 duration-300 text-base sm:text-lg"
          ></textarea>
          <button
            className="w-full h-12 sm:h-16 rounded-2xl bg-[#311a04] text-white font-medium text-lg sm:text-xl flex justify-center items-center cursor-pointer border border-[#311a04] hover:bg-transparent hover:text-[#311a04] duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
