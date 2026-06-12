import Image from 'next/image'
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#f2ebe3]">
      {/* Card */}
      <div className='flex flex-row max-w-2xl rounded-xl overflow-hidden max-sm:w-[375px]'>
        {/* Image Section */}
        <div className='flex-1 relative hidden md:block'>
          <Image src="/image-product-desktop.jpg" fill alt='Product Image' />
        </div>
        {/* Text Section */}
        <div className='flex flex-col p-8 flex-1 gap-4 bg-white'>
          <p className="font-['Montserrat'] font-[500] text-sm text-[#6c7289] tracking-[0.5em] uppercase">Perfume</p>
          <p className='font-[700] font-[Fraunces] text-4xl text-[#1c232b] leading-tight'>Gabrielle Essence Eau De Parfum</p>
          <p className='font-[Montserrat] text-[#6c7289] text-[14px] leading-6'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='flex items-center gap-4 my-2'>
            <span className='text-[#3c8067] font-[Fraunces] text-3xl font-bold'>$149.99</span>
            <span className='text-[#6c7289] font-[Montserrat] text-[14px] line-through'>$169.99</span>
          </div>
          <button className='bg-[#3c8067] hover:bg-[#1a4032] hover:cursor-pointer text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors'><AiOutlineShoppingCart />Add to Cart</button>
        </div>
      </div>
    </main>
  )
}