"use client";

import { useEffect } from "react";

export default function HMRCInvestigationsClient() {
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
            src="/hmrc-investigation-hero.png"
            alt="HMRC investigations and tax enquiry support"
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
              HMRC Investigations &amp; Enquiries
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              HMRC Investigations &amp; Enquiries
            </h1>
          </section>

          <section className="fade-section">
            <div className="text-gray-700 leading-relaxed space-y-6">

              <p className="text-lg">
                An enquiry or investigation from <strong>HM Revenue &amp; Customs (HMRC)</strong> can be
                a stressful and disruptive experience for individuals and businesses alike. At{" "}
                <strong>1st Call UK Financial Services</strong>, we provide calm, professional, and
                strategic support to help you navigate HMRC investigations with confidence and clarity.
              </p>

              <p>
                Whether you have received a routine compliance check, a full tax investigation, or
                correspondence requesting clarification of your financial affairs, early expert advice
                is essential. Our experienced advisers act as your representative, managing communication
                with HMRC and protecting your interests throughout the process.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                What Is an HMRC Investigation?
              </h2>

              <p>
                HMRC investigations and enquiries are formal reviews of your tax affairs to ensure that
                returns, declarations, and financial records are accurate and compliant with UK tax law.
                These investigations may arise randomly, due to discrepancies, or as part of targeted
                compliance initiatives.
              </p>

              <p>
                Investigations can relate to income tax, corporation tax, VAT, PAYE, capital gains tax,
                or other obligations. They may focus on a single issue or extend to a comprehensive review
                of multiple tax years.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Our HMRC Investigation Support
              </h2>

              <p>
                We provide structured and professional support at every stage of an HMRC enquiry. Our
                role is to ensure that requests are handled correctly, responses are accurate, and your
                position is presented clearly and professionally.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Review and assessment of HMRC correspondence</li>
                <li>Representation in all communications with HMRC</li>
                <li>Preparation and submission of requested documentation</li>
                <li>Clarification of tax positions and accounting treatment</li>
                <li>Negotiation and resolution support</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Reducing Risk and Exposure
              </h2>

              <p>
                HMRC investigations can result in additional tax liabilities, penalties, and interest if
                issues are not handled correctly. Our advisers focus on mitigating risk by ensuring that
                disclosures are accurate, proportionate, and supported by appropriate evidence.
              </p>

              <p>
                Where historical issues are identified, we provide guidance on voluntary disclosure,
                corrective action, and negotiation strategies designed to achieve the most favourable
                outcome possible.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Why Choose 1st Call UK Financial Services?
              </h2>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Experienced Representation:</strong> Proven experience handling HMRC enquiries
                  across multiple tax areas.
                </li>
                <li>
                  <strong>Clear Communication:</strong> Straightforward explanations and transparent advice
                  throughout the process.
                </li>
                <li>
                  <strong>Professional Advocacy:</strong> We act as your point of contact with HMRC,
                  reducing stress and disruption.
                </li>
                <li>
                  <strong>Compliance-Focused:</strong> Accurate reporting aligned with current UK tax
                  legislation.
                </li>
                <li>
                  <strong>Confidential &amp; Ethical:</strong> Your financial information handled with
                  discretion and integrity.
                </li>
              </ul>

              <p>
                Facing an HMRC investigation does not mean you have done something wrong — but it does
                mean that professional support is essential. Our team is committed to guiding you through
                the process efficiently, responsibly, and with confidence.
              </p>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
