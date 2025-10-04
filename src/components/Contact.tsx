import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-indigo-300">Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Power Up?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your hosting needs. Our team is ready to help you scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeInUp">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email Us</div>
                    <div className="text-white group-hover:text-indigo-300 transition-colors">sales@powerdownhosting.com</div>
                    <div className="text-white group-hover:text-indigo-300 transition-colors">support@powerdownhosting.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Call Us</div>
                    <div className="text-white group-hover:text-indigo-300 transition-colors">+91 22 1234 5678</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Visit Us</div>
                    <div className="text-white group-hover:text-indigo-300 transition-colors">
                      123 Data Center Road<br />
                      Bandra Kurla Complex<br />
                      Mumbai, Maharashtra 400051<br />
                      India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-indigo-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-indigo-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Support</span>
                  <span className="text-green-400">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp delay-300">
            <form onSubmit={handleSubmit} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                      focusedField === 'name'
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                        : 'border-slate-700'
                    }`}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                        : 'border-slate-700'
                    }`}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white transition-all duration-300 focus:outline-none ${
                      focusedField === 'service'
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                        : 'border-slate-700'
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="vps">VPS / VDS</option>
                    <option value="dedicated">Dedicated Servers</option>
                    <option value="web-hosting">Web Hosting</option>
                    <option value="game-servers">Game Servers</option>
                    <option value="colocation">Colocation</option>
                    <option value="ai-consulting">AI Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-indigo-500 shadow-lg shadow-indigo-500/20'
                        : 'border-slate-700'
                    }`}
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 font-semibold flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Request
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 font-semibold flex items-center justify-center"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Call
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
