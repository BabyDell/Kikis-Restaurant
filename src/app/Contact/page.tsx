"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { MapPin, Phone } from "lucide-react";
import AnimatedHeader from "../Components/animatedHeader";

export default function Contact() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsExpanded(true);
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      clearTimeout(textTimer);
    };
  }, []);

  const onSubmit = () => {
    console.log("You sumbitted the form");
  };

  return (
    <div className="bg-[url('/images/KikisBGTexture.jpg')] bg-repeat md:ml-20">
      <AnimatedHeader
        imageSrc="/images/KikisHomePage.webp"
        altText="Kiki's Dining & Drinks"
        headerText="Contact Us"
      />

      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="flex-1 border-customYellow border-opacity-50 rounded-none">
            <CardHeader>
              <CardTitle className="text-customYellow font-serif tracking-wide">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>46660 Washington St, La Quinta, CA 92253</p>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>(760) 777 8008</p>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>ciao@kikislaquinta.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 border-customYellow border-opacity-50 rounded-none">
            <CardHeader>
              <CardTitle className="text-customYellow font-serif tracking-wide">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm"></p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm"></p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && <p className="text-red-500 text-sm"></p>}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-out hover:from-amber-600 hover:to-amber-800"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-customYellow border-opacity-50 rounded-none">
          <CardHeader>
            <CardTitle className="text-customYellow font-serif tracking-wide">
              Our Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14101.244566580257!2d-116.29496250734819!3d33.71337755819003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80daf934923d3013%3A0x6226cb156e9ebfe6!2sKiki&#39;s%20Dining%20%26%20Drinks!5e0!3m2!1sen!2sus!4v1732567750641!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
            <div className="flex justify-center gap-5 sm:gap-10">
              <Button
                className="text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-700 text-white py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 ease-out hover:from-amber-600 hover:to-amber-800"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=Kiki's Dining & Drinks, 46660 Washington St #8, La Quinta, CA 92253",
                    "_blank"
                  )
                }
              >
                <MapPin className="mr-2 h-4 w-4" /> Get Directions
              </Button>
              <Button
                className="text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-700 text-white py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 ease-out hover:from-amber-600 hover:to-amber-800"
                onClick={() => (window.location.href = "tel:+17607778008")}
              >
                <Phone className="mr-2 h-4 w-4" /> Call for Reservation
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
