import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [disabled, classButton] = useState(false);
  
  useEffect(() => {
    const lastPage = document.getElementsByClassName('lastPage');

    lastPage;
    classButton(true);
  });

  return (
    <div>
      <nav></nav>
        <div>
          <h1>DInoSaurs for your pleasure</h1>
          <h4>A simple blog</h4>
        </div>
        <div className='carpeta'>
          <div className='pages'>
            <div className='Zhenyuanlong'>
              <h1 className=''>Zhenyuanlong</h1>
              <p className=''>
              Zhenyuanlong suni es la única especie conocida del género extinto Zhenyuanlong de dinosaurio terópodo dromeosáurido, que vivió a principios del período Cretácico, 
              hace aproximadamente 125 millones de años, en el Aptiense, en lo que es hoy Asia.
              </p>              
            </div>
            <div className='Dinosaurio hidden'>
              <h1 className=''>Dinosaurio</h1>
              <p className=''>
              Dinosaurio suni es la única especie conocida del género extinto Dinosaurio de dinosaurio terópodo dromeosáurido, que vivió a principios del período Cretácico, 
              hace aproximadamente 125 millones de años, en el Aptiense, en lo que es hoy Asia.
              </p>              
            </div>
            <div className='Dinosaurio hidden'>
              <h1 className=''>Dinosaurio</h1>
              <p className=''>
              Dinosaurio suni es la única especie conocida del género extinto Dinosaurio de dinosaurio terópodo dromeosáurido, que vivió a principios del período Cretácico, 
              hace aproximadamente 125 millones de años, en el Aptiense, en lo que es hoy Asia.
              </p>              
            </div>
            <div className='Dinosaurio hidden'>
              <h1 className=''>Dinosaurio</h1>
              <p className=''>
              Dinosaurio suni es la única especie conocida del género extinto Dinosaurio de dinosaurio terópodo dromeosáurido, que vivió a principios del período Cretácico, 
              hace aproximadamente 125 millones de años, en el Aptiense, en lo que es hoy Asia.
              </p>              
            </div>
            <div className='Dinosaurio hidden lastPage'>
              <h1 className=''>Dinosaurio</h1>
              <p className=''>
              Dinosaurio suni es la única especie conocida del género extinto Dinosaurio de dinosaurio terópodo dromeosáurido, que vivió a principios del período Cretácico, 
              hace aproximadamente 125 millones de años, en el Aptiense, en lo que es hoy Asia.
              </p>              
            </div>
            { disabled ? <button className='disabled' id='nextPage'> Seguir </button> : <button id='nextPage'> Seguir </button> }
          </div>
        </div>
      <footer></footer>
    </div>
  )
}
