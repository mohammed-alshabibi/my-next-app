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

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
