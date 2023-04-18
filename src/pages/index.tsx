import Image from "next/image";
import NextImage from 'next/image'
import { Inter } from "next/font/google";
import Homes from "./HelloWorld";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "./Footer";
import React from 'react';
import IntersectionObserver from 'react-intersection-observer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  




//


// 
  const artworks = [
    { id: 1, title: "Artwork 1", imageUrl: "https://i.ibb.co/9ySY3BD/primeoptimus.png" },
    { id: 2, title: "Artwork 2", imageUrl: "https://i.ibb.co/qN04fz2/ellielou2p.png" },
    { id: 3, title: "Artwork 3", imageUrl: "https://i.ibb.co/J7tMFCk/Lightbringer-Mag-2001-CBP2-U2.png" },
    { id: 4, title: "Artwork 4", imageUrl: "https://i.ibb.co/8m21MqJ/jessefaden.png" },
    { id: 5, title: "Artwork 5", imageUrl: "https://i.ibb.co/NKtdBp9/ATRAIN.png" },
    { id: 6, title: "Artwork 6", imageUrl: "https://i.ibb.co/xfZDsk8/scarface.png" },
    { id: 7, title: "Artwork 7", imageUrl: "https://i.ibb.co/2s7Rs2D/jakesully.png" },
    { id: 8, title: "Artwork 8", imageUrl: "https://i.ibb.co/Xy7kGgW/morgan.png" },
    { id: 9, title: "Artwork 9", imageUrl: "https://i.ibb.co/JtwQ7QK/tomshelby.png" },
  ];
  return (
    <main className="">
      <header className="fixed top-0 left-0 w-full bg-white z-50 py-3 transition-all duration-500 opacity-90">
        
        <nav className="container mx-auto">
          <ul className="flex items-center justify-center">
            <li className="px-10 py-0">
              {" "}
              {/* Updated padding value to px-1 */}
              <a href="/" className="text-gray-800 font-bold notebook-font">
                Home
              </a>
            </li>
            <li className="px-10 py-0">
              {" "}
              {/* Updated padding value to px-1 */}
              <a
                href="/about"
                className="text-gray-800 font-bold notebook-font"
              >
                About Me
              </a>
            </li>
            <li className="px-10 py-0">
              {" "}
              {/* Updated padding value to px-1 */}
              <a
                href="https://www.tumblr.com/zendasian"
                className="text-gray-800 font-bold notebook-font"
              >
                Blog Post
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container mx-auto py-8">
      <div className="flex justify-center items-center mt-10">
      <h1 className="text-6xl font-bold text-white title-fonts">Zendasian</h1>
      
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        
        {artworks.map(artwork => (
          <div key={artwork.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md shadow-black">
            <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-50 object-cover mb-4 brightness-50 hover:brightness-100 " />
            <h2 className="text-xl font-bold mb-2 notebook-font">{artwork.title}</h2>
            {/* Add any additional content for each artwork card */}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </main>
    
  );
}
