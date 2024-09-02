import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import LoadingDots from "./loading-dots";
import BlinkingCursor from './cursor-blinking'
import Link from 'next/link'
interface LoadingListProps {
    name: string
    percent: number
}

const INITIAL_LOADING_LIST: LoadingListProps[] = [
    {
        name: 'mouseUp',
        percent: 20
    },
    {
        name: 'keyboardDown',
        percent: 25
    },
    {
        name: 'keyboardDown1',
        percent: 32
    },
    {
        name: 'keyboardDown2',
        percent: 10
    },
    {
        name: 'keyboardDown3',
        percent: 54
    },
    {
        name: 'ccType',
        percent: 80
    },
    {
        name: 'startup',
        percent: 74
    }
]

const INITIAL_LOADING_STATE: string = "(10/19)"


export default function LoadingInformations() {
    const currentDay = DateTime.now().toFormat('dd/MM/yyyy').toString()
    const [loadingList, setLoadingList] = useState<LoadingListProps[]>(INITIAL_LOADING_LIST)
    const [loadingState, setLoadingState] = useState<string>(INITIAL_LOADING_STATE);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [showSelect, setShowSelect] = useState<boolean>(false)

    const showTerminal = !showSelect
    useEffect(() => {
        setTimeout(() => {
            setLoadingList(loadingList.map(element => { return { ...element, percent: element.percent + (100 - element.percent) } }))
            setLoadingState('(19/19)')
            setIsLoading(false)

            setTimeout(() => {
                setShowSelect(true)
            }, 2000)
        }, 2000)
    }, [])



    return showTerminal ? (
        <div className="flex flex-col w-[800px] h-screen p-10">
            <div className="flex flex-row">
                <h1 className="font-bold max-w-[150px]">Henrique, Douglas Inc.</h1>
                <div className="flex flex-col">
                    <span className="ml-10 font-bold ">Released: {currentDay} </span>
                    <span className="ml-10 font-bold ">DHBIOS (C) 2024 Henrique Douglas Inc.,</span>
                </div>
            </div>

            <span className="font-bold mt-10">{`HSP S13 2000-2024 Special UC131S`}</span>
            <span className="font-bold mt-4">{`HSP Showcase(tm) XX 113`}</span>
            <span className="font-bold mt-4">{`Checking RAM: 16000 OK`}</span>
            <span className="font-bold mt-4">{`LOADING RESOURCES ${loadingState}.`}</span>

            <div className="ml-10 mt-5 max-w-[400px]">
                {
                    loadingList.map((element, index) => <div key={index} className="flex font-bold flex-row justify-between">
                        <span className="  mt-4">{isLoading ? 'Loading' : 'Loaded'} {element.name}</span>
                        <span className="flex flex-row gap-5 mt-4"><LoadingDots isLoading={isLoading} /> {element.percent}%</span>
                    </div>)
                }
            </div>


            {
                !isLoading && (
                    <>
                        <div className="flex align-bottom mt-10">
                            All content loaded, launching "<b>Douglas Henrique Portfolio</b>" 1.0
                        </div>
                    </>

                )
            }

            <BlinkingCursor />

            <div className="absolute bottom-12 align-bottom">
                {`Press DEL to enter SETUP, ESC to skip memory test`}
            </div>
        </div>
    ) : <div className="flex w-screen h-screen justify-center items-center">
        <div className="max-h-[200px] w-[470px] border-4 p-5 flex flex-col">
            <span>Douglas Henrique Portfolio Showcase 2024</span>
            <span>Choose the OS you want to use  <BlinkingCursor /></span>
            <div className="flex flex-row  w-ful justify-between mt-5">
                <Link href={'/loading/macos'} className="h-16 w-32 border flex items-center justify-center hover:bg-white hover:text-black"><span className="font-bold">MAC OS</span></Link>
                <Link href={'/ubuntu'} className="h-16 w-32 border flex items-center justify-center hover:bg-white hover:text-black"><span className="font-bold" >UBUNTU</span></Link>
                <Link href={'/macos'} className="h-16 w-32 border flex items-center justify-center hover:bg-white hover:text-black"><span className="font-bold">WINDOWS</span></Link>
            </div>
        </div>
    </div>
}