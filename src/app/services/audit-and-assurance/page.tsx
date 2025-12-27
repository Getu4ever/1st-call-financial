"use client";

import { useEffect } from "react";

export default function AuditAndAssuranceClient() {
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
            src="/audit-assurance-hero.png"
            alt="Audit and assurance financial services"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Content */}
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
              Audit &amp; Assurance
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c]">
              Audit &amp; Assurance
            </h1>
          </section>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-8 md:p-12 space-y-10">

          <section className="fade-section">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>1st Call UK Financial Services</strong>, our Audit & Assurance services are
              designed to provide clarity, transparency, and confidence in your financial reporting.
              In an increasingly regulated business environment, independent assurance is not merely
              a compliance requirement—it is a vital tool for strengthening governance, improving
              decision-making, and building trust with stakeholders.
            </p>
          </section>

          <section className="fade-section">
            <p className="text-gray-700 leading-relaxed">
              Our experienced professionals deliver rigorous, objective audit and assurance solutions
              tailored to the size, structure, and regulatory obligations of each client. Whether you
              are a growing enterprise, an established organisation, or a regulated entity, we ensure
              your financial information is accurate, compliant, and reliable.
            </p>
          </section>

          <section className="fade-section">
            <h2 className="text-2xl font-bold text-[#2d459c] mb-4">
              What Are Audit & Assurance Services?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Audit and assurance services involve the independent examination and evaluation of
              financial statements, systems, and controls to confirm their accuracy and compliance
              with applicable standards and regulations. While audits are often statutory requirements,
              assurance services extend beyond compliance, providing valuable insight into financial
              performance, risk management, and internal controls.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              At 1st Call UK Financial Services, we view audit and assurance not as a tick-box exercise,
              but as an opportunity to add strategic value to your organisation.
            </p>
          </section>

          <section className="fade-section bg-[#f8f9ff] border border-[#e2e6ff] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2d459c] mb-4">
              Our Audit & Assurance Approach
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our approach is built on professionalism, independence, and a deep understanding of UK
              financial and regulatory frameworks. We take the time to understand your business model,
              operational environment, and risk profile before designing an audit or assurance plan
              tailored to your needs.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We combine technical rigour with practical insight, ensuring that our findings are not
              only accurate but also meaningful and actionable.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
              <li>Thorough planning and risk assessment</li>
              <li>Clear communication throughout the engagement</li>
              <li>Minimal disruption to your operations</li>
              <li>Transparent reporting and practical recommendations</li>
            </ul>
          </section>

          <section className="fade-section">
            <h2 className="text-2xl font-bold text-[#2d459c] mb-4">
              Statutory Audits
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For organisations required to undergo statutory audits, we provide comprehensive audit
              services fully aligned with UK auditing standards and regulatory requirements. Our work
              provides confidence to directors, shareholders, lenders, and regulators.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our statutory audit services include examination of financial statements, assessment of
              accounting policies, review of internal controls, and verification of compliance with
              relevant legislation.
            </p>
          </section>

          <section className="fade-section">
            <h2 className="text-2xl font-bold text-[#2d459c] mb-4">
              Independent Assurance Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to statutory audits, we offer independent assurance services designed to
              enhance credibility and support informed decision-making. These include financial
              statement reviews, internal control assessments, governance reviews, and due diligence
              support.
            </p>
          </section>

          <section className="fade-section">
            <h2 className="text-2xl font-bold text-[#2d459c] mb-4">
              Why Choose 1st Call UK Financial Services?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Professional Expertise:</strong> Qualified accountants with extensive audit
                and assurance experience.
              </li>
              <li>
                <strong>Independence & Integrity:</strong> Objective, ethical, and fully compliant
                services.
              </li>
              <li>
                <strong>Clear Communication:</strong> Plain-English reporting and constructive
                recommendations.
              </li>
              <li>
                <strong>Tailored Service:</strong> Audit solutions aligned to your organisation’s size
                and objectives.
              </li>
              <li>
                <strong>Value Beyond Compliance:</strong> Insight that supports long-term financial
                resilience.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether you require a statutory audit or independent assurance, our team works closely
              with you to ensure compliance while delivering meaningful financial insight.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
