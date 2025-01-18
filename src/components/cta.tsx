import { Terminal } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Ready to Transform Your CLI Experience?
          </span>
        </h2>
        <div className="bg-[#0f0f0f] bg-opacity-70 backdrop-blur-sm border border-[#2a2a2a] rounded-lg p-6 mb-8 inline-block shadow-lg">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400">terminal</span>
          </div>
          <pre className="text-left text-sm">
            <code className="text-purple-400">$ npm install -g whook</code>
          </pre>
        </div>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors"
        >
          <Terminal className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
          Start Using whook
        </a>
      </div>
    </section>
  );
}
