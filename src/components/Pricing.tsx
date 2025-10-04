import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Starter VPS',
    icon: Zap,
    price: '₹499',
    period: '/month',
    description: 'Perfect for small projects and development',
    features: [
      '2 vCPU Cores',
      '4GB RAM',
      '80GB NVMe Storage',
      '2TB Bandwidth',
      'Mumbai Location',
      'DDoS Protection',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Gamer 8GB',
    icon: Rocket,
    price: '₹1,999',
    period: '/month',
    description: 'Optimized for game servers and communities',
    features: [
      '4 vCPU Cores',
      '8GB RAM',
      '160GB NVMe Storage',
      '5TB Bandwidth',
      'Game Server Templates',
      'Priority Support',
    ],
    color: 'from-indigo-500 to-purple-500',
    popular: true,
  },
  {
    name: 'Pro Dedicated',
    icon: Crown,
    price: '₹8,999',
    period: '/month',
    description: 'Bare-metal power for enterprise workloads',
    features: [
      'Intel Xeon E-2388G',
      '32GB DDR4 RAM',
      '2x 1TB NVMe RAID',
      'Unlimited Bandwidth',
      'Full Root Access',
      '24/7 Premium Support',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const Icon = plan.icon;

  return (
    <div
      ref={cardRef}
      className={`relative group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`relative h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
          plan.popular
            ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20'
            : 'border-slate-700/50 hover:border-indigo-500/50'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />

        <div className="relative z-10">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-400 ml-2">{plan.period}</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50'
                : 'border border-indigo-500/30 hover:bg-indigo-500/10 text-white'
            } hover:scale-105`}
          >
            Order Now
          </button>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 blur-xl`} />
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-indigo-300">Transparent Pricing</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just powerful hosting at honest prices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Need custom configuration?{' '}
            <a href="#contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
