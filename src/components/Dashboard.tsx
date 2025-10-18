import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Bell,
  Cpu,
  Settings,
  Zap,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  Droplet,
  Flame,
  ChevronRight,
  Activity,
  Target,
  Home,
  Menu,
  X
} from 'lucide-react';

interface DashboardProps {
  onNavigate: () => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const buildings = [
    { name: 'Engineering Hall', usage: 247, status: 'normal', change: -5 },
    { name: 'Science Center', usage: 189, status: 'normal', change: 3 },
    { name: 'Library', usage: 156, status: 'high', change: 12 },
    { name: 'Student Union', usage: 312, status: 'normal', change: -2 },
    { name: 'Admin Building', usage: 98, status: 'low', change: -8 },
    { name: 'Sports Complex', usage: 423, status: 'high', change: 15 },
  ];

  const alerts = [
    { type: 'warning', building: 'Library', message: 'Unusual spike in AC usage', time: '5 min ago' },
    { type: 'error', building: 'Sports Complex', message: 'HVAC system efficiency below threshold', time: '12 min ago' },
    { type: 'info', building: 'Engineering Hall', message: 'Scheduled maintenance completed', time: '1 hour ago' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside className={`w-64 bg-white border-r border-slate-200 fixed h-full flex flex-col z-50 transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigate}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900">Smart Campus</div>
                <div className="text-xs text-slate-500">Energy Monitor</div>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {[
              { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
              { id: 'analytics', icon: BarChart3, label: 'Analytics' },
              { id: 'alerts', icon: Bell, label: 'Alerts', badge: 3 },
              { id: 'devices', icon: Cpu, label: 'Devices' },
              { id: 'settings', icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-4">
            <Target className="w-8 h-8 text-blue-600 mb-2" />
            <div className="text-sm font-semibold text-slate-900 mb-1">Sustainability Goal</div>
            <div className="text-xs text-slate-600 mb-3">82% to target</div>
            <div className="w-full bg-white rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </aside>

      <main className="lg:ml-64 flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Energy Dashboard</h1>
          </div>
          <p className="text-sm sm:text-base text-slate-600 ml-0 lg:ml-0">Real-time monitoring and insights across campus facilities</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-medium">
                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                -8%
              </div>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-1">1,425 kWh</div>
            <div className="text-xs sm:text-sm text-slate-600">Total Energy Today</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-medium">
                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
                -12%
              </div>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-1">847 kW</div>
            <div className="text-xs sm:text-sm text-slate-600">Current Load</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
              </div>
              <div className="flex items-center gap-1 text-red-600 text-xs sm:text-sm font-medium">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                +5%
              </div>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-1">14:30</div>
            <div className="text-xs sm:text-sm text-slate-600">Peak Usage Time</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-medium">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                +2%
              </div>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900 mb-1">94.2%</div>
            <div className="text-xs sm:text-sm text-slate-600">System Efficiency</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Real-Time Energy Usage</h2>
              <div className="flex gap-2">
                <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-50 text-blue-600 rounded-lg font-medium">Electricity</button>
                <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-slate-600 hover:bg-slate-50 rounded-lg">Water</button>
                <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-slate-600 hover:bg-slate-50 rounded-lg">Gas</button>
              </div>
            </div>

            <div className="h-48 sm:h-64 flex items-end gap-1 sm:gap-2 overflow-x-auto pb-2">
              {[
                { hour: '00:00', electricity: 45, water: 20, gas: 15 },
                { hour: '02:00', electricity: 38, water: 18, gas: 12 },
                { hour: '04:00', electricity: 35, water: 15, gas: 10 },
                { hour: '06:00', electricity: 52, water: 25, gas: 18 },
                { hour: '08:00', electricity: 78, water: 35, gas: 28 },
                { hour: '10:00', electricity: 85, water: 38, gas: 32 },
                { hour: '12:00', electricity: 92, water: 42, gas: 35 },
                { hour: '14:00', electricity: 95, water: 45, gas: 38 },
                { hour: '16:00', electricity: 88, water: 40, gas: 33 },
                { hour: '18:00', electricity: 82, water: 36, gas: 30 },
                { hour: '20:00', electricity: 68, water: 30, gas: 25 },
                { hour: '22:00', electricity: 55, water: 24, gas: 20 },
              ].map((data, i) => (
                <div key={i} className="flex-1 min-w-[30px] flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all hover:from-blue-600 hover:to-blue-500"
                       style={{ height: `${data.electricity}%` }}
                  />
                  <span className="text-[10px] sm:text-xs text-slate-500 mt-1 whitespace-nowrap">{data.hour}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-xs sm:text-sm text-slate-600">Electricity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                <span className="text-xs sm:text-sm text-slate-600">Water</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-xs sm:text-sm text-slate-600">Gas</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6">Resource Distribution</h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-slate-900">Electricity</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">847 kW</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }} />
                </div>
                <div className="text-xs text-slate-500 mt-1">68% of capacity</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-slate-900">Water</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">2,340 L</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
                <div className="text-xs text-slate-500 mt-1">45% of capacity</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-slate-900">Gas</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">156 m³</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '32%' }} />
                </div>
                <div className="text-xs text-slate-500 mt-1">32% of capacity</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-slate-900 mb-1">CO₂ Emissions Today</div>
                <div className="text-2xl font-bold text-emerald-600">-3.2 Tons</div>
                <div className="text-xs text-slate-600 mt-1">12% below target</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Building Overview</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {buildings.map((building, i) => (
                <div key={i} className="flex items-center justify-between p-3 sm:p-4 rounded-lg hover:bg-slate-50 transition group cursor-pointer">
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      building.status === 'high' ? 'bg-red-100' :
                      building.status === 'low' ? 'bg-emerald-100' : 'bg-blue-100'
                    }`}>
                      <Home className={`w-5 h-5 ${
                        building.status === 'high' ? 'text-red-600' :
                        building.status === 'low' ? 'text-emerald-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 text-sm sm:text-base truncate">{building.name}</div>
                      <div className="text-xs sm:text-sm text-slate-500">{building.usage} kW</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div className={`flex items-center gap-1 text-xs sm:text-sm font-medium ${
                      building.change > 0 ? 'text-red-600' : 'text-emerald-600'
                    }`}>
                      {building.change > 0 ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {Math.abs(building.change)}%
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium hidden sm:block ${
                      building.status === 'high' ? 'bg-red-50 text-red-600' :
                      building.status === 'low' ? 'bg-emerald-50 text-emerald-600' :
                      'bg-blue-50 text-blue-600'
                    }`}>
                      {building.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Recent Alerts</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    alert.type === 'error' ? 'bg-red-100' :
                    alert.type === 'warning' ? 'bg-amber-100' : 'bg-blue-100'
                  }`}>
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.type === 'error' ? 'text-red-600' :
                      alert.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-900 mb-1 text-sm sm:text-base">{alert.building}</div>
                    <div className="text-xs sm:text-sm text-slate-600 mb-2">{alert.message}</div>
                    <div className="text-xs text-slate-500">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 border-2 border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              Configure Alert Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
