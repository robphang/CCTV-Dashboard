import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className='flex items-center gap-6 justify-end w-full'>
        <div className='flex flex-col'>
          <span className="text-s leading-3 font-medium">John Doe</span>
          <span className="text-xs text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/customers/amy-burns.png" alt="" width={50} height={50} className="rounded-full"/>
      </div>
  );
}
