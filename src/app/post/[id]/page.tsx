'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { getPostById } from '@/app/lib/blogData'
import { Comment } from '@/app/lib/types'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'

export default function BlogPost() {
  const { id } = useParams() as { id: string }
  const post = getPostById(id)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>
  }

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: 'Anonymous',
        content: newComment,
        createdAt: new Date().toISOString(),
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  const deleteComment = (commentId: string) => {
    setComments(comments.filter((comment) => comment.id !== commentId))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.description}</p>
        <div className="prose dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Comments ({comments.length})</h2>
        <div className="mb-6">
          <Textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <Button
            className="mt-2"
            onClick={addComment}
          >
            Add Comment
          </Button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-muted p-4 rounded mb-4">
            <p className="mb-2">{comment.content}</p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{comment.author} • {new Date(comment.createdAt).toLocaleDateString()}</span>
              <Button
                variant="ghost"
                className="text-destructive hover:text-destructive/90"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

