import React from "react";

const LayoutWithBg = ({ children }: {  children: React.ReactNode }) => {
    return (
        <section className="flex-grow bg-white">
            <div className=" w-full lg:grid lg:grid-cols-12 overflow-hidden">
                {/* Image Section - Hidden on mobile, shown on lg screens */}
                <section className="hidden lg:block lg:col-span-5 xl:col-span-6 relative">
                    <div 
                        className="h-[calc(100vh-73px)] w-full bg-cover bg-center bg-no-repeat"
                        style={{ 
                            backgroundImage: 'url(/assets/images/bg1.png)',
                            position: 'fixed',
                            width: '50%',
                            backgroundPosition: 'bottom center',
                        }}
                    >
                        <div className="relative h-full bg-black bg-opacity-40">
                            <div className="py-12 md:py-24 md:px-5 xl:px-[145px] text-white">
                                <h2 className="text-2xl lg:text-[28px] font-bold font-sans">
                                    Teach and earn with <br /> TutorDem
                                </h2>

                                <h6 className="mt-4 lg:mt-8 text-sm lg:text-[16px] leading-relaxed">
                                    Create gamified quizzes becomes simple
                                </h6>

                                <div className="flex items-center space-x-2 mt-6">
                                    <div className="bg-white p-2 w-4 h-4 rounded-full flex items-center justify-center">
                                        <div className="border-primary-500 border-2 bg-white p-1 rounded-full w-2 h-2" />
                                    </div>
                                    {[0, 1].map((index) => (
                                        <div key={index} className="bg-white p-1 w-2 h-2 rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <main className="lg:col-span-7 xl:col-span-6 font-sans">
                    <div className="px-4 lg:px-[145px] mx-auto mt-16">
                        {children}
                    </div>
                </main>
            </div>
        </section>
    );
}

export default LayoutWithBg;