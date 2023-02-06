import { useState } from 'react'
import './styles/global.css'

import { MagnifyingGlassPlus } from 'phosphor-react'
import Logo from './assets/Logo.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={Logo} alt="Logo" />

      <h1 className='text-6xl text-white font-black mt-20 '>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui!
      </h1>

      <div
      className='grid grid-cols-6 gap-6 mt-16'
      >
        <a className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />

        <div className='w-full pt- pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>League of Legends</strong>
          <span className='text-zinc-300 text-sm block'>4 anúncios</span>
        </div>
        </a>
        <a>
          <img src="/image2.png" alt="" />
        </a>
        <a>
          <img src="/image3.png" alt="" />
        </a>
        <a>
          <img src="/image7.png" alt="" />
        </a>
        <a>
          <img src="/image5.png" alt="" />
        </a>
        <a>
          <img src="/image6.png" alt="" />
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
       <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-sm block text-zinc-300'>Crie um anúncio e encontre um parceiro</span>
        </div>
        
        <button
        className='bg-violet-500 text-white font-bold py-3 px-4 hover:bg-violet-600 rounded-lg mt-4 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio
          </button>
       </div>
      </div>
    </div>
  )
}

export default App
