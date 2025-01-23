import Link from "next/link";

const navItems = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Other Interests", link: "#other-interests" },
  { title: "Contact", link: "#contact" },
];

export const NavBar = () => {
  return (
    <nav className="bg-navBackground text-gray-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-10 py-1">
        <div className="text-gray-200">Evan Monroe</div>
        <ul className="flex gap-16">
          {navItems.map((item) => (
            <li>
              <Link href={item.link}>
                <div className="hover:bg-navHover px-4 py-2 rounded-md">
                  <div className="">{item.title}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
