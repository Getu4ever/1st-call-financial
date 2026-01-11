import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Financial Services | 1st Call UK Financial Services",
  description:
    "Explore expert accounting, tax, payroll, HMRC investigation support and business advisory services from 1st Call UK Financial Services. Trusted, compliant, and tailored financial solutions across the UK.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-48 md:h-[55vh] overflow-hidden animate-fade-in">
        <Image
          src="/services-financial-hero.png"
          alt="Professional financial services and advisory solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2d459c]/85 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
            Our Financial Services
          </h1>
          <p className="text-white/90 max-w-3xl text-base md:text-xl">
            Comprehensive, compliant, and client-focused financial services designed to
            support individuals, businesses, and organisations across the UK.
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto text-gray-700 animate-fade-in">
        <h2 className="text-3xl font-bold text-[#2d459c] mb-6 text-center">
          Expert Financial Support, Built Around You
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          At <strong>1st Call UK Financial Services</strong>, we provide a full suite of professional
          accountancy and financial advisory services tailored to meet the evolving needs of
          individuals, contractors, landlords, and businesses throughout the United Kingdom.
        </p>

        <p className="leading-relaxed">
          Our approach combines technical expertise, regulatory compliance, and modern digital
          systems to deliver clear, reliable, and forward-thinking financial solutions.
          Whether you require ongoing accounting support, tax planning, payroll management,
          or representation during HMRC investigations, our experienced team is here to help.
        </p>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#2d459c] text-center mb-12">
            Our Core Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            <ServiceCard
              image="/audit-assurance-hero.png"
              title="Audit & Assurance"
              description="Independent assurance services that enhance financial credibility, compliance, and transparency."
              link="/services/audit-and-assurance"
            />

            <ServiceCard
              image="/business-startup-hero.png"
              title="Business Startup"
              description="Professional guidance to help new businesses establish strong financial foundations and remain compliant from day one."
              link="/services/business-startup"
            />

            <ServiceCard
              image="/hmrc-investigation-hero.png"
              title="HMRC Investigation"
              description="Expert representation and support during HMRC enquiries, inspections, and compliance checks."
              link="/services/hmrc-investigation"
            />

            <ServiceCard
              image="/inheritance-tax-hero.png"
              title="Inheritance Tax Planning"
              description="Strategic estate and inheritance planning to protect assets and minimise tax liabilities."
              link="/services/inheritance-tax-planning"
            />

            <ServiceCard
              image="/lifestyle-services-hero.png"
              title="Lifestyle Services"
              description="Tailored financial services for individuals, professionals, and high-net-worth clients."
              link="/services/lifestyle-services"
            />

            <ServiceCard
              image="/payroll-hero.png"
              title="Payroll"
              description="Reliable, compliant payroll solutions for businesses of all sizes, including HMRC reporting and pensions."
              link="/services/payroll"
            />

          </div>
        </div>
      </section>

    </main>
  );
}

/* ===== Reusable Service Card ===== */
function ServiceCard({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      
      {/* Image */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={`${title} financial service`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold text-[#2d459c] mb-4">
          {title}
        </h4>
        <p className="text-gray-700 flex-grow">
          {description}
        </p>
        <Link
          href={link}
          className="mt-6 inline-block text-[#2d459c] font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
