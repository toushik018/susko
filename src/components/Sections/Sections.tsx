"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CpuChipIcon,
  ShoppingCartIcon,
  ChatBubbleBottomCenterTextIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const AboutSection = () => (
  <section id="about" className="section py-24">
    <div className="section-inner max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-mono mb-16 text-center text-[#94A3B8]"
      >
        {">"} cd /who-we-are
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={fadeInUp}
          className="group p-6 bg-[#0F172A]/30 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
        >
          <div className="relative">
            <div className="flex items-center mb-6">
              <CommandLineIcon className="w-6 h-6 text-[#94A3B8] mr-4" />
              <h3 className="text-lg font-mono text-[#E2E8F0]">
                Innovation First
              </h3>
            </div>
            <p className="text-[#94A3B8] leading-relaxed text-sm">
              At Susko, we transform ideas into cutting-edge digital
              experiences. Our team of experts combines technical excellence
              with creative innovation to deliver solutions that stand out.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="group p-6 bg-[#0F172A]/30 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
        >
          <div className="relative">
            <div className="flex items-center mb-6">
              <RocketLaunchIcon className="w-6 h-6 text-[#94A3B8] mr-4" />
              <h3 className="text-lg font-mono text-[#E2E8F0]">
                Tech Excellence
              </h3>
            </div>
            <p className="text-[#94A3B8] leading-relaxed text-sm">
              We stay ahead of the curve with emerging technologies and best
              practices, ensuring your project is built with the most effective
              and future-proof solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const ServicesSection = () => (
  <section id="services" className="section py-24 bg-[#0F172A]/30">
    <div className="section-inner max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-mono mb-16 text-center text-[#94A3B8]"
      >
        {">"} ls /what-we-craft
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          title="Web Experiences"
          icon={<CodeBracketIcon className="w-5 h-5" />}
          description="Next-gen websites powered by AI, crafted with cutting-edge tech"
          features={[
            "AI-Enhanced UX/UI",
            "Next.js & React",
            "Performance Optimization",
            "Smart Content Management",
          ]}
        />

        <ServiceCard
          title="Digital Commerce"
          icon={<ShoppingCartIcon className="w-5 h-5" />}
          description="AI-driven e-commerce platforms that revolutionize online sales"
          features={[
            "Smart Product Recommendations",
            "AI-Powered Search",
            "Dynamic Pricing",
            "Predictive Analytics",
          ]}
        />

        <ServiceCard
          title="AI Integration"
          icon={<CpuChipIcon className="w-5 h-5" />}
          description="Transforming applications with state-of-the-art AI capabilities"
          features={[
            "Custom AI Models",
            "Natural Language Processing",
            "Automated Workflows",
            "Intelligent Analytics",
          ]}
        />
      </div>
    </div>
  </section>
);

export const ProjectsSection = () => (
  <section id="projects" className="section py-24">
    <div className="section-inner max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-mono mb-16 text-center text-[#94A3B8]"
      >
        {">"} cat /our-impact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Grindel Backhus"
          description="A modern e-commerce platform for Hamburg's beloved bakery and pizzeria. Features include real-time order management, dynamic menu updates, and an intuitive booking system for their 2-for-1 deals. Operating hours from 05:45-20:00, the site seamlessly handles both bakery and pizza orders with a focus on user experience."
          technologies={[
            "Next.js",
            "E-commerce",
            "Payment Integration",
            "Real-time Orders",
            "Menu Management"
          ]}
          image="/grindel.png"
        />
        <ProjectCard
          title="Hotel am Beatles-Platz"
          description="A luxury hotel website in the heart of Hamburg's St. Pauli district. Features modern room booking system, dynamic content management, and seamless integration with hotel services. Multilingual support (DE/EN) with an elegant, responsive design reflecting the hotel's premium positioning."
          technologies={[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Booking Integration",
            "Multilingual"
          ]}
          image="/hotel.png"
        />
      </div>
    </div>
  </section>
);

export const ContactSection = () => (
  <section id="contact" className="section py-24 bg-[#0F172A]/30">
    <div className="section-inner max-w-4xl mx-auto px-6">
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-mono mb-16 text-center text-[#94A3B8]"
      >
        {">"} echo &quot;Let&apos;s Connect&quot;
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={fadeInUp}
          className="group p-6 bg-[#0F172A]/50 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
        >
          <div className="relative space-y-6">
            <h3 className="text-lg font-mono text-[#E2E8F0] flex items-center">
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-4 text-[#94A3B8]">
              <motion.p
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors cursor-pointer text-sm"
              >
                <span className="font-mono mr-2">$</span> info@susko.com
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors cursor-pointer text-sm"
              >
                <span className="font-mono mr-2">$</span> Hamburg, Germany
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors cursor-pointer text-sm"
              >
                <span className="font-mono mr-2">$</span> Monday - Friday, 9:00
                - 18:00
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="group p-6 bg-[#0F172A]/50 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
        >
          <div className="relative space-y-6">
            <h3 className="text-lg font-mono text-[#E2E8F0]">
              Connect With Us
            </h3>
            <div className="space-y-4 text-[#94A3B8]">
              <motion.a
                href="#"
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors text-sm"
              >
                <span className="font-mono mr-2">$</span> LinkedIn:
                /company/susko
              </motion.a>
              <motion.a
                href="#"
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors text-sm"
              >
                <span className="font-mono mr-2">$</span> Twitter: @suskotech
              </motion.a>
              <motion.a
                href="#"
                variants={fadeInUp}
                className="flex items-center hover:text-[#E2E8F0] transition-colors text-sm"
              >
                <span className="font-mono mr-2">$</span> GitHub: /susko
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({
  title,
  icon,
  description,
  features,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}) => (
  <motion.div
    variants={fadeInUp}
    className="group p-6 bg-[#0F172A]/50 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
  >
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-[#1E293B] text-[#94A3B8] rounded-md mr-3">
          {icon}
        </div>
        <h3 className="text-base font-mono text-[#E2E8F0]">{title}</h3>
      </div>

      <p className="text-[#94A3B8] mb-6 text-sm">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-[#94A3B8] hover:text-[#E2E8F0] transition-colors text-sm"
          >
            <span className="font-mono mr-2">$</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
}: {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}) => (
  <motion.div
    variants={fadeInUp}
    className="group p-6 bg-[#0F172A]/50 rounded-lg border border-[#1E293B] hover:border-[#94A3B8] transition-colors duration-300"
  >
    <div className="relative">
      <div className="relative h-40 mb-6 overflow-hidden rounded-lg bg-[#1E293B]">
        <div className="absolute inset-0 bg-[#94A3B8] mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-base font-mono text-[#E2E8F0] mb-3">{title}</h3>
      <p className="text-[#94A3B8] mb-6 text-sm">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-[#1E293B] text-[#94A3B8] rounded-md border border-[#1E293B] hover:border-[#94A3B8] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
