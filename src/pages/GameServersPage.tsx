import { Check, Gamepad2, Users, Zap, Crown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const gameServers = [
  {
    game: 'Minecraft',
    icon: '⛏️',
    color: 'from-green-500 to-emerald-500',
    plans: [
      { name: 'Starter', players: '10', ram: '2GB', price: '₹399', features: ['DDoS Protection', 'Auto Backups', 'Mod Support'] },
      { name: 'Community', players: '50', ram: '4GB', price: '₹799', features: ['DDoS Protection', 'Auto Backups', 'Mod Support', 'MySQL Database'], popular: true },
      { name: 'Network', players: '200', ram: '16GB', price: '₹2,999', features: ['DDoS Protection', 'Auto Backups', 'Mod Support', 'MySQL Database', 'BungeeCord', 'Priority Support'] },
    ],
  },
  {
    game: 'Counter-Strike 2',
    icon: '🎯',
    color: 'from-orange-500 to-red-500',
    plans: [
      { name: 'Standard', players: '16', ram: '4GB', price: '₹599', features: ['128 Tick', 'Workshop Maps', 'SourceMod'] },
      { name: 'Pro', players: '32', ram: '8GB', price: '₹1,199', features: ['128 Tick', 'Workshop Maps', 'SourceMod', 'GOTV', 'Match Server'], popular: true },
      { name: 'Tournament', players: '64', ram: '16GB', price: '₹2,399', features: ['128 Tick', 'Workshop Maps', 'SourceMod', 'GOTV', 'Match Server', 'Anti-Cheat', 'Premium Support'] },
    ],
  },
  {
    game: 'ARK: Survival',
    icon: '🦖',
    color: 'from-purple-500 to-pink-500',
    plans: [
      { name: 'Tribe', players: '20', ram: '8GB', price: '₹999', features: ['Full Mod Support', 'Cluster Ready', 'Auto Updates'] },
      { name: 'Community', players: '50', ram: '16GB', price: '₹1,999', features: ['Full Mod Support', 'Cluster Ready', 'Auto Updates', 'Custom Rates'], popular: true },
      { name: 'Mega Tribe', players: '100', ram: '32GB', price: '₹3,999', features: ['Full Mod Support', 'Cluster Ready', 'Auto Updates', 'Custom Rates', 'Multi-Map Cluster', 'Dedicated IP'] },
    ],
  },
  {
    game: 'Rust',
    icon: '🔧',
    color: 'from-yellow-500 to-orange-500',
    plans: [
      { name: 'Solo/Duo', players: '50', ram: '8GB', price: '₹1,299', features: ['Oxide Support', 'Blueprint Wipes', 'Map Seeds'] },
      { name: 'Standard', players: '100', ram: '16GB', price: '₹2,499', features: ['Oxide Support', 'Blueprint Wipes', 'Map Seeds', 'Plugin Support'], popular: true },
      { name: 'High Pop', players: '200', ram: '32GB', price: '₹4,999', features: ['Oxide Support', 'Blueprint Wipes', 'Map Seeds', 'Plugin Support', 'Custom Maps', 'Admin Tools'] },
    ],
  },
  {
    game: 'Valheim',
    icon: '⚔️',
    color: 'from-blue-500 to-cyan-500',
    plans: [
      { name: 'Viking', players: '10', ram: '4GB', price: '₹599', features: ['Auto Backups', 'Mod Support', 'World Management'] },
      { name: 'Clan', players: '20', ram: '8GB', price: '₹1,099', features: ['Auto Backups', 'Mod Support', 'World Management', 'Multi-World'], popular: true },
      { name: 'Longship', players: '50', ram: '16GB', price: '₹2,199', features: ['Auto Backups', 'Mod Support', 'World Management', 'Multi-World', 'Custom Seeds', 'Priority Support'] },
    ],
  },
  {
    game: 'FiveM (GTA V)',
    icon: '🚗',
    color: 'from-indigo-500 to-purple-500',
    plans: [
      { name: 'Starter RP', players: '32', ram: '8GB', price: '₹1,499', features: ['Custom Scripts', 'ESX/QBCore', 'Voice Chat'] },
      { name: 'Community RP', players: '64', ram: '16GB', price: '₹2,799', features: ['Custom Scripts', 'ESX/QBCore', 'Voice Chat', 'OneSync', 'MySQL'], popular: true },
      { name: 'Pro RP', players: '128', ram: '32GB', price: '₹5,499', features: ['Custom Scripts', 'ESX/QBCore', 'Voice Chat', 'OneSync', 'MySQL', 'CAD/MDT', 'Dedicated IP'] },
    ],
  },
];

function GameServerSection({ gameData, index }: { gameData: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mb-20">
      <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="inline-flex items-center space-x-3 mb-4">
          <span className="text-5xl">{gameData.icon}</span>
          <h2 className="text-3xl font-bold text-white">{gameData.game}</h2>
        </div>
        <div className={`w-24 h-1 bg-gradient-to-r ${gameData.color} mx-auto rounded-full`} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {gameData.plans.map((plan: any, planIndex: number) => (
          <div
            key={plan.name}
            className={`relative group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
            style={{ transitionDelay: `${planIndex * 100}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className={`bg-gradient-to-r ${gameData.color} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1`}>
                  <Crown className="h-3 w-3" />
                  <span>Popular</span>
                </div>
              </div>
            )}

            <div className={`relative h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
              plan.popular ? 'border-green-500/50 shadow-xl shadow-green-500/20' : 'border-slate-700/50 hover:border-green-500/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-sm">Up to {plan.players} Players</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="text-sm">{plan.ram} RAM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Gamepad2 className="h-4 w-4 mr-2 text-purple-400" />
                    <span className="text-sm">Instant Setup</span>
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
                    ? `bg-gradient-to-r ${gameData.color} hover:opacity-90 text-white shadow-lg`
                    : 'border border-green-500/30 hover:bg-green-500/10 text-white'
                } hover:scale-105`}>
                  Deploy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GameServersPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Game Server Hosting
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Low-latency game servers hosted in Mumbai. DDoS protected, auto-backups, and instant deployment.
              Optimized for the best gaming experience.
            </p>
          </div>

          {gameServers.map((gameData, index) => (
            <GameServerSection key={gameData.game} gameData={gameData} index={index} />
          ))}

          <div className="text-center mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Game?</h3>
            <p className="text-gray-400 mb-6">
              We support many more games! Contact us for custom game server configurations.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-green-500/30 hover:scale-105 font-semibold">
              Request Custom Game Server
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
