import { Server, HardDrive, Globe, Monitor, Network, Package, Building2, Gamepad2, Brain } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Server,
    title: 'VPS / VDS',
    description: 'Scalable virtual servers with full root access and dedicated resources.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: HardDrive,
    title: 'Dedicated Servers',
    description: 'Bare-metal servers for maximum performance and complete control.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Hosting & Mail',
    description: 'Reliable web hosting with enterprise email solutions.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Monitor,
    title: 'RDP & Managed Desktop',
    description: 'High-performance remote desktop solutions for businesses.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Network,
    title: 'IPs & IP Pools',
    description: 'Dedicated IPs, IP pools, and subnet allocations.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Package,
    title: 'WHMCS Licenses',
    description: 'Official WHMCS licenses and custom modules for automation.',
    color: 'from-green-500 to-lime-500',
  },
  {
    icon: Building2,
    title: 'Colocation Mumbai',
    description: 'Secure colocation in our Mumbai data center facility.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Gamepad2,
    title: 'Game Servers',
    description: 'Optimized servers for Minecraft, CS, ARK, and more.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Infrastructure guidance and consultation for AI workloads.',
    color: 'from-violet-500 to-purple-500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />

      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        <div className="mt-4 flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
          <span className="text-sm font-medium">Learn more</span>
          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl`} />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-indigo-300">Full Suite of Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Scale</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From game servers to enterprise infrastructure, we've got you covered with cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
