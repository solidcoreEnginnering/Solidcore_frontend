"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Shield,
  Award,
  Users,
  Target,
  Lightbulb,
  Zap,
  CheckCircle2,
  Factory,
  Hammer,
  Settings,
  Gauge,
} from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "100%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Shield },
  ];

  const services = [
    {
      icon: Factory,
      title: "Custom Metal Fabrication",
      description:
        "Precision-engineered custom metal fabrication tailored to your exact specifications. From structural steel to decorative metalwork, we bring your vision to life.",
      features: [
        "Structural steel fabrication",
        "Custom metal components",
        "Prototype development",
        "Sheet metal forming",
      ],
    },
    {
      icon: Wrench,
      title: "Leith Works & Industrial Metalwork",
      description:
        "Heavy-duty industrial metalwork solutions including machinery parts, industrial equipment, and manufacturing support for businesses of all sizes.",
      features: [
        "Industrial machinery parts",
        "Equipment maintenance",
        "Production line components",
        "Heavy-duty fabrication",
      ],
    },
    {
      icon: Hammer,
      title: "Architectural Metalwork",
      description:
        "Beautiful and functional architectural metal solutions including railings, staircases, gates, and decorative elements that enhance any space.",
      features: [
        "Custom railings & staircases",
        "Decorative gates & fencing",
        "Metal facades & cladding",
        "Ornamental metalwork",
      ],
    },
    {
      icon: Settings,
      title: "Welding & Repair Services",
      description:
        "Expert welding services using MIG, TIG, and stick welding techniques. We handle repairs, modifications, and custom welding projects.",
      features: [
        "MIG, TIG & stick welding",
        "On-site welding services",
        "Metal repair & restoration",
        "Emergency welding support",
      ],
    },
    {
      icon: Gauge,
      title: "CNC Machining & Precision Work",
      description:
        "State-of-the-art CNC machining capabilities for precision parts manufacturing with tight tolerances and consistent quality.",
      features: [
        "CNC cutting & milling",
        "Precision laser cutting",
        "Water jet cutting",
        "Plasma cutting services",
      ],
    },
    {
      icon: Lightbulb,
      title: "Design & Engineering Consultation",
      description:
        "Collaborative design process from concept to completion. Our engineering team works with you to optimize designs for manufacturability and cost.",
      features: [
        "CAD design services",
        "Engineering consultation",
        "Material selection guidance",
        "Cost optimization analysis",
      ],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision & Quality",
      description:
        "Every project meets the highest standards of craftsmanship. We use premium materials and advanced techniques to ensure lasting quality.",
    },
    {
      icon: Zap,
      title: "Innovation & Expertise",
      description:
        "Combining traditional metalworking skills with modern technology. Our team stays current with industry innovations and best practices.",
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      description:
        "Safety is paramount in everything we do. All work complies with industry standards and safety regulations for your peace of mind.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We build lasting relationships through transparent communication, on-time delivery, and exceptional customer service at every step.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <Head>
        <title>
          About Solid Core Engineering - Expert Metal Fabrication & Custom
          Metalwork Services
        </title>
        <meta
          name="description"
          content="Solid Core Engineering specializes in custom metal fabrication, leith works, industrial metalwork, welding services, and precision CNC machining. 15+ years of excellence in metalwork with 500+ completed projects."
        />
        <meta
          name="keywords"
          content="metal fabrication, custom metalwork, leith works, industrial metalwork, welding services, CNC machining, structural steel, architectural metalwork, precision metal cutting, solid core engineering"
        />
        <meta property="og:title" content="About Solid Core Engineering" />
        <meta
          property="og:description"
          content="Expert metal fabrication and custom metalwork services. Precision engineering for industrial, commercial, and residential projects."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://solidcoreengineering.com/about" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center rotate-12 shadow-2xl">
                  <Wrench className="w-10 h-10 text-white -rotate-12" />
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                Solid Core Engineering
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Forging Excellence in Metal Fabrication Since 2010
              </p>
              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700/50 text-center group hover:border-orange-500/50 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Founded in 2010, <strong className="text-white">Solid Core Engineering</strong> has
                    grown from a small workshop into a leading metal fabrication
                    powerhouse. What started as a passion for precision metalwork
                    has evolved into a full-service fabrication facility serving
                    industrial, commercial, and residential clients.
                  </p>
                  <p>
                    Our journey began with a simple mission: to deliver
                    uncompromising quality in every weld, every cut, and every
                    finished product. Today, that mission drives everything we
                    do, from complex industrial machinery components to beautiful
                    architectural metalwork.
                  </p>
                  <p>
                    With over <strong className="text-white">15 years of combined experience</strong>, our
                    team of certified welders, fabricators, and engineers brings
                    expertise across multiple metalworking disciplines. We've
                    invested in state-of-the-art equipment and continue to train
                    our team on the latest techniques and technologies.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-3xl border border-zinc-700">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Certified welders and fabricators",
                      "State-of-the-art CNC equipment",
                      "Custom design and engineering support",
                      "Competitive pricing with no hidden fees",
                      "Fast turnaround times",
                      "Quality guaranteed on every project",
                      "Comprehensive insurance coverage",
                      "Environmentally responsible practices",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive metal fabrication solutions for every need
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide every project we undertake
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-700 group-hover:border-orange-500/50 transition-all group-hover:scale-110">
                      <Icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Trusted by businesses across multiple sectors
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {[
                "Construction & Architecture",
                "Manufacturing & Industrial",
                "Oil & Gas",
                "Agriculture & Farming",
                "Transportation & Logistics",
                "Mining & Resources",
                "Residential & Commercial",
                "Food Processing",
                "Automotive & Marine",
                "Retail & Hospitality",
                "Healthcare Facilities",
                "Education & Institutions",
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-orange-500/50 transition-all text-center"
                >
                  <p className="text-gray-300 font-medium">{industry}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                From concept to completion, we're here to bring your metalwork
                vision to life. Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:info@solidcoreengineering.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all"
                >
                  Get Free Quote
                  <Zap className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gray-400 space-y-6"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Professional Metal Fabrication Services You Can Trust
                </h2>
                <p>
                  At <strong className="text-white">Solid Core Engineering</strong>, we specialize in providing
                  comprehensive metal fabrication services including custom
                  metalwork, leith works, industrial fabrication, and precision
                  welding. Our facility is equipped with advanced CNC machining
                  centers, laser cutting systems, and water jet cutting technology
                  to handle projects of any size and complexity.
                </p>
                <p>
                  Whether you need structural steel fabrication for a commercial
                  building, custom architectural metalwork for a residential
                  project, or precision-machined components for industrial
                  equipment, our experienced team delivers exceptional results.
                  We work with a variety of metals including carbon steel,
                  stainless steel, aluminum, brass, and copper.
                </p>
                <p>
                  Our metal fabrication process begins with careful design and
                  engineering consultation. We use CAD software to create detailed
                  plans and 3D models, ensuring accuracy before production begins.
                  Our certified welders are skilled in MIG, TIG, and stick welding
                  techniques, and we maintain strict quality control standards
                  throughout every phase of production.
                </p>
                <p>
                  Safety and compliance are paramount in our operations. All work
                  is performed in accordance with OSHA regulations and industry
                  best practices. We carry comprehensive insurance coverage and
                  our facility undergoes regular safety audits to maintain the
                  highest standards of workplace safety.
                </p>
                <p>
                  Contact <strong className="text-white">Solid Core Engineering</strong> today to discuss your metal
                  fabrication needs. We serve clients throughout the region with
                  competitive pricing, reliable timelines, and unmatched attention
                  to detail. Get your free quote by emailing{" "}
                  <a
                    href="mailto:info@solidcoreengineering.com"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    info@solidcoreengineering.com
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-white\/\[0\.05\] {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }
      `}</style>
    </>
  );
}