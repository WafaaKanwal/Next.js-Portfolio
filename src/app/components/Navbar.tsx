import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <Link href="/">Wafa Kanwal</Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
