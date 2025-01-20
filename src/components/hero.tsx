import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Supercharge
              </span>{" "}
              Your CLI Workflow
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-gray-300">
              The ultimate CLI tool for seamless tunneling, event inspection,
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
          <div className="relative">
            <img
              src="/screenshot.png"
              alt="whook CLI interface"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
