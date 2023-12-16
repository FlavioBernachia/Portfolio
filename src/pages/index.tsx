/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped'; // Importa 'init' directamente desde 'ityped'
import { Sidebar } from '@/components/layout/sidebar';

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current!, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["<Frontend Developer/>", "<Fullstack jr/>", "<Designer/>"],
    });
  }, []);
 /* eslint-disable-next-line react/no-unescaped-entities */
  return (
    <>
      <div className='home'>
        <div className='home-general'>
          <div className='home-tittle'>
            <h2>Hi there, I&apos;m</h2>
            <h1>Flavio Bernachia</h1>
            <span ref={textRef}></span>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}