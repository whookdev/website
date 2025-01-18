import {
  TrainFrontTunnelIcon as Tunnel,
  Search,
  Server,
  Zap,
} from "lucide-react";

const features = [
  {
    name: "Seamless Tunneling",
    description:
      "Establish secure tunnels effortlessly for remote access and testing.",
    icon: Tunnel,
  },
  {
    name: "Inspect Events",
    description:
      "Gain deep insights into your application events for better debugging.",
    icon: Search,
  },
  {
    name: "Forward to Local Server",
    description:
      "Easily forward requests to your local development server for testing.",
    icon: Server,
  },
  {
    name: "Request Flow Insights",
    description:
      "Get amazing insights into the entire request flow for optimized performance.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Powerful Features
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-lg bg-[#0f0f0f] bg-opacity-70 backdrop-blur-sm border border-[#2a2a2a] shadow-lg"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">{feature.name}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
