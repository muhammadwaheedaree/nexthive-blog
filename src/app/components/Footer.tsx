import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dynamic Blog</h3>
            <p className="text-sm mt-2">Exploring ideas, one post at a time.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-gray-300 transition duration-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300 transition duration-300">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Dynamic Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

