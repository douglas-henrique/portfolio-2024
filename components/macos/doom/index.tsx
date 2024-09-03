import { useEffect, useState } from 'react'
import Draggable from 'react-draggable';
import { AppWindowsProps } from '@/app/macos/page'
import { motion } from 'framer-motion';
export default function Doom({ onClose }: AppWindowsProps) {
  const [isMaximized, setIsMaximized] = useState(false)

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }


  return (
    <motion.div
      drag
      dragElastic={0.2}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-100 flex flex-col self-center mx-auto rounded-lg shadow-xl overflow-hidden ${isMaximized ? 'h-full w-full' : 'w-[700px] h-[480px]'}`}>
      <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-2">
          <button className="w-3 h-3 rounded-full bg-red-500" onClick={onClose} />
          <button className="w-3 h-3 rounded-full bg-yellow-500" />
          <button className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-grow text-center text-sm font-medium text-gray-700 hover:cursor-default" onDoubleClick={handleMaximize}>Doom</div>
      </div>


      {/* Área de conteúdo */}
      <div className="flex-grow bg-white overflow-auto">
        <iframe src='https://js-doom.vercel.app/' className='w-full h-full'></iframe>
      </div>
    </motion.div>
  )
}
