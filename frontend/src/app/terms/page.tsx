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
    <div className="min-h-screen bg-gray-950 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-900 p-8 md:p-12 overflow-hidden">
          {/* Elegant border effect */}
          <div className="absolute inset-0 border border-[#d9b061] opacity-20"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d9b061] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d9b061] opacity-40"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#d9b061]"></div>
                <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
                  Legal
                </span>
                <div className="h-[1px] w-12 bg-[#d9b061]"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif text-[#f2f2f2] mb-4">
                Terms & <span className="text-[#d9b061] italic">Conditions</span>
              </h1>
              <p className="text-[#bfafaf] font-light tracking-wide">Last updated: October 3, 2025</p>
            </div>


            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">1. Introduction</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  Welcome to Restaurant Name. These Terms and Conditions govern your use of our 
                  website and services. By accessing or using our website, you agree to be bound 
                  by these terms. If you do not agree with any part of these terms, please do not 
                  use our website.
                </p>
              </section>


              {/* Use of Website */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">2. Use of Website</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed mb-4 font-light">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="space-y-3 text-[#bfafaf] font-light">
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Use the website in any way that violates applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Attempt to gain unauthorized access to our systems or networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Transmit any harmful or malicious code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Collect or harvest information about other users without consent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Use automated systems to access the website without permission</span>
                  </li>
                </ul>
              </section>


              {/* Reservations and Orders */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">3. Reservations and Orders</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed mb-4 font-light">
                  When making reservations or placing orders through our website:
                </p>
                <ul className="space-y-3 text-[#bfafaf] font-light">
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>All reservations are subject to availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>We reserve the right to refuse service to anyone for any lawful reason</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Cancellations must be made at least 24 hours in advance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>Menu items and prices are subject to change without notice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d9b061] mr-3 mt-1">•</span>
                    <span>We are not responsible for dietary restrictions unless communicated in advance</span>
                  </li>
                </ul>
              </section>


              {/* Intellectual Property */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">4. Intellectual Property</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  All content on this website, including text, images, logos, graphics, and software, 
                  is the property of Restaurant Name or its content suppliers and is protected by 
                  copyright, trademark, and other intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works from our content without express written permission.
                </p>
              </section>


              {/* Privacy */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">5. Privacy</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  Your use of our website is also governed by our Privacy Policy. We collect and use 
                  personal information in accordance with applicable data protection laws. By using our 
                  website, you consent to such collection and use of information.
                </p>
              </section>


              {/* Limitation of Liability */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">6. Limitation of Liability</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  Restaurant Name shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of or inability to use the website or services. 
                  Our total liability shall not exceed the amount paid by you for services, if any.
                </p>
              </section>


              {/* Disclaimer */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">7. Disclaimer</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  Our website and services are provided "as is" without warranties of any kind, either 
                  express or implied. We do not guarantee that the website will be uninterrupted, secure, 
                  or error-free. Menu descriptions and images are for illustrative purposes and may not 
                  exactly represent actual dishes.
                </p>
              </section>


              {/* Changes to Terms */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">8. Changes to Terms</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will 
                  be effective immediately upon posting to the website. Your continued use of the website 
                  after changes are posted constitutes acceptance of the modified terms.
                </p>
              </section>


              {/* Governing Law */}
              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">9. Governing Law</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed font-light">
                  These Terms and Conditions shall be governed by and construed in accordance with the 
                  laws of the State of New York, without regard to its conflict of law provisions. Any 
                  disputes arising from these terms shall be resolved in the courts of New York.
                </p>
              </section>


              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-[#d9b061] mb-4">10. Contact Information</h2>
                <div className="w-12 h-[1px] bg-[#d9b061] mb-6"></div>
                <p className="text-[#bfafaf] leading-relaxed mb-6 font-light">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="relative bg-gray-950 p-8 overflow-hidden">
                  <div className="absolute inset-0 border border-[#d9b061] opacity-20"></div>
                  <div className="relative z-10 space-y-2">
                    <p className="text-[#f2f2f2] font-serif text-lg">Restaurant Name</p>
                    <p className="text-[#bfafaf] font-light">123 Culinary Street</p>
                    <p className="text-[#bfafaf] font-light">New York, NY 10001</p>
                    <p className="text-[#bfafaf] font-light">Email: info@restaurant.com</p>
                    <p className="text-[#bfafaf] font-light">Phone: +1 (555) 123-4567</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
