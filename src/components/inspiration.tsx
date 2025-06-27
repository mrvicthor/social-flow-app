import { Clock, DollarSign, Users } from "lucide-react";

const Inspiration = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Tired of juggling multiple apps and paying enterprise prices?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 capitalize">
              too expensive
            </h3>
            <p className="text-gray-600">
              Enterprise tools cost $99+/month for features you don&apos;t need
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 capitalize">
              too complex
            </h3>
            <p className="text-gray-600">
              Overwhelming interfaces that take hours to learn
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 capitalize">
              Built for Teams
            </h3>
            <p className="text-gray-600">
              Designed for agencies, not solo entrepreneurs and small businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
