import { Button } from '@/components/ui/button';
import React from 'react';
const Hero = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                            <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                                Your Health,Just a Click Away
                            </h2>
                            <p className="mt-4 text-gray-700">
                                Search,Compare,and book appointments with top doctors anytime,anywhere. Access quality healthcare from the comfort of your home.
                            </p>
                            <Button className={'font-bold my-5'}>Explore Now</Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
                            className="rounded"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;