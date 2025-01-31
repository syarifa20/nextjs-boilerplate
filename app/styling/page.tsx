export default function TailwindPage() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold text-blue-500">MyTailwind</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
  
        {/* Hero Section */}
        <header className="bg-blue-500 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold">Welcome to Next.js with Tailwind CSS!</h2>
            <p className="mt-4 text-lg">Build beautiful and responsive websites faster with Tailwind.</p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        </header>
  
        {/* Features Section */}
        <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-500">Fast Development</h3>
            <p className="mt-2 text-gray-600">Tailwind makes styling your components faster and easier.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-500">Responsive Design</h3>
            <p className="mt-2 text-gray-600">Easily build fully responsive layouts with utility classes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-500">Highly Customizable</h3>
            <p className="mt-2 text-gray-600">Tailwind allows you to customize every aspect of your design.</p>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>© 2024 MyTailwind. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  