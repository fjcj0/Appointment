import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const CategorySearch = () => {
    return (
        <div className='mb-10 items-center flex flex-col gap-5'>
            <h2 className='font-bold text-4xl'><span className='text-lime-600'>Search </span>Categories</h2>
            <div className='flex w-full max-w-sm items-center'>
                <Input type='text' placeholder='Search for category' />
                <Button type='submit' className={'mx-1'}>Subscribe</Button>
            </div>
        </div>
    );
};
export default CategorySearch;