import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-secondary text-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between px-6 py-3">
        <div className="text-gray-200">Evan Monroe</div>
        <ul className="flex space-x-8">
          <li>
            <Link href="#home">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <div className="hover:scale-110 transform transition-transform duration-300">
                About Me
              </div>
            </Link>
          </li>
          <li>
            <Link href="#experience">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Experience
              </div>
            </Link>
          </li>
          <li>
            <Link href="#other-interests">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Other Interests
              </div>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
