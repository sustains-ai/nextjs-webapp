'use client'
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Portfolios', href: '/dashboard/portfolios', icon: DocumentDuplicateIcon },
  { name: 'Stocks', href: '/dashboard/stocks', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
              <Link
                  key={link.name}
                  href={link.href}
                  className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 
              ${pathname === link.href ? 'bg-[#0ABF53] text-white' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'}`}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
          );
        })}
      </>
  );
}
