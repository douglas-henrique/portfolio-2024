'use client'
import Dock from "@/components/macos/dock"
import Finder from "@/components/macos/finder"
import Safari from '@/components/macos/safari'
import Toolbar from "@/components/macos/toolbar"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AudioPlayer from "@/components/macos/AudioPlayer"
import Spotlight from "@/components/macos/spotlight"
import Doom from "@/components/macos/doom"
import Image from "next/image"
export interface AppWindowsProps {
    name: string
    uuid?: string
    onClose?: () => void
}

const apps: { [key: string]: React.FC<AppWindowsProps> } = {
    "Finder": Finder,
    "Safari": Safari,
    "Doom": Doom
}

export default function MacOS() {
    const [appWindows, setAppWindows] = useState<AppWindowsProps[]>([])

    useEffect(() => {
        setAppWindows([...appWindows, { name: 'Safari', uuid: uuidv4() }])
    }, [])

    return (
        <main className="flex   h-screen w-screen"  >
            <Image
                src="/macos/background.jpg" // Substitua pelo caminho da sua imagem
                alt="Background Image"
                layout="fill"
                priority
                objectFit="cover"
                className="-z-10" // Garante que a imagem fique atrás do conteúdo
            />
            <Toolbar />
            <div className="flex mt-8 flex-1 max-w-full text-black relative overflow-hidden">

                {appWindows.map(element => {
                    const AppWindow = apps[element.name];
                    return AppWindow ? (
                        <AppWindow key={element.name} onClose={() => setAppWindows(appWindows.filter(x => x.uuid != element.uuid))} name={element.name} />
                    ) : null;
                })}

                <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2">
                    <Dock onAppSelect={(name) => {
                        setAppWindows([...appWindows, { name, uuid: uuidv4() }])
                    }} />
                </div>

            </div>

            <Spotlight onAppSelect={(name) => {
                setAppWindows([...appWindows, { name, uuid: uuidv4() }])
            }} />
            <AudioPlayer />
        </main>
    )
}