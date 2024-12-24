'use client'

import { cn } from '@/app/lib/utils'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Search } from 'lucide-react'
import { categories } from '@/app/lib/blogData'

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  onSearch: (term: string) => void
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  onSearch
}: CategoryFilterProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Search articles..." 
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full",
              selectedCategory === category && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

