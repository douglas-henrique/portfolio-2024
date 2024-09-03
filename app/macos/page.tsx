'use client'
import Dock from "@/components/macos/dock"
import Finder from "@/components/macos/finder"
import Safari from '@/components/macos/safari'
import Toolbar from "@/components/macos/toolbar"
import { useState } from "react"

const apps: { [key: string]: JSX.Element } = {
    "Finder": <Finder />,
    "Safari": <Safari />
}

export default function MacOS() {
    const [appWindows, setAppWindows] = useState<string[]>([])

    return (
        <main className="flex bg-cover bg-center bg-no-repeat h-screen w-screen" style={{ backgroundImage: "url('/macos/background.jpg')" }}>
            <Toolbar />
            <div className="flex mt-8 flex-1">

                {appWindows.map(element => element && apps[element])}

                <div className="absolute z-30 bottom-5 left-1/2 transform -translate-x-1/2">
                    <Dock onAppSelect={(name: string) => {
                        setAppWindows([...appWindows, name])
                    }} />
                </div>

            </div>

        </main>
    )
}