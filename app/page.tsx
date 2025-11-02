'use client'

import React from 'react';
import NewHero from '@/components/sections/NewHero';
import SimpleServices from '@/components/sections/SimpleServices';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Process from '@/components/sections/Process';
import SimpleCTA from '@/components/sections/SimpleCTA';

export default function HomePage() {
  return (
    <>
      <NewHero />
      <SimpleServices />
      <FeaturedProjects />
      <Process />
      <SimpleCTA />
    </>
  );
}
