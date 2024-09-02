import { useEffect, useState } from "react"

interface LoadingDots {
    isLoading: boolean
}

export default function LoadingDots({ isLoading }: LoadingDots) {
    const [dots, setDots] = useState(0);
    const maxDots = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots + 1) % (maxDots + 1));
        }, 500); // 500ms intervalo para adicionar pontos

        // Limpeza do intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []); // Dependência vazia para garantir que o useEffect seja chamado apenas uma vez

    return (
        <div className="min-w-[30px]">
            {
                isLoading ? '.'.repeat(dots) : `...`
            }

        </div>
    );
}