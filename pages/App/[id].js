import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>This is a dynamic blog post page.</p>
    </div>
  );
}
