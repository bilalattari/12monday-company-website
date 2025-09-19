import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About 12Monday Technologies
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              We're passionate about building startups from scratch, 
              specializing in mobile app development and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              12Monday Technologies was founded with a simple mission: to help innovative 
              entrepreneurs and startups bring their ideas to life through cutting-edge 
              mobile app development and full-stack solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that every great startup begins with a great idea and the right 
                technology foundation. Our mission is to provide comprehensive development 
                services that transform innovative concepts into successful mobile applications 
                and digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From initial concept to market launch, we work closely with our clients to 
                ensure their vision becomes a reality that users love and businesses can scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1BC47D] to-[#01624B] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="leading-relaxed">
                To be the leading technology partner for startups worldwide, known for 
                delivering exceptional mobile applications and digital solutions that 
                drive business growth and user engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in modern technologies and development practices that 
              ensure scalable, maintainable, and high-performance applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mobile Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React Native Development</li>
                <li>• Flutter Applications</li>
                <li>• iOS & Android Native</li>
                <li>• Cross-platform Solutions</li>
                <li>• App Store Optimization</li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#01624B] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MERN Stack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• MongoDB Database Design</li>
                <li>• Express.js Backend APIs</li>
                <li>• React Frontend Development</li>
                <li>• Node.js Server Solutions</li>
                <li>• RESTful API Development</li>
              </ul>
            </div>

            {/* Startup Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#1BC47D] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Startup Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• MVP Development</li>
                <li>• Product Strategy</li>
                <li>• Technical Consulting</li>
                <li>• Scalability Planning</li>
                <li>• Launch Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600">
              Passionate about technology and innovation
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[#1BC47D] to-[#01624B] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">BA</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bilal Attari</h3>
            <p className="text-lg text-[#01624B] font-semibold mb-4">Founder & Lead Developer</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A passionate MERN stack developer with expertise in React Native, Flutter, 
              and full-stack development. Currently expanding skills in AI technologies 
              and continuously learning to stay at the forefront of mobile app development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• React Native Development</li>
                  <li>• Flutter Applications</li>
                  <li>• MERN Stack Development</li>
                  <li>• Mobile App Architecture</li>
                  <li>• Startup Development</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Current Focus</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• QRInsight Project Development</li>
                  <li>• AI Technology Integration</li>
                  <li>• Flutter Skill Enhancement</li>
                  <li>• Startup Consulting</li>
                  <li>• Mobile App Optimization</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/bilalattari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:attari1235@gmail.com"
                className="flex items-center px-6 py-3 bg-[#1BC47D] text-white rounded-lg hover:bg-[#01624B] transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1BC47D] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and creative solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#01624B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">We deliver exceptional results with attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1BC47D] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with clients as partners in success</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#01624B] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">We deliver on time and exceed expectations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#01624B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss your project and see how we can help bring your startup vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-[#1BC47D] text-white rounded-lg font-semibold hover:bg-white hover:text-[#01624B] transition-colors duration-200"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

