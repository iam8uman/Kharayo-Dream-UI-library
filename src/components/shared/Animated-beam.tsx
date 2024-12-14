'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef, useRef } from 'react';
import { AnimatedBeam, Circle } from './Beam';
import { IconBrandFramer, IconBrandNextjs, IconBrandTypescript } from '@tabler/icons-react';
import { Framer, Linkedin, Twitter } from 'lucide-react';
import { InstagramLogoIcon } from '@radix-ui/react-icons';



export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className='relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl'
      ref={containerRef}
    >
      <div className='flex h-full w-full flex-col items-stretch justify-between gap-10'>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div1Ref}>
            <IconBrandTypescript />
          </Circle>
          <Circle ref={div5Ref} className='p-2'>
            <IconBrandFramer />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div2Ref} className='p-2'>
            <Framer />
          </Circle>
          <Circle ref={div4Ref} className='h-16 w-16 p-3'>
            <Twitter />
          </Circle>
          <Circle ref={div6Ref} className='p-2'>
            <InstagramLogoIcon />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div3Ref} className='p-2'>
            <IconBrandNextjs />
          </Circle>
          <Circle ref={div7Ref} className='p-2'>
            <Linkedin />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        dotted
        gradientStartColor='#00ac47'
        gradientStopColor='#ffba00'
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        dotted
        gradientStartColor='#d948ae'
        gradientStopColor='#5b60ff'
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        gradientStartColor='#48b0d9'
        gradientStopColor='#67aeff'
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        dotted
        gradientStartColor='#00ac47'
        gradientStopColor='#4fcc5d'
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        dotted
        gradientStartColor='#48b0d9'
        gradientStopColor='#67aeff'
      />
    </div>
  );
}
