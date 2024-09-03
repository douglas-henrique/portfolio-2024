'use client'
import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

interface IconListProps {
    img: string
    label: string
}

interface DockProps {
    onAppSelect: (appName: string) => void
}

export default function Dock({ onAppSelect }: DockProps) {

    let mouseX = useMotionValue(Infinity);

    const iconsList: IconListProps[] = [
        {
            label: 'Finder',
            img: '/macos/finder.svg'
        },
        {
            label: 'Safari',
            img:'/macos/safari.svg'
        }
    ]

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="mx-auto border border-[#1A1A1A06] flex h-16 items-end gap-4 rounded-2xl bg-[#F6F6F636] px-4 pb-3 drop-shadow-md backdrop-blur-3xl				"
        >
            {iconsList.map((element) => (
                <AppIcon mouseX={mouseX} key={element.label} icon={element} onClick={() => onAppSelect(element.label)} />
            ))}
        </motion.div>
    );
}

function AppIcon({ mouseX, icon, onClick }: { mouseX: MotionValue, icon: IconListProps, onClick: () => void }) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, backgroundImage: `url(${icon.img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: 'white' }}
            className="aspect-square w-10 rounded-xl bg-gray-400"
            onClick={onClick}
        />
    );
}
