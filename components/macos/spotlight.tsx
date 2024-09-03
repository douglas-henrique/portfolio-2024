'use client'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { iconsList } from "./dock"

import { useState, useEffect } from "react"

interface SpotlightProps {
    onAppSelect: (appName: string) => void
}

export default function Spotlight({ onAppSelect }: SpotlightProps) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput   placeholder="Spotlight Search" />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {
                        iconsList.map((element, index) => <CommandItem key={index} className="text-white" onClick={() => { onAppSelect(element.label) }}>{element.label}</CommandItem>)
                    }
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
