import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [msg,setMsg] = useState('');

  useEffect(() =>{
    fetch('/api/hello').then(res => res.json()).then(data => setMsg(data.message));
  }, []);
  return (
    <div>
    <h1>Welcome to my App</h1>
    <p>Click a post to read: </p>
    <ul>
      <li><a href="/App/1">Post 1</a></li>
      <li><a href="/App/2">Post 2</a></li>
    </ul>
    </div>
  );
}
