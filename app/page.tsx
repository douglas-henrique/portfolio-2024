'use client'
import Image from "next/image";
import LoadingInformations from "@/components/terminal/loading-informations";
export default function Home() {
  return (
    <main className="bg-black h-screen w-screen text-white">
      <LoadingInformations />
    </main>
  );
}
