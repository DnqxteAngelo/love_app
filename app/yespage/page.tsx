'use client'

import Image from 'next/image'

export default function YesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Aww, I love you more!!
        </h1>
        <p className="text-xl font-light mb-8">
          Here&apos;s some love
        </p>
        <div className="mb-8">
          <Image
            src="/images/love.gif"
            alt="Love GIF"
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  )
}