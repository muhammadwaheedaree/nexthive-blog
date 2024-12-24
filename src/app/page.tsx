'use client'

import { useState } from 'react'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import BlogCard from './components/BlogCard'
import Newsletter from './components/Newsletter'
import { blogPosts, getTrendingPosts } from '@/app/lib/blogData'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const trendingPosts = getTrendingPosts()

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <div id="home" className="scroll-mt-16">
        <Hero />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div id="trending" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-primary">↗</span> Trending Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPosts.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>

        <div id="categories" className="scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSearch={setSearchTerm}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  )
}

