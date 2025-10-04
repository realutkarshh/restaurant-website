import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Restaurant Name',
  description: 'Terms and conditions for using our restaurant website and services',
  robots: {
    index: false, // Don't index T&C pages
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-8">Last updated: October 3, 2025</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Restaurant Name. These Terms and Conditions govern your use of our 
                website and services. By accessing or using our website, you agree to be bound 
                by these terms. If you do not agree with any part of these terms, please do not 
                use our website.
              </p>
            </section>

            {/* Use of Website */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Collect or harvest information about other users without consent</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>
            </section>

            {/* Reservations and Orders */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Reservations and Orders</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When making reservations or placing orders through our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All reservations are subject to availability</li>
                <li>We reserve the right to refuse service to anyone for any lawful reason</li>
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Menu items and prices are subject to change without notice</li>
                <li>We are not responsible for dietary restrictions unless communicated in advance</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, images, logos, graphics, and software, 
                is the property of Restaurant Name or its content suppliers and is protected by 
                copyright, trademark, and other intellectual property laws. You may not reproduce, 
                distribute, or create derivative works from our content without express written permission.
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our website is also governed by our Privacy Policy. We collect and use 
                personal information in accordance with applicable data protection laws. By using our 
                website, you consent to such collection and use of information.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Restaurant Name shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the website or services. 
                Our total liability shall not exceed the amount paid by you for services, if any.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are provided "as is" without warranties of any kind, either 
                express or implied. We do not guarantee that the website will be uninterrupted, secure, 
                or error-free. Menu descriptions and images are for illustrative purposes and may not 
                exactly represent actual dishes.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will 
                be effective immediately upon posting to the website. Your continued use of the website 
                after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the 
                laws of the State of New York, without regard to its conflict of law provisions. Any 
                disputes arising from these terms shall be resolved in the courts of New York.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Restaurant Name</strong></p>
                <p className="text-gray-700">123 Culinary Street</p>
                <p className="text-gray-700">New York, NY 10001</p>
                <p className="text-gray-700">Email: info@restaurant.com</p>
                <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
