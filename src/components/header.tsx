import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          whook
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#features"
                className="hover:text-purple-400 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/whookdev/docs"
                className="hover:text-purple-400 transition-colors"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/whookdev"
                className="hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
