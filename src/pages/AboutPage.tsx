import { Building2, Users, Award, Target, Heart, Lightbulb, Shield } from 'lucide-react';

const stats = [
  { label: 'Years in Business', value: '12+' },
  { label: 'Active Customers', value: '5,000+' },
  { label: 'Servers Managed', value: '15,000+' },
  { label: 'Uptime SLA', value: '99.99%' },
];

const values = [
  {
    icon: Target,
    title: 'Reliability First',
    description: 'We prioritize uptime and stability above all else. Your business depends on it.',
  },
  {
    icon: Heart,
    title: 'Customer Success',
    description: 'Your success is our success. We go above and beyond to support your growth.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly evolving our infrastructure to provide cutting-edge solutions.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security measures protecting your data and infrastructure.',
  },
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    description: 'Former infrastructure architect with 15+ years in cloud computing.',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    description: 'Network engineering expert specializing in high-availability systems.',
  },
  {
    name: 'Amit Patel',
    role: 'VP of Operations',
    description: 'Data center operations specialist with Tier III certification.',
  },
  {
    name: 'Sneha Desai',
    role: 'Head of Support',
    description: 'Leading our 24/7 technical support team with excellence.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Power Down Hosting
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Since 2012, we've been powering businesses across India with reliable, high-performance hosting solutions.
            </p>
          </div>

          <div className="mb-20">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
              <div className="max-w-4xl mx-auto space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Power Down Hosting was founded in 2012 with a simple mission: provide enterprise-grade hosting
                  infrastructure that businesses can actually afford. Starting from a single rack in a Mumbai data
                  center, we've grown into one of India's most trusted hosting providers.
                </p>
                <p>
                  Today, we manage over 15,000 servers serving more than 5,000 customers across gaming, e-commerce,
                  SaaS, and enterprise sectors. Our infrastructure spans multiple data centers with redundant
                  connectivity to ensure your services are always available.
                </p>
                <p>
                  What sets us apart is our commitment to customer success. We're not just a hosting provider –
                  we're your infrastructure partner. Our team of experts is available 24/7 to ensure your systems
                  run smoothly and scale with your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              By the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Numbers</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Leadership <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <div className="text-sm text-blue-400 mb-3">{member.role}</div>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals passionate about infrastructure and technology.
                Check out our open positions and be part of our growing team.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 font-semibold">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
