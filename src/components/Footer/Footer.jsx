export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Celestial</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">News</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Investors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Order Status</a></li>
              <li><a href="#" className="hover:text-gray-300">Shipping and Delivery</a></li>
              <li><a href="#" className="hover:text-gray-300">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
