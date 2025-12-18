"use client";

import { useEffect } from "react";

export default function BusinessStartupClient() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hero */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/business-startup-hero.png"
            alt="Business and startup financial services"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        <div className="p-8 md:p-12 space-y-10">

          {/* Breadcrumb — Option A */}
          <section className="fade-section">
            <a
              href="/services"
              className="text-sm font-semibold text-[#2d459c]"
            >
              All Financial Services
            </a>
            <span className="mx-2 text-gray-400">→</span>
            <span className="text-sm font-semibold text-[#2d459c]">
              Business &amp; Startup Services
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              Business &amp; Startup Services
            </h1>
          </section>
    

          <section className="fade-section">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                At <strong>1st Call UK Financial Services</strong>, we specialise in supporting
                startups, entrepreneurs, and growing businesses with clear, reliable, and forward-thinking
                financial guidance. Launching and running a business involves complex financial decisions,
                and having the right professional support from the outset can make a decisive difference
                to long-term success.
              </p>

              <p>
                Whether you are at the idea stage, preparing to trade, or scaling an established operation,
                our business and startup services are designed to provide structure, compliance, and
                strategic insight at every phase of your journey.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Supporting Your Business from Day One
              </h2>

              <p>
                Starting a business requires more than registration paperwork. Decisions around legal
                structure, tax efficiency, accounting systems, and cash-flow management all have lasting
                implications. Our advisers work closely with you to ensure your business is set up on a
                strong financial foundation from the beginning.
              </p>

              <p>
                We take time to understand your business model, industry, and growth ambitions before
                providing tailored advice that aligns with both short-term needs and long-term objectives.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Company Formation &amp; Structure
              </h2>

              <p>
                Choosing the right business structure is critical. Sole trader, partnership, or limited
                company — each option has different tax, liability, and reporting implications. We guide
                you through these choices and handle company formation, registrations, and statutory
                requirements efficiently and accurately.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Company incorporation and registrations</li>
                <li>HMRC and tax authority setup</li>
                <li>Advice on optimal business structure</li>
                <li>Director and shareholder guidance</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Financial Planning &amp; Cash-Flow Management
              </h2>

              <p>
                Effective cash-flow management is one of the biggest challenges facing new businesses.
                We help you plan, forecast, and monitor cash-flow so you can make informed decisions,
                meet obligations on time, and avoid unnecessary financial pressure.
              </p>

              <p>
                Our financial planning services provide clarity on budgets, projected income, costs,
                and funding requirements — enabling you to grow with confidence.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Accounting Systems &amp; Digital Setup
              </h2>

              <p>
                Modern businesses benefit from efficient, cloud-based accounting systems. As digital
                accounting specialists, we help startups implement and optimise platforms such as Xero,
                ensuring accurate record-keeping, real-time insights, and compliance with Making Tax Digital
                requirements.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Why Choose 1st Call UK Financial Services?
              </h2>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Startup Expertise:</strong> Practical experience supporting new and growing
                  businesses across diverse sectors.
                </li>
                <li>
                  <strong>Tailored Advice:</strong> Bespoke guidance aligned to your business goals.
                </li>
                <li>
                  <strong>Clear Communication:</strong> Straightforward explanations without jargon.
                </li>
                <li>
                  <strong>Digital-First Approach:</strong> Efficient systems that scale with your business.
                </li>
                <li>
                  <strong>Long-Term Partnership:</strong> Ongoing support as your business evolves.
                </li>
              </ul>

              <p>
                From startup planning to sustainable growth, our team is committed to helping you build
                a financially resilient business with clarity and confidence.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
