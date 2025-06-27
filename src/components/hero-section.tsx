"use client";
import { Star, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import CalendarMockUp from "./calendar-mockup";
import { motion } from "motion/react";
import { container, item } from "@/utils";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-100"
              >
                🚀 Early Access Available
              </Badge>
              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Simple social media scheduling for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  busy entrepreneurs
                </span>
              </motion.h1>
              <motion.p
                variants={item}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Schedule posts across Instagram, Facebook & LinkedIn in minutes.
                Beautiful calendar view of all your content. Starting at
                $15/month - 80% less than enterprise tools.
              </motion.p>
            </div>
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-2xl shadow-lg border"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    get early access
                  </h3>
                  <p className="text-gray-600">
                    Join 500+ entrepreneurs waiting for launch
                  </p>
                </div>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 capitalize">
                    join waitlist
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center space-x-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">Early feedback: 4.9/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>500+ on waitlist</span>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900 capitalize">
                    content calendar
                  </h4>
                  <Badge variant="outline" className="capitalize">
                    this week
                  </Badge>
                </div>
                <CalendarMockUp />
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="capitalize text-xs text-gray-600">
                      instagram
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-xs text-gray-600">LinkedIn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-gray-600 capitalize">
                      facebook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
