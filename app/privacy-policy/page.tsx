import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-cormorant font-bold mb-6">Privacy Policy</h1>
          <div className="divider-gold-left"></div>

          <div className="prose prose-lg dark:prose-invert mt-8">
            <p>
              At Thakker & Associates, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your
              information when you visit our website or engage our legal services.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Information We Collect</h2>

            <p>We may collect personal information that you voluntarily provide to us when you:</p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact us through our website</li>
              <li>Schedule a consultation</li>
              <li>Retain our legal services</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>

            <p className="mt-4">The types of information we may collect include:</p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name, address, email address, and phone number</li>
              <li>Date of birth and social security number (when necessary for legal services)</li>
              <li>Financial information (when necessary for billing purposes)</li>
              <li>Information related to your legal matter</li>
            </ul>

            <p className="mt-4">
              We may also automatically collect certain information when you visit our website, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or source</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">How We Use Your Information</h2>

            <p>We may use the information we collect for various purposes, including:</p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Providing legal services and client support</li>
              <li>Communicating with you about your legal matter</li>
              <li>Processing payments and managing billing</li>
              <li>Sending newsletters, updates, and marketing communications</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>

            <p>
              We respect your privacy and are committed to maintaining the confidentiality of your information. We do
              not sell, trade, or otherwise transfer your personal information to third parties without your consent,
              except as described below:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Service providers who assist us in operating our website, conducting our business, or providing services
                to you
              </li>
              <li>Legal and regulatory authorities when required by law or to protect our rights</li>
              <li>
                Professional advisors, such as auditors, accountants, or co-counsel, when necessary for our operations
                or legal services
              </li>
            </ul>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Data Security</h2>

            <p>
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Your Rights and Choices</h2>

            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent for processing your information</li>
              <li>Opting out of marketing communications</li>
              <li>Requesting a copy of your personal information</li>
            </ul>

            <p className="mt-4">
              To exercise these rights or if you have any questions about our privacy practices, please contact us using
              the information provided below.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the updated Privacy Policy on our
              website with a new effective date.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Contact Us</h2>

            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at:
            </p>

            <p className="mt-4">
              Thakker & Associates
              <br />
              Kaveri Complex, Nawapara
              <br />
              Bhavnagar, Gujarat-364001
              <br />
              Email: infojtlaw@gmail.com
            </p>

            <p className="mt-8">Last Updated: April 10, 2025</p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild className="bg-gold hover:bg-gold/90 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
