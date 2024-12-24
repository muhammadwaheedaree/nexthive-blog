import Link from 'next/link'
import { Clock } from 'lucide-react'
import { cn } from '@/app/lib/utils'

interface BlogCardProps {
  category: string
  title: string
  description: string
  date: string
  readTime: string
  slug: string
  className?: string
}

export default function BlogCard({
  category,
  title,
  description,
  date,
  readTime,
  slug,
  className
}: BlogCardProps) {
  return (
    <div className={cn("bg-card text-card-foreground rounded-lg p-4 border flex flex-col h-full", className)}>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className={cn(
          "px-2 py-1 rounded-full text-xs",
          category === 'Development' && "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
          category === 'Design' && "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
          category === 'Technology' && "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
          category === 'Career' && "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
        )}>
          {category}
        </span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{readTime}</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-2 flex-grow">
        <Link href={`/blog/${slug}`} className="hover:text-primary">
          {title}
        </Link>
      </h2>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{date}</span>
        <Link 
          href={`/blog/${slug}`}
          className="text-primary hover:text-primary/90 font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  )
}

