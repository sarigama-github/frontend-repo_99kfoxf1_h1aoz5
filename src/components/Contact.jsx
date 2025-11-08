import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate success
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Request an Itinerary</h2>
            <p className="text-slate-600 mt-3 max-w-xl">
              Tell us your dates, preferred cruising grounds, and onboard preferences. Our concierge will reply discreetly within 24 hours.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-700" /> concierge@aureliyachts.eu</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-700" /> +33 1 84 80 12 90</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl ring-1 ring-slate-900/10">
            {sent ? (
              <div className="text-center py-16">
                <p className="text-2xl font-semibold text-emerald-800">Thank you.</p>
                <p className="text-slate-600 mt-2">Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full rounded-xl border-slate-300 focus:border-emerald-700 focus:ring-emerald-700"
                    placeholder="Dates, guests, preferences..."
                  />
                </div>
                <button type="submit" className="w-full rounded-full bg-emerald-700 text-white py-3 font-medium hover:bg-emerald-800">
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
