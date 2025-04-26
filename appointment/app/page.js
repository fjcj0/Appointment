import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from 'react';
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySearch />
    </div>
  )
};
export default Home;