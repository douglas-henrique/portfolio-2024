// components/AudioPlayer.tsx

import { useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio('/macos/sounds/macbook.mp3');
        audioRef.current.preload = 'auto'
        audioRef.current.load()
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Ajuste o volume conforme necessário
        }

        const playClickSound = () => {
            if (audioRef.current) {
                audioRef.current.currentTime = 0; // Reinicia o áudio
                audioRef.current.play();
            }
        };

        document.addEventListener('click', playClickSound);

        return () => {
            document.removeEventListener('click', playClickSound);

        };
    }, []);

    return null
};

export default AudioPlayer;
