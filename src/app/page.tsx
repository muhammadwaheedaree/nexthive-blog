'use client'
import Image from 'next/image';
import { useState } from 'react'
import Link from 'next/link'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import BlogCard from './components/BlogCard'
import Newsletter from './components/Newsletter'
import { blogPosts, getTrendingPosts } from '@/app/lib/blogData'
import { Button } from '@/app/components/ui/button'
import { ArrowRight, Lightbulb, Users, Zap, BookOpen, TrendingUp, Award, Youtube } from 'lucide-react'

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
        <div id="trending" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-primary" /> Trending Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPosts.map(post => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>

        <div id="featured-authors" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-primary" /> Featured Authors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Johnson', role: 'Tech Analyst', image: '/placeholder.svg?height=100&width=100', articles: 42 },
              { name: 'Sarah Lee', role: 'UX Designer', image: '/placeholder.svg?height=100&width=100', articles: 38 },
              { name: 'Mike Chen', role: 'AI Researcher', image: '/placeholder.svg?height=100&width=100', articles: 51 },
            ].map((author) => (
              <div key={author.name} className="flex flex-col items-center space-y-4 bg-card p-6 rounded-lg shadow-md">
            <Image  
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 rounded-full"
                  width={96}
                  height={96}
                />
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{author.name}</h3>
                  <p className="text-muted-foreground">{author.role}</p>
                  <p className="text-sm text-primary mt-2">{author.articles} articles published</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="categories" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" /> Explore Categories
          </h2>
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

        <div id="why-techblog" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Lightbulb className="text-primary" /> Why Choose TechBlog?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: 'Expert Insights', description: 'Get in-depth analysis from industry experts' },
              { icon: Zap, title: 'Cutting-edge Topics', description: 'Stay ahead with the latest in tech' },
              { icon: Users, title: 'Vibrant Community', description: 'Engage with like-minded tech enthusiasts' },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center bg-card p-6 rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="latest-podcasts" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Youtube className="text-primary" /> Latest Podcasts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "The Future of AI", host: "Dr. Emily Watson", duration: "45 min", image: "/placeholder.svg?height=200&width=200", youtubeLink: "https://www.youtube.com/watch?v=8V20HkoiNtc" },
              { title: "Cybersecurity Trends", host: "Mark Thompson", duration: "38 min", image: "/placeholder.svg?height=200&width=200", youtubeLink: "https://www.youtube.com/watch?v=bM0PmwOlifE" },
              { title: "Blockchain Revolution", host: "Lisa Chen", duration: "42 min", image: "/placeholder.svg?height=200&width=200", youtubeLink: "https://www.youtube.com/watch?v=SSo_EIwHSd4" },
            ].map((podcast) => (
              <div key={podcast.title} className="bg-card p-4 rounded-lg shadow-md">
                <Image
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="font-semibold text-lg mb-2">{podcast.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">Host: {podcast.host}</p>
                <p className="text-muted-foreground text-sm">{podcast.duration}</p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href={podcast.youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Youtube className="mr-2 h-4 w-4" /> Listen Now
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Newsletter />

        <div className="text-center mt-16 bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Ready to dive deeper?</h2>
          <p className="text-xl text-muted-foreground mb-6">Explore our premium content and take your knowledge to the next level.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Premium Content <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

