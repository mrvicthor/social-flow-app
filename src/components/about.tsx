"use client";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { container, item } from "@/utils";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Built by a frontend developer frustrated with cluncky tools
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hi, I&apos;m Victor! As a frontend developer running my own
                business, I was tired of paying $99/month for social media tools
                packed with features I nevr used.
              </p>
              <p>
                I wanted something simple, beautiful, and affordable. When i
                couldn&apos;t find it, I decided to build it.
              </p>
              <p>
                SocialFlow focuses on what actually matters: scheduling your
                content easily, seeing everything in a clean calendar view, and
                getting basic insights to improve your posts
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                VE
              </div>
              <div>
                <p className="font-semibold text-gray-900">Victor Eleanya</p>
                <p className="text-gray-600">Frontend Developer & Founder</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Why I&apos;m building this:
              </h3>
              <motion.ul
                variants={container}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="space-y-3 text-gray-600"
              >
                <motion.li
                  variants={item}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>
                    Enterprise tools are overkill for small businesses
                  </span>
                </motion.li>
                <motion.li
                  variants={item}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Beautiful design shouldn&apos;t cost $100/month</span>
                </motion.li>
                <motion.li
                  variants={item}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>
                    Simple tools help you focus on growing your business
                  </span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
