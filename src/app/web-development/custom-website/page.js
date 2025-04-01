&apos;use client&apos;;

import { motion } from &apos;framer-motion&apos;;
import { ArrowLeft, Layout, Palette, Search, Shield, Zap, BarChart2, Settings, Lock, Cpu, Database, Network, Wrench } from &apos;lucide-react&apos;;
import Link from &apos;next/link&apos;;

export default function CustomWebsitePage() {
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
              <Layout className=&quot;w-24 h-24 text-indigo-600 animate-float&quot; />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=&quot;text-6xl font-bold text-[#1e2942] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1e2942] to-indigo-600&quot;
            >
              Custom Website Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=&quot;text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12&quot;
            >
              Create unique, brand-aligned websites that stand out
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
          {/* Brand-aligned Design */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg text-white&quot;>
                <Palette className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Brand-aligned Design</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Custom designs that perfectly match your brand identity and values.
            </p>
          </motion.div>

          {/* Responsive Layouts */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-white&quot;>
                <Layout className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>Responsive Layouts</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Perfect viewing experience across all devices and screen sizes.
            </p>
          </motion.div>

          {/* SEO Optimization */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white&quot;>
                <Search className=&quot;w-6 h-6&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-[#1e2942]&quot;>SEO Optimization</h3>
            </div>
            <p className=&quot;text-gray-600&quot;>
              Built with search engine optimization best practices.
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
        <h2 className=&quot;text-4xl font-bold text-[#1e2942] mb-12 text-center&quot;>Why Choose Our Custom Website Development?</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4&quot;>
              <Shield className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Secure & Reliable</h3>
            <p className=&quot;text-gray-600&quot;>Built with security best practices.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4&quot;>
              <Zap className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Fast Performance</h3>
            <p className=&quot;text-gray-600&quot;>Optimized for speed and efficiency.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4&quot;>
              <Settings className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>User-Friendly</h3>
            <p className=&quot;text-gray-600&quot;>Intuitive navigation and interface.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-lg w-fit mb-4&quot;>
              <BarChart2 className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Analytics Ready</h3>
            <p className=&quot;text-gray-600&quot;>Track and analyze user behavior.</p>
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
              <Database className=&quot;w-6 h-6 text-indigo-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Content Management</h3>
            <p className=&quot;text-gray-600&quot;>Easy content updates and management.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg w-fit mb-4&quot;>
              <Network className=&quot;w-6 h-6 text-purple-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Social Integration</h3>
            <p className=&quot;text-gray-600&quot;>Connect with social media platforms.</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className=&quot;bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300&quot;
          >
            <div className=&quot;p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg w-fit mb-4&quot;>
              <Wrench className=&quot;w-6 h-6 text-blue-600&quot; />
            </div>
            <h3 className=&quot;text-lg font-semibold text-[#1e2942] mb-2&quot;>Custom Features</h3>
            <p className=&quot;text-gray-600&quot;>Tailored functionality for your needs.</p>
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
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Create Your Custom Website?</h2>
            <p className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;>
              Let&apos;s build a unique website that perfectly represents your brand.
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