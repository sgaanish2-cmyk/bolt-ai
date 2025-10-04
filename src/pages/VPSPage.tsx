import { Check, Cpu, HardDrive, Network, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const vpsPlans = [
  {
    category: 'Entry Level VPS',
    plans: [
      {
        name: 'VPS Starter',
        price: '₹299',
        specs: {
          cpu: '1 vCPU',
          ram: '2GB RAM',
          storage: '40GB NVMe',
          bandwidth: '1TB Transfer',
          ip: '1 IPv4',
        },
        features: ['KVM Virtualization', 'Full Root Access', 'Free OS Templates', '99.9% Uptime SLA'],
      },
      {
        name: 'VPS Basic',
        price: '₹499',
        specs: {
          cpu: '2 vCPU',
          ram: '4GB RAM',
          storage: '80GB NVMe',
          bandwidth: '2TB Transfer',
          ip: '1 IPv4',
        },
        features: ['KVM Virtualization', 'Full Root Access', 'Free OS Templates', '99.9% Uptime SLA', 'DDoS Protection'],
        popular: true,
      },
      {
        name: 'VPS Standard',
        price: '₹799',
        specs: {
          cpu: '2 vCPU',
          ram: '8GB RAM',
          storage: '160GB NVMe',
          bandwidth: '3TB Transfer',
          ip: '1 IPv4',
        },
        features: ['KVM Virtualization', 'Full Root Access', 'Free OS Templates', '99.9% Uptime SLA', 'DDoS Protection', 'Daily Backups'],
      },
    ],
  },
  {
    category: 'Performance VPS',
    plans: [
      {
        name: 'VPS Pro',
        price: '₹1,499',
        specs: {
          cpu: '4 vCPU',
          ram: '16GB RAM',
          storage: '320GB NVMe',
          bandwidth: '5TB Transfer',
          ip: '2 IPv4',
        },
        features: ['KVM Virtualization', 'Dedicated CPU Cores', 'NVMe RAID-10', '99.99% Uptime SLA', 'Advanced DDoS', 'Daily Backups', 'Priority Support'],
      },
      {
        name: 'VPS Elite',
        price: '₹2,499',
        specs: {
          cpu: '6 vCPU',
          ram: '32GB RAM',
          storage: '640GB NVMe',
          bandwidth: '8TB Transfer',
          ip: '3 IPv4',
        },
        features: ['KVM Virtualization', 'Dedicated CPU Cores', 'NVMe RAID-10', '99.99% Uptime SLA', 'Advanced DDoS', 'Hourly Backups', 'Premium Support', 'Free Control Panel'],
      },
      {
        name: 'VPS Ultimate',
        price: '₹4,999',
        specs: {
          cpu: '8 vCPU',
          ram: '64GB RAM',
          storage: '1TB NVMe',
          bandwidth: '15TB Transfer',
          ip: '5 IPv4',
        },
        features: ['KVM Virtualization', 'Dedicated CPU Cores', 'NVMe RAID-10', '99.99% Uptime SLA', 'Advanced DDoS', 'Hourly Backups', '24/7 Premium Support', 'Free Control Panel', 'Private Network'],
      },
    ],
  },
  {
    category: 'Storage VPS',
    plans: [
      {
        name: 'Storage 500GB',
        price: '₹1,199',
        specs: {
          cpu: '2 vCPU',
          ram: '8GB RAM',
          storage: '500GB NVMe',
          bandwidth: '5TB Transfer',
          ip: '1 IPv4',
        },
        features: ['Large Storage Pool', 'Backup Optimized', 'RAID-10 Protection', 'Snapshot Support'],
      },
      {
        name: 'Storage 1TB',
        price: '₹1,999',
        specs: {
          cpu: '4 vCPU',
          ram: '16GB RAM',
          storage: '1TB NVMe',
          bandwidth: '8TB Transfer',
          ip: '2 IPv4',
        },
        features: ['Large Storage Pool', 'Backup Optimized', 'RAID-10 Protection', 'Snapshot Support', 'S3 Compatible'],
      },
      {
        name: 'Storage 2TB',
        price: '₹3,499',
        specs: {
          cpu: '6 vCPU',
          ram: '32GB RAM',
          storage: '2TB NVMe',
          bandwidth: '12TB Transfer',
          ip: '3 IPv4',
        },
        features: ['Large Storage Pool', 'Backup Optimized', 'RAID-10 Protection', 'Snapshot Support', 'S3 Compatible', 'Object Storage API'],
      },
    ],
  },
];

function PlanCard({ plan, index }: { plan: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-500`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Popular Choice
          </div>
        </div>
      )}

      <div className={`relative h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
        plan.popular ? 'border-blue-500/50 shadow-xl shadow-blue-500/20' : 'border-slate-700/50 hover:border-blue-500/50'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
            <div className="flex items-center text-gray-300">
              <Cpu className="h-4 w-4 mr-2 text-blue-400" />
              <span className="text-sm">{plan.specs.cpu}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Zap className="h-4 w-4 mr-2 text-cyan-400" />
              <span className="text-sm">{plan.specs.ram}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <HardDrive className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm">{plan.specs.storage}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Network className="h-4 w-4 mr-2 text-purple-400" />
              <span className="text-sm">{plan.specs.bandwidth}</span>
            </div>
          </div>

          <ul className="space-y-2 mb-6">
            {plan.features.map((feature: string) => (
              <li key={feature} className="flex items-start text-sm">
                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30'
              : 'border border-blue-500/30 hover:bg-blue-500/10 text-white'
          } hover:scale-105`}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VPSPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                VPS Hosting Plans
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scalable virtual private servers with full root access, KVM virtualization, and NVMe storage.
              Choose from entry-level to high-performance configurations.
            </p>
          </div>

          {vpsPlans.map((category, categoryIndex) => (
            <div key={category.category} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-3">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.plans.map((plan, index) => (
                  <PlanCard key={plan.name} plan={plan} index={categoryIndex * 10 + index} />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Need Custom Configuration?</h3>
            <p className="text-gray-400 mb-6">
              Contact our sales team for custom VPS configurations tailored to your specific requirements.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
