import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hometown Communities",
  description: "Read Hometown Communities' privacy policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Hometown Communities",
    description: "Our commitment to protecting your privacy.",
  },
  alternates: {
    canonical: "https://hometowncommunities.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-xl text-blue-100">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              Hometown Communities (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and mailing address when you submit forms or applications.</li>
              <li><strong>Application Information:</strong> Employment history, income verification, and references when applying for residency.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Process residency applications and manage your account</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you important notices about your residency</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies to enhance your browsing experience. Comment-related cookies
              persist for one year. Login cookies last two days, with &quot;Remember Me&quot; extending to
              two weeks. You can configure your browser to refuse cookies, though some features may
              not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Sharing</h2>
            <p className="text-gray-600 mb-6">
              <strong>We do not share or sell your data.</strong> Your personal information is kept
              confidential and is only used for the purposes outlined in this policy. We may share
              information with service providers who assist in our operations, but they are bound by
              confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal data for as long as necessary to fulfill the purposes outlined
              in this privacy policy. Website activity data is typically maintained for 90 days.
              Residency-related records are retained as required by law and our business practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Transfers</h2>
            <p className="text-gray-600 mb-6">
              <strong>We do not send data to any third parties</strong> except as necessary to
              process applications (e.g., background check services) or as required by law. Any
              third-party services we use are vetted for their privacy and security practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request removal of your information from our database</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Users may request removal of their information from the database at any time</strong>
              by contacting us at privacy@hometowncommunities.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your
              personal information. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700">
                <strong>Hometown Communities</strong><br />
                Email: privacy@hometowncommunities.com<br />
                <Link href="/contact" className="text-primary-dark hover:underline">
                  Contact Form
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
