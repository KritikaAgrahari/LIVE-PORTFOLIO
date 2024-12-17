import '@mantine/core/styles.css';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { MantineProvider, createTheme } from '@mantine/core';
import { pdfjs } from 'react-pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  useEffect(()=>{
    AOS.init();
  },
  []);

//for reponsiveness added
 const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });




  return (
    <MantineProvider >
      <HomePage />
    </MantineProvider>

  );
}

export default App;
