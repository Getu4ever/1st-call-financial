"use client";

import { useEffect } from "react";

export default function LifestyleServicesClient() {
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
            src="/lifestyle-services-hero.png"
            alt="Lifestyle financial planning services"
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
              Lifestyle Services
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              Lifestyle Services
            </h1>
          </section>
        

          <section className="fade-section">
            <div className="text-gray-700 leading-relaxed space-y-6">

              <p className="text-lg">
                At <strong>1st Call UK Financial Services</strong>, our Lifestyle Services are designed to
                support individuals and families with the financial matters that shape their personal
                lives. Beyond business accounting, we recognise that personal financial planning,
                compliance, and tax efficiency play a vital role in long-term security, peace of mind,
                and lifestyle choices.
              </p>

              <p>
                Our lifestyle-focused financial services provide expert guidance across a range of
                personal financial matters, ensuring your affairs are managed efficiently, compliantly,
                and with careful consideration of your long-term goals.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Personal Tax Planning &amp; Compliance
              </h2>

              <p>
                Personal tax obligations can become increasingly complex, particularly where multiple
                income streams, property holdings, or international considerations are involved. Our
                advisers provide clear, proactive tax planning strategies designed to minimise liability
                while ensuring full compliance with UK tax regulations.
              </p>

              <p>
                We prepare and submit accurate self-assessment tax returns, manage correspondence with
                HMRC, and ensure deadlines are met — reducing stress and eliminating unnecessary risk.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                High-Net-Worth &amp; Complex Affairs
              </h2>

              <p>
                Individuals with complex financial arrangements require careful planning and discreet,
                expert oversight. We work closely with clients who have diverse assets, investment
                portfolios, property interests, or overseas income, delivering structured financial
                solutions aligned to both lifestyle and legacy objectives.
              </p>

              <p>
                Our approach balances technical accuracy with strategic insight, ensuring your financial
                position supports your personal priorities today while remaining resilient for the
                future.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Property &amp; Rental Income Support
              </h2>

              <p>
                For landlords and property investors, managing rental income and tax obligations can be
                time-consuming and complex. We provide comprehensive support for property-related
                accounting, expense tracking, and tax reporting, ensuring your property finances remain
                organised and compliant.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Rental income reporting</li>
                <li>Allowable expense guidance</li>
                <li>Capital gains planning</li>
                <li>Compliance with UK property tax rules</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Long-Term Financial Clarity
              </h2>

              <p>
                Lifestyle financial planning is not just about compliance — it is about clarity,
                structure, and confidence. We help clients understand their financial position clearly,
                plan responsibly, and make informed decisions that support their desired lifestyle both
                now and in the future.
              </p>

              <p>
                Our advisers take time to explain complex matters in plain language, ensuring you remain
                fully informed and in control of your financial affairs.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Why Choose 1st Call UK Financial Services?
              </h2>

              <ul className="list-disc list-inside space-y-3">
                <li><strong>Personalised Advice:</strong> Financial guidance tailored to your lifestyle and goals.</li>
                <li><strong>Confidential &amp; Discreet:</strong> Trusted handling of sensitive personal matters.</li>
                <li><strong>Clear Communication:</strong> Straightforward explanations without jargon.</li>
                <li><strong>Regulatory Confidence:</strong> Fully compliant, ethical, and professional service.</li>
                <li><strong>Long-Term Partnership:</strong> Ongoing support as your circumstances evolve.</li>
              </ul>

              <p>
                Whether you require personal tax support, assistance with property income, or structured
                financial oversight, our Lifestyle Services are designed to deliver clarity, compliance,
                and peace of mind.
              </p>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
