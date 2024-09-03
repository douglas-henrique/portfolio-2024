'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Plus, LayoutGrid } from "lucide-react"
import Draggable from 'react-draggable'; // The default
import { AppWindowsProps } from '@/app/macos/page'

export default function Finder( { onClose }: AppWindowsProps ) {
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
        <Draggable>
            <div className={`bg-gray-100 rounded-lg shadow-xl overflow-hidden ${isMaximized ? 'fixed inset-0 mt-10' : 'w-[600px] h-[400px]'}`}>
                {/* Barra de título */}
                <div className="bg-gray-200 px-4 py-2 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" />
                        <button onClick={handleMinimize} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
                        <button onClick={handleMaximize} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
                    </div>
                    <div className="text-center flex-grow text-sm font-medium text-gray-700">Finder</div>
                    <div className="w-16" /> {/* Espaço para equilibrar o layout */}
                </div>

                {/* Barra de ferramentas */}
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

                {/* Área de conteúdo */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Meus Arquivos</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                    {/* <FolderIcon className="h-8 w-8 text-blue-500" /> */}
                                </div>
                                <p className="text-sm text-gray-600">Pasta {i + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Draggable>
    )
}