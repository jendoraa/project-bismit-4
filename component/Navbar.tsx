import Image from "next/image";
import Link from "next/link";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="flex flex-start px-4 py-4 relative w-full h-16 bg-white">
      <div className="mr-auto flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/Logo.png" alt="Logo Website" width={40} height={52} />
        <Image src="/LogoName.png" alt="Brand Website" width={106} height={30} />
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-row items-center gap-8 text-blue-600 text-lg font-medium font-Inter">
          <Link href="/latest">Latest</Link>
          <Link href="/academic">Academic</Link>
          <Link href="/scholarship">Scholarship</Link>
          <Link href="/competition">Competition</Link>
          <Link href="/organization">Organization</Link>
          <Link href="/events">Events</Link>
      </div>

      <div className="ml-auto flex items-center gap-3">
          <Link href="/#search"> <Image src="/search.svg" alt="Search" width={40} height={40} /> </Link>
          <Link href="/bookmark"> <Image src="/bookmark.svg" alt="Bookmark" width={40} height={40} /> </Link>
          <Link href="/profile"> <Image src="/profile.svg" alt="Profile" width={40} height={40} /> </Link>
      </div>
    </nav>
  );
}
