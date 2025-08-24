import React from 'react';
import { Smile, BarChart3, Sparkles } from 'lucide-react';

const Nextly = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8">
       
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">
            NEXTLY BENEFITS
          </p>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            Why should you use this landing page
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Nextly is a free landing page & marketing website template for startups 
            and indie projects. Its built with Next.js & TailwindCSS. And its 
            completely open-source.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  
                  <div className="w-80 h-80 bg-pink-100 rounded-full relative overflow-hidden">
                   
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-teal-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                 
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-400 rounded-full"></div>
                  <div className="absolute bottom-0 right-8 w-8 h-20 bg-pink-300 rounded-full"></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full"></div>
                  
                 
                  <div className="absolute -bottom-8 right-12 w-4 h-16 bg-green-400 rounded-full"></div>
                  <div className="absolute -bottom-6 right-10 w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute -bottom-4 right-14 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-3xl font-bold mb-4">
                Highlight your benefits
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                You can use this space to highlight your first benefit or a feature 
                of your product. It can also contain an image or Illustration like in 
                the example along with some bullet points.
              </p>
            </div>

            <div className="space-y-6">
             
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Understand your customers
                  </h4>
                  <p className="text-gray-400">
                    Then explain the first point breifly in one or two lines.
                  </p>
                </div>
              </div>

            
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Improve acquisition
                  </h4>
                  <p className="text-gray-400">
                    Here you can add the next benefit point.
                  </p>
                </div>
              </div>

         
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-lg flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold mb-2">
                    Drive customer retention
                  </h4>
                  <p className="text-gray-400">
                    This will be your last bullet point in this section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextly;