import Image from 'next/image';
import { Metadata } from 'next';
import { Award, Users, Heart, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Restaurant Name',
  description: 'Learn about our story, values, and the passionate team behind our culinary excellence',
  openGraph: {
    title: 'About Us - Restaurant Name',
    description: 'Learn about our story, values, and the passionate team behind our culinary excellence',
    type: 'website',
  },
};

export default function AboutPage() {
  const team = [
    {
      name: 'Marco Rossi',
      role: 'Head Chef',
      image: '/images/team/chef1.jpg',
      bio: '25+ years of culinary excellence',
    },
    {
      name: 'Sarah Johnson',
      role: 'Pastry Chef',
      image: '/images/team/chef2.jpg',
      bio: 'Award-winning dessert creations',
    },
    {
      name: 'David Chen',
      role: 'Sous Chef',
      image: '/images/team/chef3.jpg',
      bio: 'Master of Asian fusion cuisine',
    },
  ];

  const values = [
    {
      icon: <Heart className="text-orange-600" size={40} />,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and dedication to culinary excellence',
    },
    {
      icon: <Award className="text-orange-600" size={40} />,
      title: 'Quality Ingredients',
      description: 'We source the finest local and seasonal ingredients for authentic flavors',
    },
    {
      icon: <Users className="text-orange-600" size={40} />,
      title: 'Community Focus',
      description: 'Supporting local farmers and building lasting relationships with our guests',
    },
    {
      icon: <Clock className="text-orange-600" size={40} />,
      title: '20+ Years Experience',
      description: 'Two decades of serving memorable dining experiences to our community',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A journey of passion, tradition, and culinary innovation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2003, our restaurant began with a simple vision: to bring authentic, 
              heartfelt cuisine to our community. What started as a small family-owned establishment 
              has blossomed into a beloved culinary destination, while never losing sight of our 
              core values and commitment to excellence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our head chef, Marco Rossi, trained in the finest kitchens of Italy before bringing 
              his expertise and passion to create a menu that celebrates both traditional recipes 
              and innovative culinary techniques. Every dish tells a story—of heritage, craftsmanship, 
              and the pure joy of sharing a meal with loved ones.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we continue to honor our roots while embracing the future. From farm-to-table 
              ingredients to sustainable practices, we're committed to serving not just exceptional 
              food, but experiences that create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The talented chefs who bring your culinary dreams to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recognition & Awards
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 font-semibold">Michelin Recommended</p>
              <p className="text-gray-600 text-sm mt-2">2023, 2024, 2025</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">🏆</div>
              <p className="text-gray-700 font-semibold">Best Italian Restaurant</p>
              <p className="text-gray-600 text-sm mt-2">New York Times 2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">🥇</div>
              <p className="text-gray-700 font-semibold">Culinary Excellence Award</p>
              <p className="text-gray-600 text-sm mt-2">Restaurant Association 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
