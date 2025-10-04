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

// Generate metadata for SEO - FIXED: params is now Promise
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = menuItems.find((item) => item.id === id);
  
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

// FIXED: Made function async and params is now Promise
export default async function MenuItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = menuItems.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  const relatedItems = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/menu"
          className="inline-flex items-center text-[#d9c4a9] hover:text-[#d9b061] font-light tracking-wide mb-12 transition-colors duration-500"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="uppercase text-sm tracking-widest">Back to Menu</span>
        </Link>

        {/* Item Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Image */}
          <div className="relative group">
            {/* Elegant frame effect */}
            <div className="absolute -inset-6 border border-[#d9b061] opacity-30"></div>
            
            {/* Golden glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d9b061]/20 via-transparent to-[#d9b061]/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover grayscale-[20%] contrast-110 brightness-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#d9b061] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#d9b061] opacity-50"></div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gray-900 border border-[#d9b061]/40 text-[#d9b061] px-5 py-2 text-xs font-light tracking-[0.2em] uppercase">
                {item.category}
              </span>
              {item.isVegetarian && (
                <span className="bg-gray-900 border border-[#d9b061]/40 text-[#d9c4a9] px-4 py-2 text-xs font-light tracking-widest uppercase">
                  Vegetarian
                </span>
              )}
              {item.isGlutenFree && (
                <span className="bg-gray-900 border border-[#d9b061]/40 text-[#d9c4a9] px-4 py-2 text-xs font-light tracking-widest uppercase">
                  Gluten-Free
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#f2f2f2] mb-6 leading-tight">
              {item.name}
            </h1>

            {/* Decorative line */}
            <div className="w-16 h-[1px] bg-[#d9b061] mb-6"></div>

            <p className="text-4xl md:text-5xl font-serif text-[#d9b061] mb-8">
              ${item.price}
            </p>

            <p className="text-lg text-[#bfafaf] mb-10 leading-relaxed font-light">
              {item.description}
            </p>

            {/* Features */}
            <div className="relative bg-gray-900 p-8 mb-10 overflow-hidden">
              {/* Border effect */}
              <div className="absolute inset-0 border border-[#d9b061] opacity-20"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d9b061] opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d9b061] opacity-30"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-[#d9b061] mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-[#d9b061] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#bfafaf] font-light leading-relaxed">Prepared with fresh, locally-sourced ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#d9b061] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#bfafaf] font-light leading-relaxed">Made to order by our expert chefs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#d9b061] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-[#bfafaf] font-light leading-relaxed">Customizable based on dietary preferences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="flex-1 bg-[#d9b061] text-gray-950 px-8 py-4 font-medium tracking-wider uppercase text-sm hover:bg-[#c0a050] transition-all duration-500 shadow-lg hover:shadow-[#d9b061]/50 text-center"
              >
                Call to Order
              </a>
              <a
                href="#contact"
                className="flex-1 bg-transparent text-[#d9c4a9] px-8 py-4 font-medium tracking-wider uppercase text-sm border border-[#d9b061] hover:bg-[#d9b061] hover:text-gray-950 transition-all duration-500 text-center"
              >
                Reserve Table
              </a>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#d9b061]"></div>
                <span className="text-[#d9c4a9] text-sm tracking-[0.3em] uppercase font-light">
                  More to Explore
                </span>
                <div className="h-[1px] w-12 bg-[#d9b061]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-[#f2f2f2]">
                Similar <span className="text-[#d9b061] italic">Dishes</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  href={`/menu/${relatedItem.id}`}
                  className="block relative bg-gray-900 overflow-hidden group hover:-translate-y-3 transition-transform duration-500"
                >
                  {/* Border effect */}
                  <div className="absolute inset-0 border border-[#d9b061] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d9b061] opacity-40"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d9b061] opacity-40"></div>

                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={relatedItem.image}
                      alt={relatedItem.name}
                      fill
                      className="object-cover grayscale-[20%] contrast-110 brightness-90 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-serif text-[#f2f2f2] mb-3 group-hover:text-[#d9b061] transition-colors duration-500">
                      {relatedItem.name}
                    </h3>
                    <div className="w-10 h-[1px] bg-[#d9b061] mb-3"></div>
                    <p className="text-xl font-serif text-[#d9b061]">${relatedItem.price}</p>
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
