import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#04644A] to-[black] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="12Monday Technologies"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">
                12Monday Technologies
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We build startups from scratch. Specializing in mobile app development,
              React Native, Flutter, and full-stack solutions that bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/bilalattari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:attari1235@gmail.com"
                className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#1BC47D] transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mobile App Development</li>
              <li>React Native</li>
              <li>Flutter Development</li>
              <li>MERN Stack</li>
              <li>Startup Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 12Monday Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

