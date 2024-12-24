import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <div className="bg-card border rounded-lg p-6 md:p-8 max-w-xl mx-auto my-16">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-semibold">Stay Updated</h2>
      </div>
      <p className="text-muted-foreground mb-6">
        Get the latest articles and news delivered to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <Input 
          type="email" 
          placeholder="Enter your email"
          className="flex-1"
        />
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
          Subscribe
        </Button>
      </form>
    </div>
  )
}

