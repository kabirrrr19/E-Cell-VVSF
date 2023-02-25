import Style from "./Team.module.css"
export default function Team() {
    const st = {
      backgroundColor: "rgba(2, 20, 32, 0.96)",
    };
    return (
        <>
            <div id="team" style={st}>
                
                <div className={` text-center pt-10`}>
                    <span className=" text-4xl text-white ">A glimpse of our Team </span>
                </div>
                
                <div className={`flex py-14 pb-20 items-center justify-center `}>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <div className="mb-10">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Vidit Sheth
                            </h1>
                            <p className="underline w-full bg-transparent shadow-sm py-2 px-3.5 font-com tracking-widest text-sm capitalize text-white shadow shadow-black/60">
                                Chairperson
                            </p>
                            </div>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis dolore adipisci placeat.
                            </p>
                        </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <div className="mb-10">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Atul Mishra
                            </h1>
                            <p className="underline w-full bg-transparent shadow-sm py-2 px-3.5 font-com tracking-widest text-sm capitalize text-white shadow shadow-black/60">
                                President
                            </p>
                            </div>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis dolore adipisci placeat.
                            </p>
                        </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <div className="mb-10">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Nidhi Mehta
                            </h1>
                            <p className="underline w-full bg-transparent shadow-sm py-2 px-3.5 font-com tracking-widest text-sm capitalize text-white shadow shadow-black/60">
                                Secretary
                            </p>
                            </div>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis dolore adipisci placeat.
                            </p>
                        </div>
                        </div>

                        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <div className="mb-16">
                            <h1 className="font-dmserif text-3xl font-bold text-white">
                                Kaustubh Pandit
                            </h1>
                            <p className="underline w-full bg-transparent shadow-sm py-2 px-3.5 font-com tracking-widest text-sm capitalize text-white shadow shadow-black/60">
                                Treasurer
                            </p>
                            </div>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Facilis dolore adipisci placeat.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                
                    
            </div>
        </>
    );
}