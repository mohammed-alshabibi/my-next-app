import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <h1>Welcome to my App</h1>
    <p>Click a post to read: </p>
    <ul>
      <li><a href="/app/1">Post 1</a></li>
      <li><a href="/app/2">Post 2</a></li>
    </ul>
    </div>
  );
}
