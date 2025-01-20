import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-secondary text-gray-200">
      <div className="flex justify-between px-6 py-1">
        <div className="text-gray-200">Evan Monroe</div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:scale-110 transform transition-transform duration-300">
                About Me
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Professional Experience
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Projects
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:scale-110 transform transition-transform duration-300">
                Hobbies and Interests
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
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
