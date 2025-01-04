'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/app/components/ui/button'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigateToSection = (id: string) => {
    setIsMenuOpen(false)
    
    // If we're already on the home page, just scroll
    if (pathname === '/') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // If we're on another page, navigate to home and then scroll
    router.push('/')
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          NextHive
        </Link>
        
        <nav className={`md:flex items-center gap-8 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-background p-4 border-b' : 'hidden'}`}>
          <button 
            onClick={() => navigateToSection('home')} 
            className="text-foreground hover:text-primary py-2 md:py-0"
          >
            Home
          </button>
          <button 
            onClick={() => navigateToSection('trending')} 
            className="text-foreground hover:text-primary py-2 md:py-0"
          >
            Trending
          </button>
          <button 
            onClick={() => navigateToSection('categories')} 
            className="text-foreground hover:text-primary py-2 md:py-0"
          >
            Categories
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hidden md:inline-flex">
            Subscribe
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

