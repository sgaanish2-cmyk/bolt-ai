import { useEffect, useState } from 'react';
import { Zap, TrendingUp, Activity } from 'lucide-react';

export default function Hero() {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [networkSpeed, setNetworkSpeed] = useState(0);

  useEffect(() => {
    const cpuInterval = setInterval(() => {
      setCpuUsage((prev) => {
        const target = 65 + Math.random() * 20;
        return prev + (target - prev) * 0.1;
      });
    }, 100);

    const networkInterval = setInterval(() => {
      setNetworkSpeed((prev) => {
        const target = 8 + Math.random() * 4;
        return prev + (target - prev) * 0.1;
      });
    }, 100);

    return () => {
      clearInterval(cpuInterval);
      clearInterval(networkInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300">Mumbai's Premier Hosting Provider</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
              High-Performance
            </span>
            <br />
            <span className="text-white">Hosting in Mumbai</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl">
            Enterprise-grade infrastructure for game servers, VPS, dedicated servers, and AI workloads.
            Built for speed, reliability, and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 hover:scale-105 font-semibold">
              Start Free Trial
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 backdrop-blur-sm font-semibold">
              Request Quote
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-400">99.99% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-400">12 Tbps Network</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fadeInUp delay-300">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-300">Server Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-green-400">Online</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">CPU Usage</span>
                    <span className="text-sm font-mono text-indigo-400">{cpuUsage.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/50"
                      style={{ width: `${cpuUsage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Network Speed</span>
                    <span className="text-sm font-mono text-indigo-400">{networkSpeed.toFixed(1)} Gbps</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50"
                      style={{ width: `${(networkSpeed / 12) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: 'Uptime', value: '99.99%' },
                  { label: 'Latency', value: '< 1ms' },
                  { label: 'Servers', value: '2.4K+' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-slate-800/50 rounded-lg border border-indigo-500/10">
                    <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-2 pt-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 bg-slate-700/30 rounded animate-pulse"
                    style={{
                      animationDelay: `${i * 100}ms`,
                      opacity: 0.3 + Math.random() * 0.7,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-600/30 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
      </div>
    </section>
  );
}
