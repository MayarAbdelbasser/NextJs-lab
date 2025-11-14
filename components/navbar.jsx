"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarItems = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/products", title: "Our Products" },
  { path: "/contact", title: "Contact Us" },
  { path: "/signin", title: "Sign in" },
  { path: "/csr", title: "CSR" },
  { path: "/ssr", title: "SSR" },
  { path: "/ssg", title: "SSG" },
  { path: "/isr", title: "ISR" },
  { path: "/todos", title: "Todos" },
];
function Navbar() {
  const pathName = usePathname();
  return (
    <header className="bg-amber-100">
      <div className="flex flex-column justify-around items-center">
        <Link href="/" className="text-2xl font-bold">
          Edgecut
        </Link>
        <nav>
          <ul className="flex flex-column justify-center items-center gap-30 p-5 list-none flex-wrap">
            {navbarItems.map((link) => {
              return (
                <li key={link.title}>
                  <Link
                    href={link.path}
                    className={
                      link.path === pathName
                        ? "text-amber-600 text-lg"
                        : "text-lg"
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
