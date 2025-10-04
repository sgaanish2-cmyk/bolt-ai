import { Server, Zap, Wind, Shield, Network, Lock, Award, MapPin } from 'lucide-react';

const infrastructure = [
  {
    icon: Zap,
    title: 'Power Infrastructure',
    items: [
      'Dual utility power feeds from separate substations',
      'N+1 UPS systems with 15-minute runtime',
      '2MW diesel generators with 72-hour fuel capacity',
      'Automatic transfer switches (ATS)',
      '99.999% power availability',
    ],
  },
  {
    icon: Wind,
    title: 'Cooling Systems',
    items: [
      'Precision CRAC units with N+1 redundancy',
      'Hot aisle containment for efficiency',
      'Ambient temperature: 68-72°F (20-22°C)',
      'Humidity control: 40-60% RH',
      'Real-time environmental monitoring',
    ],
  },
  {
    icon: Shield,
    title: 'Physical Security',
    items: [
      '24/7/365 on-site security personnel',
      'Biometric access control systems',
      'Man-trap entry vestibules',
      'CCTV surveillance with 90-day retention',
      'Visitor escort policy',
    ],
  },
  {
    icon: Network,
    title: 'Network Connectivity',
    items: [
      'Multiple Tier-1 carrier connections',
      '12 Tbps total network capacity',
      'BGP routing with automatic failover',
      '< 2ms latency to major Indian cities',
      'Direct peering with major ISPs',
    ],
  },
  {
    icon: Lock,
    title: 'Fire Suppression',
    items: [
      'VESDA early smoke detection',
      'FM-200 clean agent suppression',
      'Pre-action sprinkler systems',
      'Automatic shutdown procedures',
      'Regular fire drills and testing',
    ],
  },
  {
    icon: Award,
    title: 'Certifications',
    items: [
      'Tier III certified facility',
      'ISO 27001 information security',
      'PCI DSS Level 1 compliant',
      'SOC 2 Type II audited',
      'HIPAA compliant infrastructure',
    ],
  },
];

const carriers = [
  'Tata Communications',
  'Bharti Airtel',
  'Reliance Jio',
  'BSNL',
  'Vodafone Idea',
  'VSNL',
  'Sify',
  'NTT Communications',
];

export default function DataCenterPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Mumbai Data Center
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art Tier III facility in Bandra Kurla Complex. Enterprise-grade infrastructure
              with 99.982% uptime SLA and comprehensive redundancy.
            </p>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20">
              <div className="flex items-center justify-center mb-8">
                <MapPin className="h-8 w-8 text-cyan-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Facility Overview</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: 'Total Space', value: '50,000 sq ft' },
                  { label: 'Raised Floor', value: '3 feet clearance' },
                  { label: 'Power Density', value: 'Up to 20kW/rack' },
                  { label: 'Cooling Capacity', value: '2,500 tons' },
                  { label: 'Network Capacity', value: '12 Tbps' },
                  { label: 'Uptime Rating', value: '99.982%' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="text-center p-6 bg-slate-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Infrastructure <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Details</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infrastructure.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>

                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Network <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Carriers</span>
            </h2>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <p className="text-gray-300 text-center mb-8">
                Our facility is carrier-neutral with direct connections to major Indian and international network providers:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {carriers.map((carrier, index) => (
                  <div
                    key={carrier}
                    className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Network className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-300">{carrier}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <Server className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Redundancy Design</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  Our Tier III design ensures concurrent maintainability with multiple independent distribution paths
                  serving the IT equipment.
                </p>
                <p>
                  All critical components (power, cooling, network) have N+1 redundancy, meaning at least one backup
                  system is always available.
                </p>
                <p>
                  This architecture allows for planned maintenance without disrupting customer operations.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <Lock className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Compliance & Audits</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  Regular third-party audits ensure our facility maintains the highest security and operational
                  standards.
                </p>
                <p>
                  We undergo annual SOC 2 Type II audits and maintain continuous compliance monitoring for
                  PCI DSS and ISO 27001.
                </p>
                <p>
                  Detailed audit reports are available to customers under NDA.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule a Data Center Tour</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                See our infrastructure in person. We offer guided tours of our facility for prospective
                colocation customers and enterprise clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105 font-semibold">
                  Book a Tour
                </button>
                <button className="px-8 py-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold">
                  Download Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
