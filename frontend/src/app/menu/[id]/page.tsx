import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/data/menuItems';
import { ArrowLeft, Check } from 'lucide-react';

// Generate static params for all menu items
export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const item = menuItems.find((item) => item.id === params.id);
  
  if (!item) {
    return {
      title: 'Item Not Found',
    };
  }

  return {
    title: `${item.name} - Menu | Restaurant Name`,
    description: item.description,
  };
}

export default function MenuItemPage({ params }: { params: { id: string } }) {
  const item = menuItems.find((item) => item.id === params.id);

  if (!item) {
    notFound();
  }

  const relatedItems = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/menu"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Menu
        </Link>

        {/* Item Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold uppercase">
                {item.category}
              </span>
              {item.isVegetarian && (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Vegetarian
                </span>
              )}
              {item.isGlutenFree && (
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Gluten-Free
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {item.name}
            </h1>

            <p className="text-3xl font-bold text-orange-600 mb-6">
              ${item.price}
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {item.description}
            </p>

            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Prepared with fresh, locally-sourced ingredients</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Made to order by our expert chefs</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Customizable based on dietary preferences</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="flex-1 bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Call to Order
              </a>
              <a
                href="#contact"
                className="flex-1 bg-white text-orange-600 px-8 py-3 rounded-full font-semibold border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 text-center"
              >
                Reserve Table
              </a>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Similar Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  href={`/menu/${relatedItem.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedItem.image}
                      alt={relatedItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedItem.name}
                    </h3>
                    <p className="text-orange-600 font-bold">${relatedItem.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
