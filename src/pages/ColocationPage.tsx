import { Check, Building2, Shield, Zap, Thermometer, Lock, Wifi } from 'lucide-react';

const colocationPlans = [
  {
    name: '1U Colocation',
    price: '₹2,999',
    space: '1U Rack Space',
    features: [
      '1U of rack space',
      '1Gbps shared port',
      '5TB monthly bandwidth',
      '1 IPv4 address',
      '24/7 facility access',
      'Remote hands service',
      'DDoS protection',
    ],
  },
  {
    name: '4U Colocation',
    price: '₹9,999',
    space: '4U Rack Space',
    features: [
      '4U of rack space',
      '10Gbps shared port',
      '20TB monthly bandwidth',
      '8 IPv4 addresses',
      '24/7 facility access',
      'Remote hands service',
      'DDoS protection',
      'Redundant power',
    ],
    popular: true,
  },
  {
    name: 'Half Rack',
    price: '₹44,999',
    space: '24U Rack Space',
    features: [
      '24U of rack space',
      '10Gbps dedicated port',
      '100TB monthly bandwidth',
      '/28 IPv4 subnet',
      '24/7 facility access',
      'Dedicated remote hands',
      'Advanced DDoS protection',
      'Redundant power',
      'Private cage option',
      'Managed services available',
    ],
  },
  {
    name: 'Full Rack',
    price: '₹79,999',
    space: '42U Rack Space',
    features: [
      '42U of rack space',
      '100Gbps dedicated port',
      'Unlimited bandwidth',
      '/27 IPv4 subnet',
      '24/7 facility access',
      'Dedicated remote hands',
      'Enterprise DDoS protection',
      'Redundant power feeds',
      'Private locked cage',
      'Managed services included',
      'Direct fiber connectivity',
      'Priority support',
    ],
  },
];

const facilities = [
  {
    icon: Building2,
    title: 'Tier III Data Center',
    description: 'N+1 redundancy with 99.982% uptime guarantee',
  },
  {
    icon: Shield,
    title: 'Physical Security',
    description: '24/7 security, biometric access, CCTV monitoring',
  },
  {
    icon: Zap,
    title: 'Redundant Power',
    description: 'Multiple utility feeds, N+1 UPS, diesel generators',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Precision cooling with N+1 redundancy, hot aisle containment',
  },
  {
    icon: Lock,
    title: 'Compliance',
    description: 'ISO 27001, PCI DSS, SOC 2 Type II certified',
  },
  {
    icon: Wifi,
    title: 'Network Connectivity',
    description: 'Multiple Tier-1 carriers, 12Tbps capacity, low latency',
  },
];

export default function ColocationPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Colocation Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Secure your infrastructure in our Mumbai Tier III data center. Enterprise-grade facility with
              redundant power, cooling, and network connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {colocationPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative group animate-fadeInUp ${
                  plan.popular ? 'lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'border-orange-500/50 shadow-xl shadow-orange-500/20' : 'border-slate-700/50 hover:border-orange-500/50'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-sm text-orange-400 mb-4">{plan.space}</div>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-500/30'
                        : 'border border-orange-500/30 hover:bg-orange-500/10 text-white'
                    } hover:scale-105`}>
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              World-Class <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Facility</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div
                    key={facility.title}
                    className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{facility.title}</h3>
                      <p className="text-gray-400">{facility.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Tour Our Facility</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Schedule a visit to our Mumbai data center and see our infrastructure firsthand.
                Our team will guide you through our security, power, cooling, and network systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:scale-105 font-semibold">
                Schedule Tour
              </button>
              <button className="px-8 py-3 border border-orange-500/30 rounded-lg hover:bg-orange-500/10 transition-all duration-300 font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
