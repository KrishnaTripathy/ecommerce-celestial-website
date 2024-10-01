import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Celestial UI Ecommerce</h1>
        <p className="text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et eveniet cumque tempore autem error..</p>
        <Link to="/products" className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
          Shop Now
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
          <img src="/placeholder.svg?height=300&width=300" alt="Featured Product" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Celestial Ui Pro</h3>
          <p className="text-gray-600 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et.</p>
          <Link to="/products" className="text-black font-semibold hover:underline">Learn More</Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Lorem ipsum dolor sit.</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">celestial Mountain Master</h3>
              <p className="text-gray-600">Designed for challenging mountain terrains.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">celestial Forest Runner</h3>
              <p className="text-gray-600">Perfect for forest trails and muddy conditions.</p>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Trail Running Tips</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Proper Footwear</h3>
              <p className="text-gray-600">Choose Ui with good traction and support.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Stay Hydrated</h3>
              <p className="text-gray-600">Carry water and plan your hydration strategy.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Know the products</h3>
              <p className="text-gray-600">Research your route and be prepared for conditions.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join the celestial ui Running Community</h2>
        <p className="text-xl mb-8">Get exclusive access to new products, training tips, and local trail running events.</p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-l-full border-2 border-black"
          />
          <button
            type="submit"
            className="mt-4 bg-black text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  )
}