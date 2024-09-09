'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface NetworkInfo {
  ipAddress: string;
  network: string;
  country: string;
  latitude: string;
  longitude: string;
}

export default function NoPage() {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    ipAddress: '',
    network: '',
    country: '',
    latitude: '',
    longitude: '',
  })

  useEffect(() => {
    getNetworkInfo()
  }, [])

  const getNetworkInfo = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      if (response.ok) {
        const data = await response.json()
        const ipAddress = data.ip

        const detailResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`)
        if (detailResponse.ok) {
          const detailData = await detailResponse.json()
          setNetworkInfo({
            ipAddress,
            network: detailData.network || 'Unknown',
            country: detailData.country_name || 'Unknown',
            latitude: detailData.latitude?.toString() || '',
            longitude: detailData.longitude?.toString() || '',
          })
        }
      }
    } catch (e) {
      console.error('Error getting network info:', e)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">
          Bleh, you&apos;ve been hacked!
        </h1>
        <p className="text-xl font-light mb-8">
          You should&apos;ve loved me
        </p>
        <div className="mb-8">
          <Image
            src="/images/bleh.gif"
            alt="Bleh GIF"
            width={300}
            height={300}
          />
        </div>
        <div className="text-left">
          <p className="text-base">IP Address: {networkInfo.ipAddress}</p>
          <p className="text-base">Network: {networkInfo.network}</p>
          <p className="text-base">Country: {networkInfo.country}</p>
          <p className="text-base">Latitude: {networkInfo.latitude}</p>
          <p className="text-base">Longitude: {networkInfo.longitude}</p>
        </div>
      </div>
    </main>
  )
}