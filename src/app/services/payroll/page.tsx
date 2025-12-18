"use client";

import { useEffect } from "react";

export default function PayrollServicesClient() {
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
            src="/payroll-hero.png"
            alt="Payroll management and compliance services"
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
              Payroll Services
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              Payroll Services
            </h1>
          </section>
    
          <section className="fade-section">
            <div className="text-gray-700 leading-relaxed space-y-6">

              <p className="text-lg">
                At <strong>1st Call UK Financial Services</strong>, our Payroll Services are designed to
                remove the administrative burden and compliance risk associated with paying employees.
                Payroll is a critical function for every organisation, requiring accuracy, timeliness,
                and strict adherence to HMRC regulations.
              </p>

              <p>
                Whether you employ a single director or manage a growing workforce, our payroll
                specialists ensure your payroll is processed efficiently, confidentially, and in full
                compliance with UK employment and tax legislation.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Complete Payroll Management
              </h2>

              <p>
                We provide an end-to-end payroll service that covers all aspects of payroll processing.
                From calculating employee pay to submitting Real Time Information (RTI) to HMRC, we
                manage every stage accurately and on time.
              </p>

              <p>
                Our service ensures your employees are paid correctly, payslips are issued promptly,
                and statutory obligations are met without disruption to your business operations.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Weekly, fortnightly, and monthly payroll processing</li>
                <li>PAYE calculations and submissions</li>
                <li>Payslip generation and distribution</li>
                <li>HMRC RTI reporting</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Compliance &amp; Regulatory Confidence
              </h2>

              <p>
                Payroll compliance is constantly evolving, with frequent changes to tax rates,
                thresholds, and employment legislation. Our payroll professionals stay fully up to date
                with regulatory developments, ensuring your payroll remains compliant at all times.
              </p>

              <p>
                We manage statutory payments including sick pay, maternity pay, and other entitlements,
                reducing risk and protecting your organisation from penalties or errors.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Workplace Pensions &amp; Auto-Enrolment
              </h2>

              <p>
                Auto-enrolment duties add an additional layer of complexity to payroll. We support
                employers with pension assessments, employee enrolment, contributions, and ongoing
                reporting to pension providers.
              </p>

              <p>
                Our team ensures your pension obligations are fulfilled accurately while maintaining
                clear records and audit trails.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Director &amp; Owner-Managed Payroll
              </h2>

              <p>
                For directors and owner-managed businesses, payroll decisions directly impact tax
                efficiency. We provide guidance on salary structures, director remuneration, and
                compliance to ensure payroll aligns with your wider financial strategy.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Why Choose 1st Call UK Financial Services?
              </h2>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Accuracy &amp; Reliability:</strong> Precise payroll processing you can depend on.
                </li>
                <li>
                  <strong>Full Compliance:</strong> HMRC-aligned payroll with up-to-date legislation.
                </li>
                <li>
                  <strong>Confidential Handling:</strong> Secure management of sensitive payroll data.
                </li>
                <li>
                  <strong>Scalable Service:</strong> Payroll solutions that grow with your business.
                </li>
                <li>
                  <strong>Professional Support:</strong> Expert guidance whenever you need it.
                </li>
              </ul>

              <p>
                By outsourcing payroll to 1st Call UK Financial Services, you gain peace of mind,
                improved efficiency, and the confidence that your payroll obligations are handled
                professionally and accurately.
              </p>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
