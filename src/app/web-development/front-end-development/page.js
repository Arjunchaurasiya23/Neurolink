&apos;use client&apos;;

import { motion } from &apos;framer-motion&apos;;
import { ArrowLeft, Monitor, Layout, Code, Smartphone, Tablet, Globe, Zap, Users, BarChart2, Settings, Lock, Cpu } from &apos;lucide-react&apos;;
import Link from &apos;next/link&apos;;

export default function FrontEndDevelopmentPage() {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50&quot;>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=&quot;relative overflow-hidden min-h-[60vh] flex items-center&quot;
      >
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-gradient-x&quot;></div>
        <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative&quot;
        >
          <Link 
            href=&quot;/web-development&quot;
            className=&quot;inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 group&quot;
          >
            <ArrowLeft className=&quot;w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300&quot; />
            Back to Services
          </Link>
          
          <div className=&quot;text-center&quot;>
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: &quot;spring&quot;, stiffness: 100 }}
              className=&quot;inline-block mb-8 relative&quot;
            >
              <div className=&quot;absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse&quot;></div>
              <Monitor className=&quot;w-24 h-24 text-indigo-600 animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600&quot;
            >
              Front-End Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Create beautiful, responsive, and user-friendly web interfaces
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {/* Responsive Design */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white&quot;>
                <Layout className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Responsive Design</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Mobile-first approach ensuring perfect display across all devices and screen sizes.
            </p>
          </motion.div>

          {/* Modern UI/UX */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white&quot;>
                <Code className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Modern UI/UX</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Cutting-edge design patterns and user experience best practices.
            </p>
          </motion.div>

          {/* Cross-browser Compatibility */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white&quot;>
                <Globe className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Cross-browser Compatibility</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Consistent performance and appearance across all major browsers.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Why Choose Our Front-End Development?</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4&quot;>
              <Zap className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Fast Performance</h3>
            <p className=&quot;text-gray-600&quot;>Optimized for speed and smooth interactions.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4&quot;>
              <Users className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>User-Friendly</h3>
            <p className=&quot;text-gray-600&quot;>Intuitive and accessible interfaces.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4&quot;>
              <Settings className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Easy Maintenance</h3>
            <p className=&quot;text-gray-600&quot;>Clean, maintainable code structure.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4&quot;>
              <BarChart2 className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>SEO Optimized</h3>
            <p className=&quot;text-gray-600&quot;>Search engine friendly structure.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Additional Features</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4&quot;>
              <Smartphone className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Mobile-First</h3>
            <p className=&quot;text-gray-600&quot;>Optimized for mobile devices and tablets.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4&quot;>
              <Lock className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Secure</h3>
            <p className=&quot;text-gray-600&quot;>Built with security best practices.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4&quot;>
              <Cpu className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Progressive Web Apps</h3>
            <p className=&quot;text-gray-600&quot;>Support for modern PWA features.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32&quot;
      >
        <div className=&quot;bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-[url(&apos;/grid.svg&apos;)] opacity-10&quot;></div>
          <div className=&quot;relative&quot;>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Build Your Front-End?</h2>
            <p className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;>
              Let&apos;s create stunning web interfaces that engage your users and drive results.
            </p>
            <Link
              href=&quot;/contact&quot;
              className=&quot;inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300&quot;
            >
              Get Started
              <ArrowLeft className=&quot;w-5 h-5 ml-2 transform rotate-180&quot; />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 