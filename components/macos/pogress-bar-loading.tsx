'use client'
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import AppleLogo from '@/public/apple-logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProgressBar() {
    const router = useRouter()

    const handleLoadingComplete = useCallback(() => {
        router.replace('/macos')
    }, []);

    return (
        <div className="flex flex-col gap-10 justify-center items-center h-screen">
            <Image src={AppleLogo} priority width={100} height={100} alt={"Apple logo"} />
            <div className="relative w-96 mt-10 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-gray-300 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    onAnimationComplete={() => handleLoadingComplete()} // Chama a função quando a animação completa
                />
            </div>
        </div>
    );
};