"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import FooterLogoComponent from '@/components/sections/layouts/footer/FooterLogoComponent';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" required />
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" required />
      <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2" required></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-[#F7F9FF] py-16">
        <SimpleHero title="Welcome to Your Brand" description="Delivering quality and trust to our customers." primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-gradient-to-b from-white to-[#F7F9FF] py-16">
        <MinimalAbout description="We are dedicated to providing outstanding services and products that create value for our customers." />
      </section>
      <section id="features" className="bg-pattern py-16">
        <SimpleKPIBento items={[{ value: '100+', description: 'Happy Customers' }, { value: '95%', description: 'Satisfaction Rate' }, { value: '10', description: 'Years of Experience' }]} className="max-w-7xl" />
      </section>
      <section id="testimonials" className="bg-white py-16">
        <SimpleStepsBento items={[{ title: 'Great Service', description: 'Best experience ever!' }, { title: 'Reliable', description: 'I can trust them.' }]} className="max-w-7xl" />
      </section>
      <section id="terms" className="bg-[#FBFBFD] py-16">
        <ContentTextbox title={<h2>Terms and Conditions</h2>} description={<p>We value transparency. <a href="#" className="text-blue-600">Read full terms here.</a></p>} className="max-w-7xl" > {/* Added children prop with a placeholder */} </ContentTextbox>
      </section>
      <section id="privacy" className="bg-[#FCFCFE] py-16">
        <ContentTextbox title={<h2>Privacy Policy</h2>} description={<p>Your data is safe with us. <a href="#" className="text-blue-600">Read full policy here.</a></p>} className="max-w-7xl" > {/* Added children prop with a placeholder */} </ContentTextbox>
      </section>
      <section id="contact" className="bg-white py-16">
        <h2 className="text-center text-2xl font-bold">Contact Us</h2>
        <ContactForm />
      </section>
      <FooterLogoComponent logoSrc="/images/logo.svg" logoAlt="Logo" logoText="@YourBrand" className="text-center py-4" />
    </SiteThemeProvider>
  );
}
