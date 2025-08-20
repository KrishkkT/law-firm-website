import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-cormorant font-bold mb-6">Terms of Service</h1>
          <div className="divider-gold-left"></div>

          <div className="prose prose-lg dark:prose-invert mt-8">
            <p>
              Welcome to the Thakker & Associates website. By accessing or using our website, you agree to be bound by
              these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">1. Acceptance of Terms</h2>

            <p>
              By accessing or using the Thakker & Associates website, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
              from using or accessing this site.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">2. Use of Website</h2>

            <p>
              The content of this website is for general information purposes only and does not constitute legal advice.
              No attorney-client relationship is created by your use of this website or by your receipt of information
              from this website.
            </p>

            <p className="mt-4">
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights
              of, or restrict or inhibit the use and enjoyment of this site by any third party.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">3. Intellectual Property</h2>

            <p>
              All content included on this website, such as text, graphics, logos, images, audio clips, digital
              downloads, data compilations, and software, is the property of Thakker & Associates or its content
              suppliers and protected by Indian and international copyright laws.
            </p>

            <p className="mt-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
              republish, download, store, or transmit any of the material on our website without the prior written
              consent of Thakker & Associates.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">4. Disclaimer of Warranties</h2>

            <p>
              The information provided on this website is provided "as is" without any representations or warranties,
              express or implied. Thakker & Associates makes no representations or warranties in relation to the legal
              information on this website.
            </p>

            <p className="mt-4">
              Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice
              in relation to any legal matter, you should consult an appropriate professional.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">5. Limitation of Liability</h2>

            <p>
              In no event shall Thakker & Associates be liable for any direct, indirect, incidental, special,
              consequential, or punitive damages arising out of or in connection with your use of, or inability to use,
              this website or any content provided on or through this website.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">6. Links to Third-Party Websites</h2>

            <p>
              Our website may contain links to third-party websites that are not owned or controlled by Thakker &
              Associates. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party websites.
            </p>

            <p className="mt-4">
              By using this website, you expressly relieve Thakker & Associates from any and all liability arising from
              your use of any third-party website linked from our site.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">7. Changes to Terms</h2>

            <p>
              Thakker & Associates reserves the right to modify these Terms of Service at any time. We will notify users
              of any changes by updating the "Last Updated" date at the bottom of this page. Your continued use of the
              website after any such changes constitutes your acceptance of the new Terms of Service.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">8. Governing Law</h2>

            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without
              regard to its conflict of law provisions. Any disputes relating to these terms and conditions will be
              subject to the exclusive jurisdiction of the courts of Gujarat, India.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">9. Contact Information</h2>

            <p>If you have any questions about these Terms of Service, please contact us at:</p>

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
