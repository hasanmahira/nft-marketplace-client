import { BiGlobe } from "react-icons/bi";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-slate-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/#" className="flex">
          <svg
            width="110"
            height="36"
            viewBox="0 0 110 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="css-nbsemk eely9v34"
          >
            <path
              d="M47.5854 13.6445H48.1246C49.654 13.6832 51.1487 14.1305 52.4666 14.944V14.9667C51.8732 17.8031 51.5476 19.2894 51.4897 19.4258C50.134 18.4863 48.9278 18.0152 47.8713 18.0127H47.5348C46.8647 18.012 46.2015 18.1529 45.5847 18.427C44.9679 18.701 44.4103 19.1026 43.9453 19.6077C43.1662 20.6179 42.7778 22.5122 42.7802 25.2904C43.692 29.8935 42.7802 33.754 40.6092 34.883C40.0326 35.1701 39.3916 35.2854 38.7565 35.2163L38.6914 35.1519V14.1143L38.7565 14.0726H42.7368L42.7802 14.1143V15.732C44.3433 14.3404 45.9451 13.6445 47.5854 13.6445Z"
              fill="#00070D"
            />
            <path
              d="M61.1501 13.6445V35.2163L61.1284 35.2391H57.1156L57.0939 35.2163C56.9709 30.6701 56.8949 26.3323 56.8189 21.7823C56.7791 19.566 56.7719 16.9519 58.4363 15.1713C59.1857 14.4051 60.1263 13.8759 61.1501 13.6445Z"
              fill="#00070D"
            />
            <path
              d="M77.366 13.6445H77.4094C79.5761 13.6487 81.6861 14.3701 83.4377 15.7055C83.8473 16.0312 84.2365 16.3843 84.6028 16.7625C84.9887 17.155 85.3411 17.5822 85.6557 18.0392C86.2585 18.9463 86.6637 19.981 86.8426 21.07L82.5331 20.8958H82.5005C82.2556 20.5157 81.9744 20.1628 81.661 19.8425C80.5462 18.6639 79.0346 17.9896 77.4505 17.9641C75.8663 17.9386 74.3357 18.564 73.1868 19.7062C72.8652 20.0099 72.583 20.3563 72.3473 20.7366C71.5277 21.9233 71.0904 23.3525 71.0989 24.8169C71.0969 26.4236 71.6205 27.9825 72.5825 29.2343C72.8854 29.6057 73.217 29.9504 73.5739 30.2648C74.6576 31.1681 76.0026 31.6584 77.3877 31.6551C78.6577 31.6518 79.894 31.2274 80.9193 30.4428C81.284 30.1716
               81.6232 29.8646 81.9324 29.526C82.1593 29.25 82.3673 28.9576 82.5548 28.6508H82.5765H86.3649C86.2998 29.31 86.0538 31.1702 85.0551 32.3863C84.7402 32.7684 84.394 33.1208 84.0202 33.4395C83.6306 33.7805 83.2209 34.0955 82.7936 34.3829C81.1967 35.4243 79.3558 35.9829 77.4746 35.9968H77.2792C75.2713 35.9871 73.3111 35.3557 71.6453 34.1821C71.3016 33.9282 70.9868 33.682 70.7009 33.4244C70.2793 33.0343 69.8828 32.6154 69.5141 32.1704C69.0471 31.6014 68.6362 30.9845 68.2874 30.3292C67.9616 29.7275 67.6949 29.0929 67.4914 28.4349C67.1371 27.3307 66.9515 26.1749 66.9414 25.0101V24.6312C66.9599 22.8775 67.3649 21.1518 68.1246 19.5887C68.3707 19.1227 68.6493 18.6454 68.9677
                18.1529C69.3069 17.6851 69.6693 17.2361 70.0532 16.8079C70.5219 16.3466 71.0226 15.9224 71.5512 15.5388C73.2621 14.3065 75.2894 13.6461 77.366 13.6445Z"
              fill="#00070D"
            />
            <path
              d="M92.904 24.8098C92.904 27.1688 93.9027 29.1047 95.9 30.6176C96.8506 31.2524 97.9466 31.6083 99.0734 31.6481H99.5583C100.969 31.6481 102.336 31.0647 103.658 29.8978C104.316 29.2473 104.84 28.4619 105.196 27.5905C105.552 26.7191 105.733 25.7803 105.728 24.8326V24.8098C105.728 22.418 104.729 20.4897 102.732 19.0248C101.756 18.3781 100.63 18.0219 99.475 17.9943H99.1132C97.3498 17.9943 95.7565 18.824 94.3333 20.4833C93.4232 21.7261 92.9217 23.2439 92.904 24.8098ZM99.4171 13.6451C100.6 13.6314 101.772 13.8779 102.858 14.3687C103.944 14.8594 104.919 15.5835 105.72 16.494V14.0239L105.786 13.9785H109.95L110.001 14.0239V35.4139L109.958 35.4593C108.557 35.9405 107.128 35.6488 106.339
               34.7282C105.995 34.3084 105.781 33.7893 105.724 33.2393C105.07 33.9802 104.296 34.5934 103.437 35.0502C102.176 35.6988 100.786 36.0234 99.3809 35.9973H99.3592C96.1437 35.9973 93.4118 34.6751 91.1636 32.0307C89.5342 30.0212 88.6436 27.4686 88.6524 24.8326V24.8098C88.6524 21.5264 89.9008 18.6863 92.3974 16.2895C94.3674 14.5657 96.8571 13.6288 99.4244 13.6451H99.4171Z"
              fill="#00070D"
            />
            <path
              d="M33.6518 15.6183C33.6287 13.5232 33.181 11.4571 32.3384 9.55663C31.8418 8.30021 31.1752 7.12511 30.3591 6.0674C29.5208 5.00894 28.5466 4.07698 27.4644 3.298C26.3166 2.42606 25.0725 1.70227 23.7592 1.14233C20.9584 0.0329822 17.9261 -0.275617 14.9737 0.248242C11.8391 0.750213 8.88485 2.10346 6.40533 4.17315C3.68151 6.49734 1.68207 9.61969 0.662936 13.1406C0.0361966 15.4281 -0.148691 17.8236 0.119084 20.1868C0.386858 22.5501 1.10192 24.8337 2.22246 26.9042C4.20838 30.4917 7.29614 33.2693 10.9826 34.7844C12.5372 35.4177 14.1719 35.8096 15.8349 35.9474C16.7467 36.0175 17.6622 36.0175 18.574 35.9474C20.2691 35.8012 21.9351 35.3993 23.5203 34.7541C23.9582 34.5722 26.719 33.3978
               28.7272 31.2762C28.9335 31.0603 29.592 30.348 29.5739 30.3291C29.5558 30.3101 29.2881 30.5905 28.7634 31.0868L27.9384 31.8445C26.3546 33.1558 24.5326 34.1161 22.5832 34.6669C20.8722 35.1557 19.0944 35.3363 17.3256 35.2011C16.4881 35.127 15.6556 35.0005 14.8326 34.8223C13.7719 34.615 12.7297 34.3146 11.7171 33.9244L11.5036 33.8372C10.2372 33.3144 8.11683 31.7005 6.89743 30.1586C2.46851 24.5667 3.79647 17.9671 3.79647 17.9671C4.70468 13.3944 7.8744 9.35963 11.9957 7.90105C12.5204 7.7192 16.1243 6.50308 19.5727 8.09047C20.6854 8.57441 21.6556 9.3588 22.3842 10.3636C23.0441 11.2514 23.4008 12.3452 23.3973 13.4702C23.4126 14.1059 23.1981 14.7243 22.7967 15.2015C22.5794 15.44
               22.3022 15.6094 21.997 15.6902C21.3927 15.8418 20.9657 15.5501 20.4121 15.3531C19.3425 15.0252 18.2003 15.0677 17.1556 15.4743C16.4488 15.7329 15.8008 16.1418 15.2523 16.6753C14.1364 17.796 13.458 19.311 13.349 20.926C13.1753 23.8734 15.198 25.9723 15.5599 26.3398C18.8164 29.5903 24.6782 28.7265 28.2604 26.3776C29.9378 25.2637 31.3183 23.7232 32.2732 21.8996C33.2441 19.966 33.7192 17.8017 33.6518 15.6183Z"
              fill="#00070D"
            />
          </svg>
        </a>
        <div className="flex md:order-2">
          <div className="hidden relative mr-3 md:mr-0 md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/create"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Create
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:text-gray-50 md:p-0 dark:text-white"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
