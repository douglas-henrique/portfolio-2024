import Image from "next/image"
import AppleIcon from '@/public/apple-logo.svg'

import useDateTime from "@/hooks/use-date-time"
import Dash from '@/public/macos/toolbar/dash.svg'
import Search from '@/public/macos/toolbar/search.svg'
import User from '@/public/macos/toolbar/user.svg'
import Wifi from '@/public/macos/toolbar/wifi.svg'
export default function Toolbar() {

    const currentDateTime = useDateTime()

    return (
        <div className="absolute flex items-center flex-row px-4 top-0 h-[35px] bg-[#00000018] w-full  align-bottom backdrop-blur-xl ">
            <Image src={AppleIcon} height={12} width={12} alt={"Apple icon"} className=" shadow-lg " />
            <div className="flex flex-row gap-5 px-4 ">
                <button className="text-custom-apple-toolbar font-bold [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]" onClick={() => { }}><span>Finder</span></button>
                <span className="text-custom-apple-toolbar font-medium [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]">Arquivo</span>
                <span className="text-custom-apple-toolbar font-medium [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]">Editar</span>
                <span className="text-custom-apple-toolbar font-medium [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]">Visualizar</span>
            </div>

            <div className="flex flex-row  right-4 absolute gap-4 ">
                
                <Image src={Wifi} className="[text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]" alt={""}  height={15} width={15} />
                <Image src={Search} className="[text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]" alt={""}  height={15} width={15} />
                <Image src={User} className="[text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]" alt={""}  height={15} width={15} />
                <Image src={Dash} className="[text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]" alt={""}  height={15} width={15} />

            
                <span className="text-custom-apple-toolbar font-normal [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]">
                    {currentDateTime.toFormat("ccc d 'de' LLL yyyy")}
                </span>
                <span className="text-custom-apple-toolbar font-normal [text-shadow:_0_1px_4px_rgb(0_0_0_/_15%)]">
                    {currentDateTime.toFormat('HH:mm')}
                </span>

            </div>
        </div>
    )
}