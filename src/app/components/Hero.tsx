import { Button } from '@/app/components/ui/button'

export default function Hero() {
  const scrollToTrending = () => {
    const element = document.getElementById('trending');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="py-12 md:py-24 text-center bg-[url('/grid.svg')] bg-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text px-4">
        Welcome to NextHive
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
        Discover insightful articles about development, design, and technology
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
        <Button onClick={scrollToTrending} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
          Start Reading →
        </Button>
        <Button onClick={scrollToCategories} variant="outline" className="w-full sm:w-auto">
          Browse Topics
        </Button>
      </div>
    </div>
  )
}

