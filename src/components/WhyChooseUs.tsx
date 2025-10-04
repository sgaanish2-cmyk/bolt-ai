import { Shield, Clock, Zap, Headphones, Settings, TrendingUp } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const features = [
  {
    icon: Shield,
    title: 'Mumbai DC Presence',
    description: 'State-of-the-art data center facility in the heart of Mumbai with Tier III infrastructure.',
  },
  {
    icon: Clock,
    title: '99.99% Uptime SLA',
    description: 'Industry-leading uptime guarantee backed by redundant power and network infrastructure.',
  },
  {
    icon: Zap,
    title: 'DDoS Protection',
    description: 'Enterprise-grade DDoS mitigation protecting up to 12 Tbps of malicious traffic.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support from our experienced infrastructure engineers.',
  },
  {
    icon: Settings,
    title: 'WHMCS Automation',
    description: 'Seamless billing and provisioning with official WHMCS integration and custom modules.',
  },
  {
    icon: TrendingUp,
    title: 'AI Deployment Ready',
    description: 'Optimized infrastructure for machine learning workloads with GPU acceleration options.',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-white">
      {count.toFixed(target % 1 !== 0 ? 2 : 0)}
      {suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-indigo-300">Why Power Down Hosting</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Performance & Reliability</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience enterprise-grade infrastructure with consumer-friendly pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 blur-xl" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-indigo-500/20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Numbers That Speak for Themselves
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Network Capacity', value: 12, suffix: ' Tbps' },
              { label: 'Uptime Guarantee', value: 99.99, suffix: '%' },
              { label: 'Active Servers', value: 2400, suffix: '+' },
              { label: 'Response Time', value: 1, suffix: 'ms' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-slate-800/50 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-gray-400 mt-2 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
