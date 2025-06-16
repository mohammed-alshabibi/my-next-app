export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    console.log("Received comment:", text);
    res.status(200).json({ success: true, message: 'Comment received!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
