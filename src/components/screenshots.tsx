const screenshots = [
  {
    title: "Powerful CLI Interface",
    description:
      "Effortlessly manage your tunnels and inspect events with our intuitive CLI.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Insightful Dashboard",
    description:
      "Get a comprehensive view of your request flow and performance metrics.",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Real-time Event Inspection",
    description: "Analyze and debug your application events in real-time.",
    image: "/placeholder.svg?height=300&width=600",
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            See whook in Action
          </span>
        </h2>
        <div className="space-y-20">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
            >
              <div className="lg:w-1/2">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  {screenshot.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
