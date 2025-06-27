"use client";
import { BarChart3, Calendar, CheckCircle, Users } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { container, item } from "@/utils";

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything you need, nothing you don&apos;t
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Built specifically for entrepreneurs and small businesses who want
            simple, effective social media management
          </motion.p>
        </div>
        <motion.div
          variants={item}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Beautiful Calendar View</CardTitle>
              <CardDescription>
                See all your scheduled content at a glance with our intuitive
                drag-and-drop calendar
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Simple Analytics</CardTitle>
              <CardDescription>
                Track what matters: engagement rates, best posting times, and
                content performance
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bordr-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Multi-Platform Posting</CardTitle>
              <CardDescription>
                Schedule to Instagram, Facebook, and LinkedIn from one clean
                interface
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
        <motion.div variants={item} className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <p className="font-semibold text-gray-900 capitalize">
                coming soon
              </p>
              <p className="text-gray-600">
                content templates, team collaboration, and more platforms
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;
