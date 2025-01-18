import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Supercharge
          </span>{" "}
          Your CLI Workflow
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto text-gray-300">
          whook: The ultimate CLI tool for seamless tunneling, event inspection,
          and local development insights.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
