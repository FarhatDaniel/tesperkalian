function Tabel(){
    const angka = [1,2,3,4,5,6,7,8,9,10];

    return(
        <>
            <div className="p-3 flex flex-wrap justify-center gap-4 mt-40 mb-40">
                {angka.map((a) => (
                    <div key={a} className="mb-3 lg:w-1/6 md:w-1/4 sm:w-1/3 w-full">
                        <h3 className="font-bold">Perkalian {a}</h3>
                        <div className="p-5 rounded text-xl font-bold shadow-lg">
                            {angka.map((b) => (
                                <div key={b}>
                                    {a} × {b} = {a * b}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tabel;