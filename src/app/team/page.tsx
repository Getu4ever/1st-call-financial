"use client";

import { useEffect } from "react";

export default function TeamPage() {
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
            src="/financial-services-team03.jpg"
            alt="Our Team"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        <div className="p-8 md:p-12 space-y-12">

          {/* Our People */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              Our People
            </h1>

            <p className="text-gray-700 leading-relaxed">
              At 1st Call UK Financial Services, our people are at the centre of everything we do.
              We are a modern, digitally focused accountancy practice built around professional
              expertise, clear communication, and long-term client relationships.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Our leadership team combines extensive technical knowledge with hands-on experience
              across accounting, tax, compliance, and practice management, ensuring clients receive
              accurate, practical, and commercially focused advice.
            </p>
          </section>

          {/* Leadership Team (Summary Only) */}
          <section className="fade-section bg-[#f8f9ff] border border-[#e2e6ff] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-6 text-center">
              Leadership Team
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-[#2d459c]">
                  James Ramowski
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Practice Manager
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-[#2d459c]">
                  Rosie Ramowski
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Director
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-[#2d459c]">
                  S. Demba
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Director (MSc / AAT)
                </p>
              </div>
            </div>
          </section>

          {/* Senior Accountant */}
          <section className="fade-section bg-[#f8f9ff] border border-[#e2e6ff] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* LEFT – Text */}
              <div>
                <h2 className="text-2xl font-semibold text-[#2d459c] mb-4">
                  Lamin Fatty FCCA, MSc
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Lamin Fatty is a Senior Accountant at 1st Call UK Financial Services and a
                  Chartered Certified Accountant with over 15 years of professional experience
                  across private practice, the public sector, and large financial institutions.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  His career includes senior roles within UK accountancy practices, particularly
                  in London, where he worked as an Audit Manager, Senior Accountant, and Tax Adviser,
                  supporting a wide range of businesses and organisations.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Alongside his role at 1st Call UK Financial Services, Lamin works with HSBC Bank
                  as a Senior Anti-Money Laundering specialist and previously held the position of
                  Financial Manager at the Civil Aviation Authority.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  He leads the firm’s accounting, tax, payroll, and compliance services, working
                  closely with a skilled team of accountants and administrators to ensure clients
                  receive accurate, timely, and compliant support.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Lamin is a strong advocate of digital accounting and works extensively with
                  cloud-based systems, particularly Xero, while also supporting clients who use
                  Sage and QuickBooks.
                </p>
              </div>

              {/* RIGHT – Image + Name */}
              <div className="flex flex-col items-center">
                <div className="w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg bg-white">
                  <img
                    src="/lamin-fatty.jpg"
                    alt="Lamin Fatty"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="font-semibold text-[#2d459c]">
                    Lamin Fatty FCCA, MSc
                  </p>
                  <p className="text-sm text-gray-600">
                    Senior Accountant &amp; Managing Director
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* CTA */}
          <section className="fade-section text-center">
            <p className="text-gray-700">
              Please{" "}
              <a
                href="/contact"
                className="text-[#2d459c] font-semibold hover:underline"
              >
                contact us
              </a>{" "}
              to arrange an appointment.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
