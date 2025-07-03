import React from "react";

export default function Contact() {
  return (
    <main className="mt-[50px] mb-[70px]">
      <h1 className="font-extrabold text-[53px] text-center">Get in Touch</h1>
      <div className="w-18/20 h-[910px] rounded-[65px] border-[5px] border-[#351D04] bg-white relative left-1/2 translate-x-[-50%] top-[40px] mb-[40px] flex overflow-hidden items-center gap-[40px] shadow-[0_8px_34px_0_rgba(0,0,0,.09)]">
        <div className="w-5/12 h-full overflow-hidden rounded-l-[60px] relative">
          <img
            src="/Contact/ContactFormImg.png"
            alt="A friendly veterinarian holding a small, happy dog"
            className="h-full w-auto min-w-full absolute z-[-50]"
          />
          <div className="relative w-full px-[40px] flex items-center justify-center gap-[18px] flex-col h-full">
            <h2 className="text-[62px] font-black font-lobster text-white">
              PetVet
            </h2>
            <p className="text-white/60 text-[25px] text-center">
              Our mission is to make the world a better place for pets and all animals.
            </p>
            <h3 className="text-[26px] font-bold text-white">Address</h3>
            <p className="text-[24px] font-light text-white/80 text-center">United States, California, 26 Ham Street</p>
            <h3 className="text-[26px] font-bold text-white">Phone</h3>
            <p className="text-[24px] font-light text-white/80 text-center"><a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
            <p className="text-[24px] font-light text-white/80 text-center"><a href="tel:+1234567891" className="hover:underline">+1 234 567 891</a></p>
            <p className="text-[24px] font-light text-white/80 text-center"><a href="tel:+1234567892" className="hover:underline">+1 234 567 892</a></p>
            <h3 className="text-[26px] font-bold text-white">Email</h3>
            <p className="text-[24px] font-light text-white/80 text-center"><a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></p>
            <p className="text-[24px] font-light text-white/80 text-center"><a href="mailto:contact2@example.com" className="hover:underline">contact2@example.com</a></p>
          </div>
        </div>
        <div className="w-5/12 h-full rounded-l-[65px] bg-black/5 backdrop-blur-lg absolute z-[-49] left-0" />
        <div className="w-5/12 h-full rounded-l-[65px] bg-gradient-to-t from-black/90 to-transparent absolute z-[-49] left-0" />
        <form
          action="#"
          className="flex flex-col justify-center gap-[28px] w-6/12"
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
            className="w-full h-[80px] rounded-full bg-[#987e173a] border-[.3px] border-[#311a04] pl-[40px] focus:outline-none focus:border-black/70 duration-300"
          />
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
            aria-required="true"
            className="w-full h-[80px] rounded-full bg-[#987e173a] border-[.3px] border-[#311a04] pl-[40px] focus:outline-none focus:border-black/70 duration-300"
          />
          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full h-[80px] rounded-full bg-[#987e173a] border-[.3px] border-[#311a04] pl-[40px] focus:outline-none focus:border-black/70 duration-300"
          />
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here*"
            className="w-full h-[80px] rounded-[55px] bg-[#987e173a] border-[.3px] border-[#311a04] pl-[40px] min-h-[290px] max-h-[400px] pt-[40px] focus:outline-none focus:border-black/70 duration-300"
          ></textarea>
          <button
            className="w-full h-[65px] rounded-[30px] bg-[#311a04] text-white font-[250] text-[28px] flex justify-center items-center cursor-pointer border-[.5px] border-[#311a04] hover:bg-transparent hover:text-[#311a04] duration-[350ms]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
