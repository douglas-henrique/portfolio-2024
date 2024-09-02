'use client'
import Dock from "@/components/macos/dock"
import Finder from "@/components/macos/finder"
import Safari from '@/components/macos/safari'
import { ReactNode, useEffect, useState } from "react"

const apps: { [key: string]: JSX.Element } = {
    "Finder": <Finder />,
    "Safari": <Safari />
}

export default function MacOS() {
    const [appWindows, setAppWindows] = useState<string[]>([])

    return (
        <main className="flex bg-cover bg-center bg-no-repeat h-screen w-screen" style={{ backgroundImage: "url('/macos/background.jpg')" }}>
            <div className="absolute top-0 h-10 w-full border align-bottom"></div>

            {
                appWindows.map(element => element && apps[element])
            }

            <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2">
                <Dock onAppSelect={(name: string) => {
                    console.log(name)
                    setAppWindows([...appWindows, name])
                }} />
            </div>
        </main>
    )
}