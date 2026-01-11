"use client";

import Head from "next/head";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Mail, Phone, ArrowRight, HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    email: "",
    organization: "",
    partnershipType: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handlePartnershipChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPartnershipForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnershipSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Our team will reach out to discuss collaboration.");
    setPartnershipForm({
      name: "",
      email: "",
      organization: "",
      partnershipType: "",
      message: "",
    });
  };

  return (
    <>
      <Head>
        <title>
          Contact Us | Hunehar - Empowering Futures Through Education
        </title>
      </Head>
      <main className="bg-gray-50 font-sans antialiased text-gray-700">
        <Navbar />
        {/* HERO */}
        <section
          className="relative bg-cover bg-center h-[60vh]"
          style={{
            backgroundImage: "url('/images/contact/Students-Writing.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-white text-center px-6">
            <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-4 tracking-tight">
              Contact Us
            </h1>

            <p className="text-sm md:text-base max-w-3xl leading-relaxed">
              Your voice matters. Reach out to learn more, collaborate, or
              support our mission of making quality education accessible to
              every child.
            </p>
          </div>
        </section>
        {/* PARTNER WITH HUNEHAR */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-semibold text-[#206FAC] mb-5">
                  Partner With Hunehar
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  We believe partnerships amplify impact. By collaborating with
                  organizations, we create sustainable solutions that transform
                  children’s futures.
                </p>

                <form onSubmit={handlePartnershipSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={partnershipForm.name}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={partnershipForm.email}
                      onChange={handlePartnershipChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                    />
                  </div>

                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={partnershipForm.organization}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                  />

                  <select
                    name="partnershipType"
                    value={partnershipForm.partnershipType}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                  >
                    <option value="">Type of Partnership</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Local NGO">Local NGO</option>
                    <option value="Other">Other</option>
                  </select>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message / Inquiry"
                    value={partnershipForm.message}
                    onChange={handlePartnershipChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-[#206FAC] text-white rounded-md text-sm md:text-base font-medium"
                  >
                    Connect With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>

              <img
                src="/images/contact/Activity.webp"
                alt="Partnership"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>

            {/* OUR PARTNERS */}
            <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold text-[#206FAC] mb-10 text-center">
              Our Partners
            </h3>
            {/*add an expandable card for partner using aceternity ui*/}
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-14 animate-marquee">
                {[
                  "cheezious-logo.webp",
                  "monal-group-logo.webp",
                  "asian-wok-logo.webp",
                  "khoka-khola-logo.webp",
                  "mirchi360-logo.webp",
                  "fempure-logo.webp",
                  "baadbaan-logo.webp",
                  "pawtnership-logo.webp",
                  "cheezious-logo.webp",
                  "monal-group-logo.webp",
                  "asian-wok-logo.webp",
                  "khoka-khola-logo.webp",
                  "mirchi360-logo.webp",
                  "fempure-logo.webp",
                  "baadbaan-logo.webp",
                  "pawtnership-logo.webp",
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="w-35 h-35 md:w-48 md:h-48 rounded-full bg-white shadow-md flex items-center justify-center p-6"
                  >
                    <img
                      src={`/images/contact/${logo}`}
                      alt="Hunehar Partner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[clamp(1.9rem,3.5vw,2.6rem)] font-semibold text-[#206FAC] tracking-tight">
                Get In Touch With Us
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Have questions, ideas, or want to get involved?
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-semibold text-[#206FAC] mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                      placeholder="Sponsorship Inquiry"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border text-sm md:text-base"
                      placeholder="I would like to discuss..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-[#206FAC] text-white rounded-md text-sm md:text-base font-medium"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />{" "}
                    </button>
                  </div>
                </form>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold text-[#206FAC] mb-6">
                    Our Contact Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-[#DBEAFE] rounded-full">
                        <MapPin className="h-5 w-5 text-[#206FAC]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base text-[#206FAC]">
                          Location
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Hunehar Welfare School, Mehrabadi, G13-Islamabad,
                          Pakistan-44000
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-[#DBEAFE] rounded-full">
                        <Mail className="h-5 w-5 text-[#206FAC]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base text-[#206FAC]">
                          General Inquiries
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed hover:text-[#206FAC] transition-colors">
                          <a href="mailto:info@hunehar.org">info@hunehar.org</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-[#DBEAFE] rounded-full">
                        <Phone className="h-5 w-5 text-[#206FAC]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base text-[#206FAC]">
                          Call Us
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          0341 0510902, 0336 5426276
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.0985063730837!2d72.97396568096828!3d33.66265332033417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df961eb0ffffe9%3A0x9ae9936d11200179!2sThe%20Hunehar%20Welfare%20School!5e0!3m2!1sen!2s!4v1767885604920!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-10 text-center">
            <HandHeart
              className="mx-auto h-16 w-16 text-yellow-300 mb-6"
              strokeWidth={1.5}
            />
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold mb-4 tracking-tight">
              Make a Difference Today!
            </h2>
            <p className="max-w-3xl mx-auto mb-10 text-sm md:text-base text-gray-300 leading-relaxed">
              Your contribution breaks the cycle of poverty and empowers
              children to dream, learn, and thrive. Every donation, no matter
              the size, can change a child’s life.
            </p>
            <button className="inline-flex items-center py-3 px-8 bg-yellow-400 text-gray-900 font-semibold rounded-full text-sm md:text-base hover:bg-yellow-300 hover:cursor-pointer transition">
              Donate Now and Make a Child Smile
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default ContactPage;
