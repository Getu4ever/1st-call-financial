import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d459c] text-white py-14 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">

        {/* Column 1 — Logo & Help */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a
            href="https://www.accaglobal.com/gb/en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/acca-logo02.png"
              alt="ACCA qualified accountants and financial professionals"
              width={200}
              height={200}
              className="w-28 h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
            />
          </a>

          <h3 className="text-xl font-bold">We Can Help</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            At 1st Call UK Financial Services, your success is our priority and
            supporting your financial journey is at the heart of what we do.
            <br /><br />
            We provide clear, reliable, and expert accounting and financial
            advice. Whatever your tax, bookkeeping, payroll, or business
            accounting needs, we are here to help.
          </p>

          <a
            href="/services"
            className="mt-2 inline-block text-sm font-semibold underline hover:text-white transition"
          >
            View All Financial Services →
          </a>

          <p className="text-gray-400 text-xs mt-4">
            Website by –{" "}
            <a
              href="https://www.karoldigital.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              Karol Digital
            </a>
          </p>
        </div>

        {/* Column 2 — Advantages */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Advantages</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            {[
              "Free initial financial consultation",
              "Secure online and Microsoft Teams meetings available",
              "Clients confidently refer us to friends and family",
              "Transparent, affordable, and high-quality service",
              "Family-owned and professionally run practice",
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span style={{ color: "#ffffff", marginRight: "0.5rem" }}>✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="text-gray-300 text-sm mb-3">
              Visit our sister companies:
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://1stcalluk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md shadow-md hover:bg-gray-100 transition text-sm flex items-center gap-2"
              >
                Immigration Services
              </a>

              <a
                href="/1stcalluk-group"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md shadow-md hover:bg-gray-100 transition text-sm flex items-center gap-2"
              >
                1st CallUK Group
              </a>
            </div>
          </div>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="/legal/consumer-contracts-regulations-2013" className="hover:underline">Consumer Contracts Regulations 2013</a></li>
            <li><a href="/legal/disclaimer" className="hover:underline">Disclaimer</a></li>
            <li><a href="/legal/gdpr-data-privacy-notice" className="hover:underline">GDPR Data Privacy Notice</a></li>
            <li><a href="/legal/cookie-policy" className="hover:underline">Cookie Policy</a></li>
            <li><a href="/legal/terms-of-website-use" className="hover:underline">Terms of Website Use</a></li>
          </ul>
        </div>

        {/* Column 4 — Contact + Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            📍 The Old Coach House, 25 Noel Street,<br />
            Forest Fields, Nottingham NG7 6AQ
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="mailto:info@1stcalluk.financial"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ✉ Email
            </a>
            <a
              href="tel:+441158453325"
              className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-md hover:bg-gray-100 flex items-center justify-center transition"
            >
              ☎ Call
            </a>
          </div>

          {/* ✅ IDENTICAL SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61581341324421"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white text-[#2d459c] hover:bg-[#2d459c] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.92c-1.506 0-1.797.717-1.797 1.77v2.324h3.592l-.468 3.696h-3.124V24h6.125C23.405 24 24 23.404 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/lamin-fatty-fcca-msc-phd-candidate-694ba724/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-white text-[#2d459c] hover:bg-[#2d459c] hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.959 20.452H3.714V9h3.245v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
