import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#f2ebe3]">
      {/* Card */}
      <div className='flex flex-row justify-center items-center border-4 border-yellow-500 max-w-2xl'>
        {/* Image Section */}
        <div className='w-full h-full object-cover flex-1'>
          <Image src="/image-product-desktop.jpg" width={300} height={300} alt='Product Image' />
        </div>
        {/* Text Section */}
        <div className='flex flex-col w-1/2 p-8 flex-1'>
          <p className="font-['Montserrat'] font-[500] text-md text-[#6c7289] tracking-[0.5em] uppercase mb-25">Perfume</p>
          <p className='font-[700] font-[Fraunces] text-3xl w-[13rem]'>Gabrielle Essence Eau De Parfum</p>
          <p className='font-[Montserrat] text-[#6c7289] text-[14px] font-[500]'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
          <p className='text-[#3c8067] font-[Fraunces] text-3xl'>$149.99 <span className='text-[#6c7289] font-[Montserrat] text-[14px] line-through'>$169.99</span></p>
          <button className='mt-auto'>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}