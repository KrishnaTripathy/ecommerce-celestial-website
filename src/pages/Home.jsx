import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Celestial UI Ecommerce</h1>
        <p className="text-xl mb-8 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et eveniet cumque tempore autem error.
        </p>
        <Link
          to="/products"
          className="bg-gray-100 text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Shop Now
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Featured Product"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Celestial UI Pro</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et.</p>
          <Link to="/products" className="text-black font-semibold hover:underline">
            Learn More
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Lorem ipsum dolor sit.</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Celestial Mountain Master</h3>
              <p className="text-gray-600">Designed for challenging mountain terrains.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Celestial Forest Runner</h3>
              <p className="text-gray-600">Perfect for forest trails and muddy conditions.</p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Trail Running Tips</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Proper Footwear</h3>
              <p className="text-gray-600">Choose shoes with good traction and support.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Stay Hydrated</h3>
              <p className="text-gray-600">Carry water and plan your hydration strategy.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Know the Products</h3>
              <p className="text-gray-600">Research your route and be prepared for conditions.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-center bg-gray-800 p-8 rounded-lg">
  <h2 className="text-3xl font-bold mb-4 text-white">Join the Celestial UI Running Community</h2>
  <p className="text-xl mb-8 text-gray-300">Get exclusive access to new products, training tips, and local trail running events.</p>
  <form className="max-w-md mx-auto">
    <div className="flex flex-col sm:flex-row sm:items-center">
      <div className="flex-grow">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-full border-2 border-gray-100 bg-gray-50 mb-2 sm:mb-0 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white whitespace-nowrap py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-400 transition-colors sm:ml-2"
      >
        Sign Up
      </button>
    </div>
  </form>
  <p className="mt-4 text-gray-400 text-sm">We respect your privacy. Your information is safe with us.</p>
</section>

    </div>
  );
}
