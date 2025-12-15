'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactIdeasCTA from '@/components/contact/ContactIdeasCTA';
import ContactFAQ from '@/components/contact/ContactFAQ';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Ideas CTA Section */}
      <ContactIdeasCTA />

      {/* FAQ Section */}
      <ContactFAQ />

      <Footer />
    </div>
  );
}

