'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { getPostBySlug } from '@/app/lib/blogData'
import { Comment } from '@/app/lib/types'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'

export default function BlogPost() {
  const { slug } = useParams() as { slug: string }
  const post = getPostBySlug(slug)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ author: '', content: '' })

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toISOString(),
      }
      setComments([...comments, comment])
      setNewComment({ author: '', content: '' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground mb-4">
          {post.category} • {post.date} • {post.readTime} read • {post.views} views
        </div>
        <p className="text-lg md:text-xl mb-8">{post.description}</p>
        <div className="prose dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-8 space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          />
          <Textarea
            placeholder="Your Comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            rows={4}
          />
          <Button type="submit" className="w-full sm:w-auto">Add Comment</Button>
        </form>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-muted p-4 rounded mb-4">
            <p className="font-semibold">{comment.author}</p>
            <p className="mt-2">{comment.content}</p>
            <p className="text-sm text-muted-foreground mt-2">{new Date(comment.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

