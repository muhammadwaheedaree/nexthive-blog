'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { getPostById } from '@/app/lib/blogData'
import { Comment } from'@/app/lib/types'

export default function BlogPost() {
  const { id } = useParams() as { id: string }
  const post = getPostById(id)
  const [comments, setComments] = useState<Comment[]>(post?.comments || [])
  const [newComment, setNewComment] = useState('')

  if (!post) {
    return <div>Post not found</div>
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
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.description}</p>
      <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Comments ({comments.length})</h2>
        <div className="mb-6">
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded mb-4">
            <p className="mb-2">{comment.content}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{comment.author} • {new Date(comment.createdAt).toLocaleDateString()}</span>
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

