'use client'

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { VIPMembershipForm } from './VIPMembershipForm'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechBlog</h3>
            <p className="text-gray-400">Exploring the frontiers of technology, one article at a time.</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com/" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://x.com/" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://pk.linkedin.com/" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('trending')} className="hover:text-primary transition-colors">Trending</button></li>
              <li><button onClick={() => scrollToSection('featured-authors')} className="hover:text-primary transition-colors">Featured Authors</button></li>
              <li><button onClick={() => scrollToSection('categories')} className="hover:text-primary transition-colors">Categories</button></li>
              <li><button onClick={() => scrollToSection('why-NextHive')} className="hover:text-primary transition-colors">Why NextHive</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">VIP Membership</h4>
            <p className="text-gray-400 mb-2">Get exclusive access to premium content and early releases.</p>
            <VIPMembershipForm />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><Mail size={16} className="mr-2" /> contact@NextHive.com</li>
              <li className="flex items-center"><Phone size={16} className="mr-2" /> +92 (323) 829-3672</li>
              <li className="flex items-center"><MapPin size={16} className="mr-2" /> 108 karachi, Sindh, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 NextHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

