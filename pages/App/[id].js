import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return; // wait for route to load

    fetch('/api/post')
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);
const [comment, setComment] = useState('');
const [response, setResponse] = useState('');

const submitComment = async () => {
  const res = await fetch('/api/comment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: comment }),
  });
  const data = await res.json();
  setResponse(data.message);
};
  return (
    <div>
      <h1>Post ID: {id}</h1>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h3>Leave a Comment:</h3>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
  <br />
  <button onClick={submitComment}>Submit</button>
  {response && <p>{response}</p>}
        </>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}
