"use client";
import { useEffect } from "react";

export default function DocumentManagementPage() {
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
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hero Section */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/dms-hero02.png"
            alt="Secure financial document management"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">

          {/* Main Heading */}
          <section className="fade-section">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4 text-center">
              Secure Document Management
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
              Managing sensitive financial and business documents requires
              accuracy, confidentiality, and robust controls. At{" "}
              <strong>1st Call UK Financial Services</strong>, we provide a secure
              document management system designed to support compliance,
              transparency, and efficient financial administration.
            </p>
          </section>

          {/* What We Offer */}
          <section className="fade-section space-y-6">
            <h2 className="text-2xl font-semibold text-[#2d459c]">
              What We Offer
            </h2>

            <p className="text-gray-700 leading-relaxed">
              From accounting records and tax filings to payroll reports and
              statutory documentation, our document management solutions ensure
              your financial information is organised, secure, and readily
              accessible when required.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Secure Financial File Storage</strong> – Encrypted digital
                storage for sensitive financial, tax, and payroll records.
              </li>
              <li>
                <strong>Rapid Document Retrieval</strong> – Structured indexing
                ensures fast access to reports, returns, and historical records.
              </li>
              <li>
                <strong>Client Access</strong> – Secure delivery of key documents,
                accounts, and reports when needed.
              </li>
              <li>
                <strong>GDPR & Compliance Ready</strong> – Fully aligned with data
                protection regulations and professional standards.
              </li>
              <li>
                <strong>Paper-to-Digital Conversion</strong> – Secure scanning and
                digitisation of physical financial documents.
              </li>
            </ul>
          </section>

          {/* Extended Section + Image */}
          <section className="fade-section">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Left – Expanded text */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our digital document environment allows clients to remain fully
                  informed and in control of their financial information.
                  Whether uploading invoices, reviewing tax computations, or
                  accessing payroll reports, our structured workflow ensures
                  accuracy and consistency across all records.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We maintain comprehensive audit trails for all documents,
                  ensuring transparency and accountability. Every file is
                  categorised, time-stamped, and securely stored, supporting
                  regulatory compliance and efficient financial management.
                </p>
              </div>

              {/* Right – Supporting image */}
              <div className="flex justify-center">
                <img
                  src="/dms-body02.png"
                  alt="Digital financial document processing"
                  className="rounded-lg shadow-md w-64 md:w-72 lg:w-80 object-contain"
                />
              </div>

            </div>
          </section>

          {/* Why It Matters */}
          <section className="fade-section space-y-6">
            <h2 className="text-2xl font-semibold text-[#2d459c]">
              Why Document Management Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In financial reporting and tax compliance, accuracy and
              organisation are critical. Missing, outdated, or incorrect
              documents can lead to delays, penalties, or unnecessary risk.
              Our document management system ensures your records are complete,
              current, and ready for review at any time.
            </p>
          </section>

          {/* Closing CTA */}
          <section className="fade-section text-center mt-12">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-4">
              Let Us Manage Your Financial Records
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Whether you require support with accounting records, tax filings,
              payroll documentation, or compliance reporting, our team ensures
              your documents are handled securely and professionally from start
              to finish.
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
            >
              Contact Our Team
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
