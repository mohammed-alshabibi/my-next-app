export default function handler(req, res) {
  const samplePost = {
    id: 1,
    title: "Hello from Next.js API",
    content: "This is fake post content from the API."
  };

  res.status(200).json(samplePost);
}
