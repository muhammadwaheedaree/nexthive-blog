import Link from 'next/link'
import { getPostsByCategory } from '@/app/lib/blogData'
import { Category } from '@/app/lib/types'

const categoryList: Category[] = ['Development', 'Design', 'Technology', 'Career']

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      {categoryList.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getPostsByCategory(category).slice(0, 3).map((post) => (
              <div key={post.id} className="bg-card text-card-foreground shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

