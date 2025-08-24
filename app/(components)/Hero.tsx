import React from "react";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Free Landing Page Template
              <br />
              <span className="text-gray-700">for startups</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5046E4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4338CA] transition-colors">
                Download for Free
              </button>
              <button className="flex items-center gap-3 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:text-gray-900 transition-colors">
                <Github size={20} />
                View on Github
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <img
                src="https://nextly.web3templates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&w=1920&q=75"
                alt="Hero Illustration"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute top-1/4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-1/4 -right-2 w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
