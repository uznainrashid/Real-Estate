import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";


function Testimonails() {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1.7 }}
    whileInView={{ opacity: 1, x: 0 }} className="container mx-auto py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden" id="Testimonails">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          {" "}
          Testimonails
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index)=>(
            <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12">
                <img src={testimonial.image} alt={testimonial.alt} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h2 className="text-xl text-center text-gray-700 font-medium">{testimonial.name}</h2>
                <p className="text-gray-500 text-center text-sm mb-4">{testimonial.title}</p>
                <div className="flex gap-1 justify-center text-red-500 mb-4">
                    {Array.from({length: testimonial.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} />
                    ))}
                </div>
                <p className="text-gray-500">{testimonial.text}</p>
            </div>

        ))}
      </div>
    </motion.div>
  );
}

export default Testimonails;
