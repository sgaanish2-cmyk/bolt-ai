import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Server, Github, Twitter, Linkedin, Youtube, Mail, CreditCard, Shield, Award, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    'VPS & Servers': [
      { label: 'VPS Hosting', href: '/vps' },
      { label: 'Dedicated Servers', href: '/dedicated' },
      { label: 'Storage Servers', href: '/vps' },
      { label: 'GPU Servers', href: '/dedicated' },
    ],
    'Gaming & Apps': [
      { label: 'Game Servers', href: '/game-servers' },
      { label: 'Minecraft Hosting', href: '/game-servers' },
      { label: 'FiveM Hosting', href: '/game-servers' },
      { label: 'CS2 Hosting', href: '/game-servers' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Data Center', href: '/data-center' },
      { label: 'Colocation', href: '/colocation' },
      { label: 'Contact', href: '/#contact' },
    ],
    Legal: [
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'AUP', href: '#aup' },
      { label: 'SLA Agreement', href: '#sla' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const paymentMethods = [
    '💳 Visa',
    '💳 Mastercard',
    '💳 American Express',
    '💰 UPI',
    '🏦 Net Banking',
    '💵 Cryptocurrency',
  ];

  const certifications = [
    { icon: Shield, name: 'ISO 27001' },
    { icon: Award, name: 'PCI DSS' },
    { icon: Shield, name: 'SOC 2' },
    { icon: Award, name: 'Tier III' },
  ];

  return (
    <footer className="relative bg-slate-900/80 border-t border-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <Server className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Power Down Hosting
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Mumbai's premier hosting provider since 2012. Enterprise-grade infrastructure with 99.99% uptime,
              24/7 expert support, and industry-leading security.
            </p>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-l-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-r-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">Get updates on new services and special offers</p>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                  >
                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 pb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-blue-400" />
                Payment Methods
              </h4>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1 bg-slate-800/50 rounded-lg border border-slate-700/50 text-xs text-gray-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm flex items-center">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                Certifications & Compliance
              </h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.name}
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span className="text-xs text-gray-300">{cert.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Power Down Hosting. All rights reserved. Made with passion in Mumbai, India.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">All Systems Operational</span>
              </div>
              <a href="mailto:support@powerdownhosting.com" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}
