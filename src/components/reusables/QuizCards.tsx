"use client";
import Image from "next/image";

function svgIcon({ icon, size, height }: { icon: string; size: number, height?: number }) {
  return (
    <Image
      src={`/assets/icons/${icon}.png`}
      alt="icon"
      width={size}
      height={height || size}
    />
  );
}

const QuizCards = () => {
    return (
        <div className="px-5 xl:px-[136px]">
            <span className="capitalize font-semibold text-base/[22.4px] md:text-lg/[25.2px] text-neutral-900 ">
            Your Quiz
            </span>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 font-sans">
                <div className="col-span-1 border-[0.5px] bg-neutral-950 border-neutral-200 rounded-[8px] p-6 space-y-3">
                    <div className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400 capitalize flex justify-start space-x-3">
                        <span className="">
                        {svgIcon({ icon: "trophy-color", size: 39 })}
                        </span>
                        <div className="text-white">
                            <span className="font-semibold">Last quiz</span> <br />
                            
                            <div className="flex gap-2 items-center">
                                <span className="text-neutral-400 text-sm">Mathematics</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-hotShot-400 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-hotShot-500"></span>
                                </span>
                                <span className="text-neutral-400 text-sm tracking-tighter"><b className="text-success-500">30</b>/40</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
                    <div className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400 capitalize flex justify-start space-x-2">
                        <span className="">
                        {svgIcon({ icon: "fx-yellow", size: 39 })}
                        </span>
                        <div className="text-neutral-950">
                            <span className="font-semibold">Statistics Math quiz</span> <br />
                            
                            <div className="flex items-center text-xs gap-1">
                                <span className="text-neutral-400 text-sm">Maths</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-neutral-950"></span>
                                </span>
                                <span className="text-neutral-400 text-sm tracking-tighter">40 questions</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
                    <div className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400 capitalize flex justify-start space-x-2">
                        <span className="">
                        {svgIcon({ icon: "fx-primary", size: 39 })}
                        </span>
                        <div className="text-neutral-950">
                            <span className="font-semibold">WAEC 2020 quiz</span> <br />
                            
                            <div className="flex items-center text-xs gap-1">
                                <span className="text-neutral-400 text-sm">English</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-neutral-950"></span>
                                </span>
                                <span className="text-neutral-400 text-sm tracking-tighter">40 questions</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-span-1 border-[0.5px] border-neutral-200 rounded-[8px] p-6 space-y-3">
                    <div className="font-normal text-[11px]/[15.4px] md:text-sm/[19.6px] text-neutral-400 capitalize flex justify-start space-x-2">
                        <span className="">
                            {svgIcon({ icon: "fx-primary", size: 39 })}
                        </span>
                        <div className="text-neutral-950">
                            <span className="font-semibold">Organic Chemistry quiz</span> <br />
                            
                            <div className="flex items-center text-xs gap-1">
                                <span className="text-neutral-400">Chemistry</span>
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-neutral-950 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-neutral-950"></span>
                                </span>
                                <span className="text-neutral-400 text-sm tracking-tighter">40 questions</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizCards;