
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern workspace"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-8 leading-tight">
              Hello World
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transform transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Добро пожаловать в мир безграничных возможностей
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Начать путешествие</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-white/60">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
          <span className="text-sm mt-2 tracking-wider">SCROLL</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
