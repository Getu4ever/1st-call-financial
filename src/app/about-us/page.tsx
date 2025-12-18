"use client";

import { useEffect } from "react";
import Image from "next/image";
const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-[#2d459c] text-white text-sm font-bold flex-shrink-0">
    ✓
  </span>
);


export default function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-block");
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

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-80 fade-block opacity-0">
          <Image
            src="/about-us-hero-image02.jpg"
            alt="1st Call UK Financial Services team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 text-gray-700 leading-relaxed space-y-6">

          <h1 className="text-3xl font-bold text-[#2d459c] text-center fade-block opacity-0">
            About Us — 1st Call UK Financial Services
          </h1>

          <p className="fade-block opacity-0">
            1st Call UK Financial Services is a dedicated, client-centric accountancy and financial advisory practice committed to delivering high-quality financial services to individuals, businesses, contractors, and self-employed professionals across the UK. We combine industry experience, professional qualifications, and a modern digital approach to help clients achieve clarity in their accounting, tax, and financial planning needs.
          </p>

          <p className="fade-block opacity-0">
            Established by seasoned professionals with deep expertise in accounting and taxation, our firm specialises in providing bespoke financial solutions tailored to the unique circumstances of each client. We draw on years of hands-on experience in the profession to deliver services that are both technically sound and strategically valuable.
          </p>

          <p className="fade-block opacity-0">
            At the heart of our firm is a belief that strong financial guidance enables long-term success. Whether you are a small business owner aiming to grow sustainably, a contractor seeking compliance with tax regulations, or a landlord managing property finances, 1st Call UK Financial Services is here to support you every step of the way.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Our Mission
          </h2>

          <p className="fade-block opacity-0">
            Our mission is straightforward: to provide accessible, reliable, and expert financial services that help our clients prosper in a complex financial landscape. We strive to demystify accounting and tax rules, enabling our clients to make confident decisions and focus on what matters most — their business or personal financial goals.
          </p>

          <p className="fade-block opacity-0">
            We combine professional rigour with a personal touch. Our advisers take the time to understand your situation, explain complex matters clearly, and deliver practical advice that adds real value. We believe that strong client relationships built on trust and transparency are the foundation of effective financial support.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Who We Are
          </h2>

          <p className="fade-block opacity-0">
            1st Call UK Financial Services is composed of qualified accountants and financial advisers with extensive experience in accounting, taxation, payroll, bookkeeping, and business advisory services. Our leadership team brings together professionals who are committed to excellence and ongoing learning in a profession where regulations and best practices are continually evolving.
          </p>

          <p className="fade-block opacity-0">
            Our team includes ACCA and AAT qualified accountants, bringing recognised professional standards and ethical practice to every engagement. These qualifications reflect a strong foundation in technical knowledge and professional competence, giving our clients confidence that their financial affairs are managed with skill and integrity.
          </p>

          <p className="fade-block opacity-0">
            We also understand that modern finance increasingly relies on digital tools and cloud platforms. As certified partners with leading accounting software providers such as Xero, we are well-placed to help our clients transition to efficient, cloud-based financial systems. This digital capability enhances accuracy, simplifies record keeping, and supports real-time financial insights.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Our Services
          </h2>

          <ul className="list-disc list-inside space-y-3 fade-block opacity-0">
            <li><strong>Accounting & Bookkeeping</strong> – We manage and maintain accurate financial records, ensuring compliance and clarity.</li>
            <li><strong>Tax Planning & Compliance</strong> – Proactive tax strategies and accurate HMRC submissions.</li>
            <li><strong>Payroll Services</strong> – Payroll administration, HMRC reporting, and regulatory compliance.</li>
            <li><strong>Business Advisory & Financial Strategy</strong> – Budgeting, forecasting, and performance insight.</li>
            <li><strong>Cloud Accounting & Software Implementation</strong> – Xero and digital accounting setup and training.</li>
            <li><strong>Making Tax Digital (MTD)</strong> – Ensuring full compliance with UK digital reporting requirements.</li>
          </ul>

         {/* ===== History & Expertise Section ===== */}
<section className="bg-[#dcdde0] py-20 px-6 md:px-10">
  <div className="max-w-6xl mx-auto">

    {/* Small heading */}
    <p className="text-sm uppercase tracking-widest text-[#2d459c] mb-3 text-center">
      Committed To Helping Our Clients Succeed
    </p>

    {/* Main heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d459c] mb-16 text-center">
      History &amp; Expertise
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* ===== Accountancy Training School ===== */}
      <div className="bg-white border border-[#2d459c]/20 rounded-2xl p-8 shadow-md h-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#2d459c] text-2xl">🎓</span>
          <h3 className="text-xl font-semibold text-[#2d459c]">
            Accountancy Training
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <strong>Kaplan Financial, UK</strong>
          <br />
          <span className="text-sm">
            Status:{" "}
            <span className="font-semibold text-[#2d459c]">
              Excellent – Top 5 of School
            </span>
          </span>
        </p>
      </div>

      {/* ===== Certificates ===== */}
      <div className="bg-white border border-[#2d459c]/20 rounded-2xl p-8 shadow-md h-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#2d459c] text-2xl">🏅</span>
          <h3 className="text-xl font-semibold text-[#2d459c]">
            Professional Certificates
          </h3>
        </div>

        <ul className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <li>
            <strong>ACCA Practising Certificate</strong>
            <br />
            <span className="font-semibold text-[#2d459c]">
              Good Standing
            </span>
          </li>

          <li>
            <strong>Practising Certificate – Gambia</strong>
            <br />
            <span className="font-semibold text-[#2d459c]">
              Good Standing
            </span>
          </li>
        </ul>
      </div>

      {/* ===== University Admissions ===== */}
      <div className="bg-white border border-[#2d459c]/20 rounded-2xl p-8 shadow-md h-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#2d459c] text-2xl">⚖️</span>
          <h3 className="text-xl font-semibold text-[#2d459c]">
            University Education
          </h3>
        </div>

        <p className="text-gray-700 leading-relaxed">
          <strong>University of London</strong>
          <br />
          <span className="text-sm">
            Leading UK Institution
          </span>
        </p>
      </div>

    </div>
  </div>
</section>



          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Why Choose 1st Call UK Financial Services
          </h2>

          <p className="fade-block opacity-0">
            Choosing the right financial service provider can significantly impact your long-term success. At 1st Call UK Financial Services, we distinguish ourselves through a combination of professional expertise, personalised service, and digital proficiency.
          </p>

         <h3 className="text-xl font-semibold text-[#2d459c] mt-6 fade-block opacity-0 flex items-center">
  <CheckIcon />
  Professional Qualifications</h3>
          <p className="fade-block opacity-0">
            Our team is comprised of highly qualified accountants and tax professionals. ACCA and AAT credentials ensure that our services meet recognised standards of excellence and ethical practice.
          </p>

          <h3 className="text-xl font-semibold text-[#2d459c] mt-6 fade-block opacity-0 flex items-center">
  <CheckIcon />
  Tailored Client Solutions
</h3>

          <p className="fade-block opacity-0">
            We do not believe in one-size-fits-all solutions. Every client’s financial situation is different, and we tailor our recommendations to reflect your needs, objectives, and risk profile.
          </p>

          <h3 className="text-xl font-semibold text-[#2d459c] mt-6 fade-block opacity-0 flex items-center">
  <CheckIcon />
  Clear Communication
</h3>

          <p className="fade-block opacity-0">
            Financial terminology can be complex, but our professionals specialise in breaking down complicated subjects into clear, actionable guidance. We communicate with transparency and ensure you understand the recommendations we make.
          </p>

          <h3 className="text-xl font-semibold text-[#2d459c] mt-6 fade-block opacity-0 flex items-center">
  <CheckIcon />
  Digital & Future-Focused
</h3>

          <p className="fade-block opacity-0">
            We embrace modern technology to streamline processes, enhance accuracy, and improve accessibility. Our digital accountancy solutions help you stay compliant and informed, with real-time data at your fingertips.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Our Values
          </h2>

          <ul className="list-disc list-inside space-y-2 fade-block opacity-0">
            <li><strong>Integrity:</strong> We uphold the highest ethical standards in all financial advice and reporting.</li>
            <li><strong>Excellence:</strong> We pursue continuous improvement in our technical knowledge and client services.</li>
            <li><strong>Responsiveness:</strong> We are proactive in addressing client needs and regulatory changes.</li>
            <li><strong>Partnership:</strong> We build long-term relationships based on trust and collaboration.</li>
            <li><strong>Innovation:</strong> We adopt modern accounting technologies that deliver efficiency and insight.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2d459c] fade-block opacity-0">
            Your Financial Success Starts Here
          </h2>

          <p className="fade-block opacity-0">
            Whether you are seeking compliance support, strategic financial planning, or streamlined accounting systems, 1st Call UK Financial Services is ready to help. Our commitment to personalised, expert financial advice sets us apart as a trusted partner in your financial journey.
          </p>

          <p className="font-semibold text-center text-[#2d459c] fade-block opacity-0">
            Contact us today to learn how we can support your goals and deliver the clarity and confidence you deserve.
          </p>

        </div>
      </div>
    </main>
  );
}
