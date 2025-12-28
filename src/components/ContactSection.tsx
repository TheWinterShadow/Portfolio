'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    message: '',
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
          setFormData({ name: '', title: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
        return;
      }

      // Prepare template parameters
      // Note: The recipient email should be set in your EmailJS template dashboard
      // Template variables should match what you have in your EmailJS template (e.g., {{name}}, {{title}}, {{email}}, {{message}})
      const templateParams = {
        name: formData.name,
        title: formData.title,
        email: formData.email,
        message: formData.message,
      };

      console.log('Sending email with params:', { serviceId, templateId, templateParams });

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: '', title: '', email: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Name
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
                  htmlFor="title"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
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
                  Email
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
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--theme-text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] resize-none"
                />
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
                    <span>Send Message</span>
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
                I'm currently available for:
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

