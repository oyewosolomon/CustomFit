'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HeroSection from "@/components/sections/Hero";
import AboutUs from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyCustomFit from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ProductSection from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home(): JSX.Element {
  const mainRef = useRef<HTMLElement>(null); // Use HTMLElement instead of HTMLMainElement

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Select all sections that you want to animate
      const sections = mainRef.current?.querySelectorAll<HTMLElement>('section');

      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50, // Start 50 pixels below its original position
            scale: 0.9 // Slightly smaller
          },
          {
            opacity: 1,
            y: 0, // Move to its original position
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%', // When the top of the section hits 80% of the viewport
              toggleActions: 'play none none reverse' // Animate on enter, reset on leave
            }
          }
        );
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={mainRef}>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <WhyCustomFit />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <ProductSection />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}