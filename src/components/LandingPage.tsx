import { Zap, TrendingDown, BarChart3, Brain, Leaf, MapPin, ArrowRight, Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onNavigate: () => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-900">Smart Campus Energy</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#impact" className="text-slate-600 hover:text-slate-900 transition">Impact</a>
            <button
              onClick={onNavigate}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Login
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-slate-900 transition py-2">Features</a>
              <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-slate-900 transition py-2">Impact</a>
              <button
                onClick={onNavigate}
                className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Sustainable Campus Initiative
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Smart Energy Monitoring for Sustainable Campuses
              </h1>
              <p className="text-base sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Real-time visibility into campus energy consumption. Make data-driven decisions to reduce costs,
                lower carbon footprint, and build a greener future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onNavigate}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  View Dashboard <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition font-medium text-center">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Live Energy Flow</h3>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Activity className="w-5 h-5 animate-pulse" />
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl flex items-end justify-around p-4 gap-2">
                    {[65, 82, 73, 90, 68, 77, 85, 71].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-emerald-400 rounded-t-lg transition-all duration-1000"
                           style={{ height: `${height}%`, animation: `pulse 2s ease-in-out ${i * 0.1}s infinite` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">847 kW</div>
                      <div className="text-xs sm:text-sm text-slate-600">Current Load</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600">-12%</div>
                      <div className="text-xs sm:text-sm text-slate-600">vs Yesterday</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">94%</div>
                      <div className="text-xs sm:text-sm text-slate-600">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-12 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Impact This Month</h2>
            <p className="text-slate-600">Real results from smart energy management</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">24,580 kWh</div>
              <div className="text-slate-600">Energy Saved</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">8.4 Tons</div>
              <div className="text-slate-600">CO₂ Reduced</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">18%</div>
              <div className="text-slate-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-violet-600" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">32 Buildings</div>
              <div className="text-slate-600">Connected</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Comprehensive Energy Intelligence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Advanced monitoring and analytics tools designed for modern campus infrastructure
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Monitoring</h3>
              <p className="text-slate-600 leading-relaxed">
                Track energy consumption across all campus buildings with live data updates every second.
                Identify usage patterns and anomalies instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Machine learning algorithms predict usage trends, detect inefficiencies, and recommend
                optimization strategies automatically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainability Tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor carbon footprint reduction, set sustainability goals, and generate compliance
                reports for environmental initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Smart Campus</span>
              </div>
              <p className="text-slate-400 text-sm">
                Building sustainable campuses through intelligent energy management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
            <p>&copy; 2025 Smart Campus Energy. All rights reserved.</p>
            <p>Built for a sustainable future</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
