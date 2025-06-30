import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EarlyAccessCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to simplify your social media management?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join 500+ entrepreneurs who are waiting for a better way to manage
          their social media
        </p>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-md mx-auto">
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-gray-900 border-0"
            />
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
              Get Early Access - Free
            </Button>
            <p className="text-sm opacity-75">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessCTA;
