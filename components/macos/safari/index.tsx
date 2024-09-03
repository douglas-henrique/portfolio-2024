import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, RotateCcw, Share2 } from "lucide-react"
import Image from 'next/image'
import DougAvatar from '@/public/doug-head.webp'
import { AppWindowsProps } from '@/app/macos/page'
import { motion } from "framer-motion"

export default function Safari({ onClose }: AppWindowsProps) {
  const [url, setUrl] = useState('https://dougdev.vercel.app/')
  const [isLoading, setIsLoading] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }
  const shareData = {
    title: "Portoflio",
    text: "Douglas Henrique | Full stack developer",
    url
  }

  const handleNavigate = (newUrl: string) => {
    setIsLoading(true)
    setUrl(newUrl)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
      <motion.div
        drag
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`  bg-gray-100 flex flex-col self-center mx-auto rounded-lg shadow-xl overflow-hidden ${isMaximized ? 'h-full w-full' : 'w-[1200px] h-[600px]'}`}>
        <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-2">
            <button className="w-3 h-3 rounded-full bg-red-500" onClick={onClose} />
            <button className="w-3 h-3 rounded-full bg-yellow-500" />
            <button className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-grow text-center text-sm font-medium text-gray-700 hover:cursor-default" onDoubleClick={handleMaximize}>Safari</div>
        </div>

        <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center space-x-4">
          <Button variant="ghost" size="icon" disabled onClick={() => handleNavigate(url)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" disabled onClick={() => handleNavigate(url)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleNavigate(url)}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <div className="flex-grow relative">
            <Input
              className="w-full pl-8 pr-4 py-1 rounded-full bg-gray-100"
              value={url}
              disabled
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleNavigate(url)}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image src={DougAvatar} className='rounded-full' height={15} width={15} alt={'Douglas Henrique photo'} />
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={async () => {
            if (navigator.canShare(shareData)) {

              await navigator.share(shareData)
            }
          }}>
            <Share2 className="h-4 w-4" />
          </Button>

        </div>

        <div className="flex-grow bg-white overflow-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <iframe src={url} className='w-full h-full' title="W3Schools Free Online Web Tutorials"></iframe>
          )}
        </div>
      </motion.div>
  )
}
