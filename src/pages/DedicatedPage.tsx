import { Check, Server, Cpu, Database, Gauge } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const dedicatedServers = [
  {
    category: 'Entry Dedicated Servers',
    plans: [
      {
        name: 'DS-E2388',
        price: '₹6,999',
        processor: 'Intel Xeon E-2388G',
        cores: '8C/16T @ 3.2GHz',
        ram: '32GB DDR4 ECC',
        storage: '2x 1TB NVMe',
        bandwidth: '20TB @ 1Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'DDoS Protection', '5 IPv4'],
      },
      {
        name: 'DS-E2486',
        price: '₹8,999',
        processor: 'Intel Xeon E-2486G',
        cores: '6C/12T @ 3.5GHz',
        ram: '64GB DDR4 ECC',
        storage: '2x 2TB NVMe',
        bandwidth: '30TB @ 1Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'DDoS Protection', '8 IPv4', 'Private Network'],
        popular: true,
      },
      {
        name: 'DS-Ryzen5',
        price: '₹9,999',
        processor: 'AMD Ryzen 9 5950X',
        cores: '16C/32T @ 3.4GHz',
        ram: '64GB DDR4',
        storage: '2x 2TB NVMe',
        bandwidth: '40TB @ 1Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'DDoS Protection', '8 IPv4', 'Private Network', 'GPU Ready'],
      },
    ],
  },
  {
    category: 'High Performance Dedicated',
    plans: [
      {
        name: 'DS-Silver4314',
        price: '₹14,999',
        processor: 'Intel Xeon Silver 4314',
        cores: '16C/32T @ 2.4GHz',
        ram: '128GB DDR4 ECC',
        storage: '4x 2TB NVMe RAID-10',
        bandwidth: '50TB @ 10Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'Advanced DDoS', '16 IPv4', 'Private Network', 'Redundant PSU'],
      },
      {
        name: 'DS-Gold5320',
        price: '₹24,999',
        processor: 'Intel Xeon Gold 5320',
        cores: '26C/52T @ 2.2GHz',
        ram: '256GB DDR4 ECC',
        storage: '4x 4TB NVMe RAID-10',
        bandwidth: '100TB @ 10Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'Advanced DDoS', '32 IPv4', 'Private Network', 'Redundant PSU', 'Priority Support'],
        popular: true,
      },
      {
        name: 'DS-Platinum8358',
        price: '₹44,999',
        processor: 'Intel Xeon Platinum 8358',
        cores: '32C/64T @ 2.6GHz',
        ram: '512GB DDR4 ECC',
        storage: '8x 4TB NVMe RAID-10',
        bandwidth: 'Unlimited @ 10Gbps',
        features: ['IPMI Access', 'Hardware RAID', 'Advanced DDoS', '64 IPv4', 'Private Network', 'Redundant PSU', '24/7 Premium Support', 'Managed Service'],
      },
    ],
  },
  {
    category: 'GPU Dedicated Servers',
    plans: [
      {
        name: 'GPU-RTX4090',
        price: '₹34,999',
        processor: 'AMD Ryzen 9 7950X',
        cores: '16C/32T @ 4.5GHz',
        ram: '128GB DDR5',
        storage: '2x 4TB NVMe',
        gpu: 'NVIDIA RTX 4090 24GB',
        bandwidth: '50TB @ 10Gbps',
        features: ['CUDA Support', 'AI/ML Optimized', 'Ray Tracing', 'Tensor Cores', 'NVLink Ready'],
      },
      {
        name: 'GPU-A5000',
        price: '₹49,999',
        processor: 'Intel Xeon Gold 6326',
        cores: '16C/32T @ 2.9GHz',
        ram: '256GB DDR4 ECC',
        storage: '4x 4TB NVMe',
        gpu: 'NVIDIA A5000 24GB',
        bandwidth: '100TB @ 10Gbps',
        features: ['CUDA Support', 'AI/ML Optimized', 'ECC Memory', 'Professional Grade', 'Multi-GPU Ready'],
        popular: true,
      },
      {
        name: 'GPU-A100',
        price: '₹89,999',
        processor: 'AMD EPYC 7763',
        cores: '64C/128T @ 2.45GHz',
        ram: '512GB DDR4 ECC',
        storage: '8x 4TB NVMe',
        gpu: 'NVIDIA A100 80GB',
        bandwidth: 'Unlimited @ 25Gbps',
        features: ['CUDA Support', 'AI/ML Optimized', 'HBM2e Memory', 'Multi-Instance GPU', 'NVLink', 'Premium Support'],
      },
    ],
  },
  {
    category: 'Storage Dedicated Servers',
    plans: [
      {
        name: 'Storage-8TB',
        price: '₹11,999',
        processor: 'Intel Xeon E-2388G',
        cores: '8C/16T @ 3.2GHz',
        ram: '64GB DDR4 ECC',
        storage: '4x 2TB SATA RAID-10',
        bandwidth: '50TB @ 1Gbps',
        features: ['Large Storage Pool', 'RAID Options', 'Hot-Swap Drives', 'Backup Optimized'],
      },
      {
        name: 'Storage-24TB',
        price: '₹19,999',
        processor: 'Intel Xeon Silver 4314',
        cores: '16C/32T @ 2.4GHz',
        ram: '128GB DDR4 ECC',
        storage: '12x 2TB SATA RAID-6',
        bandwidth: '100TB @ 10Gbps',
        features: ['Large Storage Pool', 'RAID Options', 'Hot-Swap Drives', 'Backup Optimized', 'IPMI', 'Redundant PSU'],
      },
      {
        name: 'Storage-48TB',
        price: '₹34,999',
        processor: 'Intel Xeon Gold 5320',
        cores: '26C/52T @ 2.2GHz',
        ram: '256GB DDR4 ECC',
        storage: '24x 2TB SATA RAID-6',
        bandwidth: 'Unlimited @ 10Gbps',
        features: ['Massive Storage', 'RAID Options', 'Hot-Swap Drives', 'Backup Optimized', 'IPMI', 'Redundant PSU', 'SAS Support'],
      },
    ],
  },
];

function ServerCard({ server, index }: { server: any; index: number }) {
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
      {server.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Best Value
          </div>
        </div>
      )}

      <div className={`relative h-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
        server.popular ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/20' : 'border-slate-700/50 hover:border-cyan-500/50'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{server.name}</h3>
            <Server className="h-6 w-6 text-cyan-400" />
          </div>

          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-white">{server.price}</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
          </div>

          <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
            <div className="flex items-start">
              <Cpu className="h-4 w-4 mr-2 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-white">{server.processor}</div>
                <div className="text-xs text-gray-400">{server.cores}</div>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Gauge className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm">{server.ram}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Database className="h-4 w-4 mr-2 text-blue-400" />
              <span className="text-sm">{server.storage}</span>
            </div>
            {server.gpu && (
              <div className="flex items-center text-gray-300">
                <Server className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm">{server.gpu}</span>
              </div>
            )}
            <div className="text-xs text-gray-400 pt-2">
              {server.bandwidth} Bandwidth
            </div>
          </div>

          <ul className="space-y-2 mb-6">
            {server.features.map((feature: string) => (
              <li key={feature} className="flex items-start text-sm">
                <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            server.popular
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30'
              : 'border border-cyan-500/30 hover:bg-cyan-500/10 text-white'
          } hover:scale-105`}>
            Configure Server
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DedicatedPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dedicated Servers
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bare-metal servers with full hardware control. From entry-level to enterprise-grade configurations,
              including GPU servers for AI/ML workloads.
            </p>
          </div>

          {dedicatedServers.map((category, categoryIndex) => (
            <div key={category.category} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-3">{category.category}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.plans.map((server, index) => (
                  <ServerCard key={server.name} server={server} index={categoryIndex * 10 + index} />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
            <p className="text-gray-400 mb-6">
              Need multi-server setups, custom hardware, or managed services? Our enterprise team can help.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105 font-semibold">
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
