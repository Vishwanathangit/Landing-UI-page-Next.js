import React from 'react';

const Company = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-8">
       
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl">
            Trusted by{' '}
            <span className="text-blue-400 font-semibold">2000+</span>{' '}
            customers worldwide
          </h2>
        </div>
        
        <div className="flex items-center justify-center gap-12 lg:gap-16 opacity-60">
   
          <div className="text-gray-400 text-2xl lg:text-3xl font-bold">
            amazon
          </div>
          
         
          <div className="text-gray-400 text-2xl lg:text-3xl font-bold">
            verizon
          </div>
          
      
          <div className="flex items-center gap-2 text-gray-400">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400"></div>
            </div>
            <span className="text-2xl lg:text-3xl font-semibold ml-2">Microsoft</span>
          </div>
          
      
          <div className="text-gray-400 text-2xl lg:text-3xl font-bold">
            NETFLIX
          </div>
          
        
          <div className="text-gray-400 text-2xl lg:text-3xl font-bold tracking-wider">
            SONY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;