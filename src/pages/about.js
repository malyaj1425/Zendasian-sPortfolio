import { useRouter } from "next/router";
import Link from "next/link";
import profileImage from "./profile.jpg";
import Footer from "./Footer";
export default function about() {
  return (
    <div className="about">
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
                href="/blog/hello-world"
                className="text-gray-800 font-bold notebook-font"
              >
                Blog Post
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="mt-0"> ... </div>
      <div className="flex justify-center items-center h-full mt-20 mb-10 ml-20 mr-20">
        <div className="max-w-xxl mx-auto bg-white shadow-lg rounded-md overflow-hidden flex">
          <img
            src="https://i.ibb.co/sHywywZ/thenarrator.png"
            alt="Profile Picture"
            className="w-256 h-55 object-cover"
          />
          <div className="p-4 flex-grow">
            <h2 className="text-xl font-bold mb-2 notebook-font">About Me</h2>
            <p className="text-gray-700 notebook-font">
              I'm a 21-year-old web developer and designer. Currently pursuing
              my third year of studies at Chitkara University, I'm passionate
              about creating efficient digital products that solve real-world
              problems. My experience includes designing and developing websites
              and web applications, and I have worked with a variety of
              technologies, including Node.js, Express.js, React.js, and
              JavaScript. When I'm not coding, I enjoy creating digital art and
              exploring the latest gaming trends. I'm also an avid Japanese
              language learner.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
