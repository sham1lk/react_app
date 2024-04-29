import Link from 'next/link'
import Logo from "@/public/images/iu_logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Logo} alt="logo" width='30'/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
