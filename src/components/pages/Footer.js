import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-slate-700 py-4 sm:pt-10 sm:pb-6">
      <div className="container mx-auto grid gap-y-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
          <nav>
            <h3 className="text-lg text-purple-400 mb-4">Orica</h3>
            <ul className="grid gap-y-3 text-sm text-white ">
              <li>
                <a
                  href="https://www.linkedin.com/company/orica-io/about/"
                  target="_blank"
                  className="hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/orica-io/jobs/"
                  target="_blank"
                  className="hover:underline"
                >
                  Kariyer
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg text-purple-400 mb-4">Contact</h3>
            <ul className="grid gap-y-3 text-sm text-white ">
              <li>
                <a
                  href="https://t.me/OricaChat"
                  target="_blank"
                  className="hover:underline"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/YZ9vp5syct"
                  target="_blank"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/orica_io"
                  target="_blank"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="text-lg text-purple-400 mb-4">About Me</h3>
            <ul className="grid gap-y-3 text-sm text-white ">
              <li>
                <a
                  href="https://www.linkedin.com/in/hasan-mahir-ates/"
                  target="_blank"
                  className="hover:underline"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hasanmahira/"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@hasanmahira"
                  target="_blank"
                  className="hover:underline"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/developwithma"
                  target="_blank"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
