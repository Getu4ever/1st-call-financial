"use client";

import { useEffect } from "react";

export default function InheritanceTaxPlanningClient() {
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
            src="/inheritance-tax-hero.png"
            alt="Inheritance tax planning and wealth protection"
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
              Inheritance Tax Planning
            </span>
          </section>

          {/* Page Title */}
          <section className="fade-section text-center">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              Inheritance Tax Planning
            </h1>
          </section>
    

          <section className="fade-section">
            <div className="text-gray-700 leading-relaxed space-y-6">

              <p className="text-lg">
                Inheritance Tax (IHT) planning is one of the most important steps individuals and families
                can take to protect wealth and ensure that more of what you have built is passed on to the
                people you care about. At <strong>1st Call UK Financial Services</strong>, we provide clear,
                compliant, and practical guidance to help you understand your options and take confident
                action—without unnecessary complexity.
              </p>

              <p>
                IHT rules can be complicated and are often misunderstood. Many people only consider IHT
                after a major life change—retirement, a property purchase, a business sale, or the loss of
                a loved one. The most effective planning, however, is done early and reviewed regularly.
                With careful structuring, accurate records, and proactive advice, it may be possible to
                reduce exposure to inheritance tax while staying fully compliant with UK legislation.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                What Is Inheritance Tax?
              </h2>

              <p>
                Inheritance Tax is a tax that may be charged on the value of an estate when a person dies.
                The estate includes property, savings, investments, business interests, and other assets,
                minus eligible liabilities. Depending on circumstances, inheritance tax can also be relevant
                during a person’s lifetime—particularly in relation to gifts, trusts, and transfers of assets.
              </p>

              <p>
                The rules, allowances, and reliefs can vary based on marital status, asset types, whether
                property is passed to direct descendants, and how ownership is structured. As a result,
                effective planning requires a full understanding of your financial position and your future
                intentions.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Our Approach to IHT Planning
              </h2>

              <p>
                Our inheritance tax planning approach combines technical accuracy with real-world practicality.
                We start by understanding the full picture: your assets, family structure, business interests,
                property ownership, existing wills, and any previous planning. From there, we help you identify
                opportunities to strengthen your estate plan and reduce avoidable tax exposure.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Review of your current estate position and potential IHT exposure</li>
                <li>Structured planning aligned with your personal goals and family arrangements</li>
                <li>Guidance on gifting, record keeping, and documentation</li>
                <li>Support with tax reporting requirements where applicable</li>
                <li>Practical next steps you can implement with confidence</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Lifetime Gifting and Practical Planning
              </h2>

              <p>
                Lifetime gifts can be a powerful estate planning tool when done correctly. However, gifting
                strategies must be assessed carefully, taking into account affordability, family circumstances,
                documentation, and applicable rules. We help you understand how gifting may affect your estate
                and how to structure gifts in a responsible and compliant way.
              </p>

              <p>
                We also advise on maintaining clear records to support your intentions and reduce ambiguity.
                Good documentation is essential, particularly when gifts are made over time or where multiple
                beneficiaries are involved.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Property and Family Wealth Considerations
              </h2>

              <p>
                Property is often the largest asset within an estate, and family homes can significantly
                affect inheritance tax exposure. We help clients assess property ownership structures,
                future intentions, and the interaction between property wealth and wider estate planning.
                This includes considerations for landlords, families with multiple properties, and clients
                who hold property through different ownership arrangements.
              </p>

              <p>
                Where relevant, we help you plan in a way that supports long-term family stability and
                reduces the risk of future disputes, misunderstandings, or unexpected financial pressure
                on beneficiaries.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Business Owners and Complex Estates
              </h2>

              <p>
                If you own a business, estate planning may involve additional complexity—particularly where
                the business is a major part of your wealth or is intended to continue across generations.
                We work with business owners to explore practical planning strategies that align with succession
                aims and the realities of operating a business.
              </p>

              <p>
                We also support clients with more complex estates, such as those with multiple income sources,
                international assets, or layered ownership structures. Our focus remains the same: clarity,
                compliance, and an approach tailored to your goals.
              </p>

              <h2 className="text-2xl font-bold text-[#2d459c] mt-8">
                Why Choose 1st Call UK Financial Services?
              </h2>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Professional expertise:</strong> Qualified advisers providing technically accurate,
                  compliant guidance.
                </li>
                <li>
                  <strong>Clear communication:</strong> Practical advice explained in plain English—no jargon,
                  no confusion.
                </li>
                <li>
                  <strong>Tailored planning:</strong> Your family, assets, and goals are unique—your plan should be too.
                </li>
                <li>
                  <strong>Forward-focused approach:</strong> Planning designed to support long-term family security and stability.
                </li>
                <li>
                  <strong>Trusted partnership:</strong> We help you review and adapt your plan as circumstances change.
                </li>
              </ul>

              <p>
                Inheritance tax planning is ultimately about peace of mind—knowing your affairs are structured
                thoughtfully and that your loved ones are protected from unnecessary complexity. If you are
                considering estate planning, gifting, or reviewing an existing strategy, our team is ready to
                support you with professional, responsible advice.
              </p>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
