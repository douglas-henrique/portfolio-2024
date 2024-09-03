'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Plus, LayoutGrid } from "lucide-react"
import { AppWindowsProps } from '@/app/macos/page'
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { motion } from "framer-motion"

interface FileProps {
    name: string
    image: string
    url: string
}

const files: FileProps[] = [
    {
        name: 'my-resume-en.pdf',
        image: '/macos/pdf.png',
        url: '/resumes/resume-en.pdf'
    },
    {
        name: 'my-resume-pt.pdf',
        image: '/macos/pdf.png',
        url: '/resumes/resume-pt.pdf'
    }
]

export default function Finder({ onClose }: AppWindowsProps) {
    const [isMinimized, setIsMinimized] = useState(false)
    const [isMaximized, setIsMaximized] = useState(false)

    const handleMinimize = () => {
        setIsMinimized(!isMinimized)
    }

    const handleMaximize = () => {
        setIsMaximized(!isMaximized)
    }

    if (isMinimized) {
        return null
    }

    return (
        <motion.div
            drag
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`bg-gray-100 rounded-lg shadow-xl self-center mx-auto overflow-hidden ${isMaximized ? 'fixed inset-0 mt-10' : 'w-[600px] h-[400px]'}`}>
            <div className="bg-gray-200 px-4 py-2 flex items-center justify-between">
                <div className="flex space-x-2">
                    <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" />
                    <button onClick={handleMinimize} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
                    <button onClick={handleMaximize} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
                </div>
                <div className="text-center flex-grow text-sm font-medium text-gray-700">Finder</div>
                <div className="w-16" />
            </div>

            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Input className="flex-grow" placeholder="Buscar" />
                <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <LayoutGrid className="h-4 w-4" />
                </Button>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Meus Arquivos</h2>
                <div className="grid grid-cols-4 gap-4">
                    {files.map((element, i) => (
                        <Link key={i} href={element.url} target='_blank'>
                            <div className="text-center">
                                <div className="w-16 h-16   rounded-lg mx-auto mb-2 flex items-center justify-center">
                                    <AspectRatio ratio={1 / 1}>
                                        <Image src={element.image} height={100} width={100} alt="Image" className="rounded-md object-cover" />
                                    </AspectRatio>
                                </div>
                                <p className="text-sm text-gray-600 mt-5">{element.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}