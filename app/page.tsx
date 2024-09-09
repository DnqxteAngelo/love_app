'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, HeartCrack } from 'lucide-react'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="mt-4 text-2xl font-bold">Do you love me?</h1>
      <Image
        src="/images/please.gif"
        alt="Please GIF"
        width={300}
        height={300}
      />
      <div className='flex gap-x-4 mt-8'>
        <button className='p-2 border rounded-2xl w-[100px] bg-black text-white'>
          <Link href='/yespage'>
            <div className='flex gap-x-2 items-center justify-center'>
              <Heart size={22} color="red" fill="red" />
              <div className='text-lg'>Yes</div>
            </div>
          </Link>
        </button>
        <button className='p-2 border rounded-2xl w-[100px] bg-black text-white'>
          <Link href='/nopage'>
            <div className='flex gap-x-2 items-center justify-center'>
            <HeartCrack size={22} color="red" />
              <div className='text-lg'>No</div>
            </div>
          </Link>
        </button>
      </div>
    </main>
  )
}