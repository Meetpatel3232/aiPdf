import { useEffect, useState } from "react";

const steps = [
  "📄 Extracting text...",
  "✂ Splitting document into chunks...",
  "🧠 Creating AI embeddings...",
  "📚 Building knowledge base...",
];

const Processing = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="w-full h-full flex items-center justify-center px-4">
    <div className="w-full max-w-lg text-center">

      
      <div className="relative flex justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>

      
      <h2 className="mt-8 text-2xl md:text-3xl font-bold text-white">
        Processing Your Document
      </h2>

      
      <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
        DockMind is preparing your PDF so you can chat with it instantly.
      </p>

      
      <div className="mt-8 rounded-xl border border-violet-900 bg-slate-800/40 p-5">

        <p className="text-violet-400 text-base md:text-lg animate-pulse">
          {steps[currentStep]}
        </p>

        
        <div className="flex justify-center gap-3 mt-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`
                h-2.5
                w-2.5
                rounded-full
                transition-all
                duration-500
                ${
                  index <= currentStep
                    ? "bg-violet-500 scale-125"
                    : "bg-slate-600"
                }
              `}
            />
          ))}
        </div>
      </div>

      
      <p className="mt-8 text-xs md:text-sm text-slate-500">
        This usually takes a few seconds depending on the PDF size.
      </p>

    </div>
  </div>
);
};

export default Processing;