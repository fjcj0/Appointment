import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contactus'
        }
    ]
    return (
        <div className='flex items-center justify-between p-3 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src={'/assets/images/Logo.png'} width={150} height={150} alt='Logo' />
                <ul className='md:flex gap-6 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li className='hover:text-lime-600 cursor-pointer hover:scale-105 transition-all ease duration-300 font-medium'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
    )
};
export default Header;