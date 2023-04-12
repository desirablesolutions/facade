export default function FeaturedSection(props: any) {
    return (
        <section className="relative pt-20 pb-24 md:pb-20 lg:pt-32 overflow-hidden">
            <img
                className="absolute bottom-0 left-0"
                src="saturn-assets/images/features/start-left-bottom.png"
                alt=""
            />
            <img
                className="absolute bottom-1/2 right-0 transform translate-y-1/2"
                src="saturn-assets/images/features/blue-light-right.png"
                alt=""
            />
            <div className="relative container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center -mx-4 mb-24">
                        <div className="w-full lg:w-2/3 px-4 mb-16 lg:mb-0">
                            <div className="max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
                                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                                    <span>We help our client solve</span>
                                    <span className="font-serif italic">problems</span>
                                </h1>
                                <p className="max-w-xl text-2xl md:text-3xl font-semibold text-gray-400">
                                    Our platform offers the modern enterprise full control of how date
                                    can be access and used with industry leading software solutions
                                    for identity, activation, and date collaboration
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <img
                                className="w-full max-w-lg mx-auto lg:mr-0"
                                src="saturn-assets/images/features/violet-image.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100">
                            <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
                                <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-green-200">
                                    <img src="saturn-assets/images/features/icon-mouse.svg" alt="" />
                                </div>
                                <h4 className="text-2xl text-gray-900 font-semibold">
                                    Simple &amp; Uniuqe
                                </h4>
                                <p className="text-gray-500">Created by our talented designer</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 lg:border-r border-gray-100">
                            <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center border-b border-gray-100 lg:border-b-0">
                                <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-orange-300">
                                    <img src="saturn-assets/images/features/icon-point.svg" alt="" />
                                </div>
                                <h4 className="text-2xl text-gray-900 font-semibold">
                                    Well Documented
                                </h4>
                                <p className="text-gray-500">The best layer organization</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 lg:pb-5">
                            <div className="max-w-xs mx-auto text-center">
                                <div className="flex mx-auto mb-5 items-center justify-center w-15 h-15 rounded-full bg-purple-300">
                                    <img src="saturn-assets/images/features/icon-plane.svg" alt="" />
                                </div>
                                <h4 className="text-2xl text-gray-900 font-semibold">
                                    World Class UI Design
                                </h4>
                                <p className="text-gray-500">We are not tolerant about taste</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}