'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budgetRange: '',
    message: '',
    referral: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        console.warn('EmailJS not configured. Using fallback simulation.');
        // Fallback to simulation if not configured
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', company: '', projectType: '', timeline: '', budgetRange: '', message: '', referral: '' });
          setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
        return;
      }

      // Prepare template parameters
      // Note: The recipient email should be set in your EmailJS template dashboard
      // Template variables should match what you have in your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        timeline: formData.timeline,
        budgetRange: formData.budgetRange,
        message: formData.message,
        referral: formData.referral,
      };

      console.log('Sending email with params:', { serviceId, templateId, templateParams });

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        company: '',
        projectType: '', 
        timeline: '',
        budgetRange: '', 
        message: '',
        referral: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error: any) {
      console.error('EmailJS error:', error);
      console.error('Error status:', error?.status);
      console.error('Error text:', error?.text);
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to send message. Please try again.';
      if (error?.status === 422) {
        if (error?.text?.includes('recipients address')) {
          errorMessage = 'EmailJS Template Error: The "To" field in your EmailJS template is empty. Please go to your EmailJS dashboard and set the recipient email in the template settings.';
        } else {
          errorMessage = 'Email template configuration error. Please check your EmailJS template settings.';
        }
      } else if (error?.status === 400) {
        errorMessage = 'Invalid email configuration. Please check your EmailJS service and template IDs.';
      } else if (error?.status === 401) {
        errorMessage = 'EmailJS authentication failed. Please check your public key.';
      }
      
      console.error('Error details:', errorMessage);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--theme-surface)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">
              Or Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Company Name <span className="text-[var(--theme-text-secondary)] text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  What type of security help do you need?
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                >
                  <option value="">Select a project type...</option>
                  <option value="Security Audit / Compliance">Security Audit / Compliance</option>
                  <option value="IAM / Access Control Architecture">IAM / Access Control Architecture</option>
                  <option value="Security Automation / Tooling">Security Automation / Tooling</option>
                  <option value="Incident Response / Forensics">Incident Response / Forensics</option>
                  <option value="AI/ML Security">AI/ML Security</option>
                  <option value="Security Retainer / Ongoing Support">Security Retainer / Ongoing Support</option>
                  <option value="Not sure / Multiple areas">Not sure / Multiple areas</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  What&apos;s your timeline?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                >
                  <option value="">Select timeline...</option>
                  <option value="Urgent (this week)">Urgent (this week)</option>
                  <option value="Soon (next 2-4 weeks)">Soon (next 2-4 weeks)</option>
                  <option value="Planning ahead (next quarter)">Planning ahead (next quarter)</option>
                  <option value="Just exploring options">Just exploring options</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Budget Range <span className="text-[var(--theme-text-secondary)] text-xs">(helps me recommend the right approach)</span>
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                >
                  <option value="">Select budget range...</option>
                  <option value="Under $1,000 (advisory/mentorship only)">Under $1,000 (advisory/mentorship only)</option>
                  <option value="$1,000 - $5,000 (rapid reviews)">$1,000 - $5,000 (rapid reviews)</option>
                  <option value="$5,000 - $15,000 (smaller projects)">$5,000 - $15,000 (smaller projects)</option>
                  <option value="$15,000 - $30,000 (standard projects)">$15,000 - $30,000 (standard projects)</option>
                  <option value="$30,000 - $50,000 (comprehensive projects)">$30,000 - $50,000 (comprehensive projects)</option>
                  <option value="$50,000+ (enterprise engagements)">$50,000+ (enterprise engagements)</option>
                  <option value="Monthly retainer ($3.5K - $12K/month)">Monthly retainer ($3.5K - $12K/month)</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Tell me about your security challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Example: We're preparing for SOC 2 audit in 3 months and need help with security controls and documentation..."
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="referral"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  How did you find me?
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
                >
                  <option value="">Select an option...</option>
                  <option value="Google search">Google search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Referral">Referral from: [text input]</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'idle' ? 1.05 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.95 : 1 }}
                className="w-full px-6 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Sent!</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    <span>Error - Try Again</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message — I&apos;ll Respond Within 24 Hours</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/TheWinterShadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[var(--theme-surface)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors group"
                >
                  <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg group-hover:bg-[var(--theme-primary)]/30 transition-colors">
                    <Github size={24} className="text-[var(--theme-primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--theme-text)]">GitHub</div>
                    <div className="text-sm text-[var(--theme-text-secondary)]">
                      @TheWinterShadow
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/elijah-winter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[var(--theme-surface)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors group"
                >
                  <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg group-hover:bg-[var(--theme-primary)]/30 transition-colors">
                    <Linkedin size={24} className="text-[var(--theme-primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--theme-text)]">LinkedIn</div>
                    <div className="text-sm text-[var(--theme-text-secondary)]">
                      Connect professionally
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:contact@thewintershadow.com"
                  className="flex items-center gap-4 p-4 bg-[var(--theme-surface)] rounded-lg hover:bg-[var(--theme-primary)]/10 transition-colors group"
                >
                  <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg group-hover:bg-[var(--theme-primary)]/30 transition-colors">
                    <Mail size={24} className="text-[var(--theme-primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--theme-text)]">Email</div>
                    <div className="text-sm text-[var(--theme-text-secondary)]">
                      contact@thewintershadow.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                Availability
              </h3>
              <p className="text-[var(--theme-text-secondary)] mb-4">
                I&apos;m currently available for:
              </p>
              <ul className="space-y-2">
                {['Security consulting projects', 'Infrastructure automation', 'Custom tool development', 'Open source collaborations'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-[var(--theme-text-secondary)]">
                      <CheckCircle size={16} className="text-[var(--theme-primary)]" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

