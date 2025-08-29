"use client";

import Head from "next/head";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  GraduationCap,
  HeartHandshake,
  Globe,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  HandHeart,
  ChevronDown,
  Building,
  Clock,
  BookOpen,
  Users,
  Sparkles,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <ChevronDown
          className={`h-6 w-6 text-blue-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "How can I donate to Hunehar?",
      answer:
        "You can donate through the 'Donate Now' button on our website. We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Every contribution, no matter the size, makes a significant difference.",
    },
    {
      question: "Where do my donations go?",
      answer:
        "85% of every donation goes directly to our programs for educational resources, teacher training, and community development projects. The remaining 15% covers essential administrative costs to ensure our operations run smoothly and efficiently.",
    },
    {
      question: "Can I volunteer for Hunehar?",
      answer:
        "Absolutely! We are always looking for passionate volunteers. Please visit our 'Get Involved' page to see current opportunities, or send us a message through this contact form expressing your interest in volunteering.",
    },
    {
      question: "How does Hunehar ensure sustainable impact?",
      answer:
        "Our approach focuses on empowering local communities. We partner with local leaders and organizations to build programs that they can eventually manage independently. This includes training local teachers, establishing community-run libraries, and creating self-sustaining agricultural projects.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Contact Us | Hunehar - Empowering Futures Through Education
        </title>
        <meta
          name="description"
          content="Connect with Hunehar to support our mission of providing quality education and fostering community development for children worldwide. Ask questions, volunteer, or partner with us."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 font-sans antialiased text-gray-700">
        <Navbar />

        <section
          className="relative bg-cover bg-center h-[70vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-white text-center px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-xl">
              Why We Exist?
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-4xl drop-shadow-lg">
              "Millions of children lack access to basic education. We exist to
              bridge this gap and create pathways to success for every child,
              regardless of their circumstances."
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Our Core Pillars
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We work tirelessly through innovative programs, dedicated
                volunteers, and community partnerships to ensure every child can
                learn, grow, and thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <GraduationCap strokeWidth={1.5} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Quality Education
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing essential learning materials, skilled teachers, and
                  safe environments for a comprehensive education.
                </p>
              </div>
              <div className="group text-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-2xl hover:border-green-500 hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <HeartHandshake strokeWidth={1.5} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Community Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Partnering with local communities to build infrastructure and
                  programs that support long-term growth and well-being.
                </p>
              </div>
              <div className="group text-center p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-purple-100 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Globe strokeWidth={1.5} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Sustainable Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Focusing on creating lasting positive change that empowers
                  communities to thrive for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-blue-50/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto mb-16">
              Our commitment translates into tangible results, transforming
              lives and communities across the globe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <BookOpen
                  className="h-12 w-12 mx-auto text-blue-600 mb-4"
                  strokeWidth={1.5}
                />
                <span className="block text-5xl font-extrabold text-blue-600">
                  50,000+
                </span>
                <h4 className="text-xl font-semibold text-gray-800 mt-2">
                  Children Educated
                </h4>
              </div>
              <div className="text-center">
                <Users
                  className="h-12 w-12 mx-auto text-blue-600 mb-4"
                  strokeWidth={1.5}
                />
                <span className="block text-5xl font-extrabold text-blue-600">
                  300+
                </span>
                <h4 className="text-xl font-semibold text-gray-800 mt-2">
                  Communities Served
                </h4>
              </div>
              <div className="text-center">
                <Sparkles
                  className="h-12 w-12 mx-auto text-blue-600 mb-4"
                  strokeWidth={1.5}
                />
                <span className="block text-5xl font-extrabold text-blue-600">
                  5,000+
                </span>
                <h4 className="text-xl font-semibold text-gray-800 mt-2">
                  Volunteers Engaged
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-blue-600 font-semibold uppercase tracking-wider">
                  Collaboration for Change
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mt-3 mb-6">
                  Partner With Hunehar
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe in the power of collaboration to amplify impact. By
                  partnering with corporations, foundations, and local
                  organizations, we can create scalable and sustainable
                  solutions to educational challenges worldwide.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 mt-1">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Corporate Partnerships
                      </h4>
                      <p className="text-gray-600">
                        Align your brand with a noble cause, engage your
                        employees, and contribute to meaningful change.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 mt-1">
                      <HandHeart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Foundation Grants
                      </h4>
                      <p className="text-gray-600">
                        Work with us to fund innovative projects that have a
                        lasting impact on children's futures.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="group inline-flex items-center justify-center py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out">
                  Explore Partnerships
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaborating"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Get In Touch With Us
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We're here to answer your questions, explore partnerships, or
                discuss how you can get involved.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                      placeholder="Partnership Inquiry"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
                      placeholder="I would like to discuss..."
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Contact Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-blue-100 rounded-full">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          Headquarters
                        </h4>
                        <p className="text-gray-600">
                          123 Education Lane, Knowledge City, 12345, World
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-blue-100 rounded-full">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          General Inquiries
                        </h4>
                        <p className="text-gray-600 hover:text-blue-600 transition-colors">
                          <a href="mailto:connect@hunehar.org">
                            connect@hunehar.org
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-blue-100 rounded-full">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          Call Us
                        </h4>
                        <p className="text-gray-600">+1 (234) 567-8900</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 p-2 bg-blue-100 rounded-full">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          Office Hours
                        </h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.608339169641!2d-73.98778888432544!3d40.7487822432882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9a42d206f%3A0x8545a4efe4f6174a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678886365921!5m2!1sen!2sus"
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Find quick answers to common questions about our work and how
                you can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <HandHeart
              className="mx-auto h-16 w-16 text-yellow-300 mb-6"
              strokeWidth={1.5}
            />
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Become a Beacon of Hope
            </h2>
            <p className="max-w-4xl mx-auto mb-10 text-lg text-gray-300 leading-relaxed">
              Your contribution breaks the cycle of poverty and empowers the
              next generation to build a brighter future. Every donation, no
              matter the size, fuels our mission and brings tangible change to a
              child's life.
            </p>
            <button className="group inline-flex items-center py-4 px-10 bg-yellow-400 text-gray-900 font-bold rounded-full text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
              Donate Now to Change a Life
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
