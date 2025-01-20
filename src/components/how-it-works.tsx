import { ArrowRight, Terminal, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Install whook",
    description: "Get started with a simple npm install command.",
    icon: Terminal,
  },
  {
    title: "Create a Tunnel",
    description: "Establish a secure connection to your local environment.",
    icon: Zap,
  },
  {
    title: "Inspect and Debug",
    description:
      "Gain insights into your request flow and easily debug issues.",
    icon: RefreshCw,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            How It Works
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center mb-8 md:mb-0"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 max-w-xs">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-purple-400 mt-4 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
