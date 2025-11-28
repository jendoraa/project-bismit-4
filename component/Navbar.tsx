import Image from "next/image";
import Link from "next/link";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="flex flex-start px-5 py-5 relative w-full h-16 bg-white">
      <div className="mr-auto flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/Logo.png" alt="Logo Website" width={40} height={52} />
        <Image src="/LogoName.png" alt="Brand Website" width={106} height={30} />
        </Link>
      </div>

      <div className="flex flex-row justify-between items-center w-218 h-6 text-blue-600 text-lg font-2xl font-Inter font-medium">
          <Link href="/latest">Latest</Link>
          <Link href="/academic">Academic</Link>
          <Link href="/scholarship">Scholarship</Link>
          <Link href="/competition">Competition</Link>
          <Link href="/organization">Organization</Link>
          <Link href="/events">Events</Link>
      </div>

      <div className="ml-auto flex items-center w-28 justify-between">
          <Link href="/#search"> <Image src="/search.svg" alt="Search" width={30} height={30} /> </Link>
          <Link href="/bookmark"> <Image src="/bookmark.svg" alt="Bookmark" width={30} height={30} /> </Link>
          <Link href="/profile"> <Image src="/profile.svg" alt="Profile" width={30} height={30} /> </Link>
      </div>
    </nav>
  );
}
