
import { useNavigate } from "react-router-dom";
import Logo from "../../images/13.jpg";

function LandingPage(){
    const navigate = useNavigate();

    return(
        <>
            <section id="home" className="pt-48 pb-48 bg-light">
                <div className="container mx-auto">
                    <div className="flex text-center flex-wrap">
                        <div className="w-full self-center px-4 md:w-full">
                            <div className="w-full justify-center flex">

                            <img src={Logo} width={70} className=" rounded-2xl" alt="" />
                            </div>
                            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl"> <span
                                className="font-bold text-black lg:text-[6rem] md:text-[4rem] sm:text-[3rem]">Tes Perkalian Dasar.</span></h1>
                            {/* <h2 className="font-bold text-gray-500 mt-3">FrontEnd Web Developer</h2> */}
                            <p className="font-bold text-2xl text-gray-500 mb-2">Dibuat untuk melatih perhitungan anda</p>
                            <div className="flex w-full text-center justify-center py-2">
                                <p className="font-medium text-lg text-gray-600 max-w-xl mx-auto pb-3">
                                    <i>"Jika ada yang bisa kamu lakukan hari ini, lakukan itu. jangan tunggu hingga besok"</i></p>
                            </div>
                            <button className="mt-2"><a href=""
                                className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-7 border border-primary hover:bg-black rounded-4xl" onClick={() => navigate('/tes')}>Mulai</a>
                            </button>



                        </div>
                        {/* <div className="w-full self-end px-4 md:w-1/2">
                            <div className="mb-5 md:mb-4 lg:right-0">
                                <Img src="src/img/max-verstappen.5cbb2991.png" width="350px" alt=""
              className="w-max-full mx-auto ">
                            </div>

                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;