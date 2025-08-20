import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-cormorant font-bold mb-6">Legal Disclaimer</h1>
          <div className="divider-gold-left"></div>

          <div className="prose prose-lg dark:prose-invert mt-8">
            <p>
              The information provided on the Thakker & Associates website is for general informational purposes only.
              Please read this disclaimer carefully before using our website.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Not Legal Advice</h2>

            <p>
              The content on this website is not intended to be legal advice and should not be relied upon as such. The
              information provided is general in nature and may not apply to your specific situation. Reading or using
              information from this website does not create an attorney-client relationship between you and Thakker &
              Associates.
            </p>

            <p className="mt-4">
              For advice specific to your situation, please contact our office to schedule a consultation with one of
              our attorneys. Only after we have agreed to represent you and you have signed an engagement letter will an
              attorney-client relationship be established.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">No Guarantees</h2>

            <p>
              Every legal matter is unique, and the outcome of any legal proceeding depends on the specific facts and
              circumstances of each case. Past results do not guarantee or predict similar outcomes in future matters.
              Any case evaluations or results mentioned on this website are based on the specific facts of those cases,
              and you should not assume that we will achieve similar results in your case.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Accuracy of Information</h2>

            <p>
              While we strive to keep the information on our website current and accurate, we make no representations or
              warranties about the accuracy, completeness, or reliability of any information provided. Laws and
              regulations change frequently, and the information on this website may not reflect the most current legal
              developments.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Links to Third-Party Websites</h2>

            <p>
              Our website may contain links to third-party websites. These links are provided for your convenience only.
              Thakker & Associates does not endorse, control, or take responsibility for the content of any linked
              third-party websites. We are not responsible for the privacy practices or content of such websites.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Jurisdictional Limitations</h2>

            <p>
              The attorneys at Thakker & Associates are licensed to practice law in specific jurisdictions. Unless
              explicitly stated, they are not claiming expertise in the laws of jurisdictions other than those in which
              they are licensed. The information on this website may not be applicable in all jurisdictions, and laws
              vary from state to state and country to country.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Communication Policy</h2>

            <p>
              Please do not send confidential or time-sensitive information through the website contact forms or email
              links. Communications sent through this website may not be secure, and sending information to us does not
              create an attorney-client relationship. We cannot guarantee the confidentiality or security of any
              information sent through this website.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Limitation of Liability</h2>

            <p>
              By using this website, you agree that Thakker & Associates shall not be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising out of or in connection with your use of,
              or inability to use, this website or any content provided on or through this website.
            </p>

            <h2 className="text-2xl font-cormorant font-bold mt-8 mb-4">Contact Information</h2>

            <p>If you have any questions about this disclaimer, please contact us at:</p>

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
