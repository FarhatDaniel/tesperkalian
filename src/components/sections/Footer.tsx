function Footer() {
    return (
        <>
            <footer className="bg-dark pt-24 pb-12 bg-slate-900">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                            <h2 className="font-bold text-4xl text-white mb-5">Farhat Putra</h2>
                            <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
                            <p>farhatputra06@gmail.com &#169; 2025</p>
                            <p>Dsn. Babakan Citepok Desa Citepok Kec. Paseh</p>
                            <p>Sumedang</p>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3">
                            <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                            <ul className="text-slate-300">
                                <li>
                                    <a href="" className="inline-block text-base hover:text-primary2 mb-3">Programming</a>
                                </li>
                                <li>
                                    <a href="" className="inline-block text-base hover:text-primary2 mb-3">Setup</a>
                                </li>
                                <li>
                                    <a href="" className="inline-block text-base hover:text-primary2 mb-3">Motorcycle</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3">
                            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
                            <ul className="text-slate-300">
                                <li>
                                    <a href="#home" className="inline-block text-base hover:text-primary2 mb-3">Beranda</a>
                                </li>
                                <li>
                                    <a href="#about" className="inline-block text-base hover:text-primary2 mb-3">Tentang saya</a>
                                </li>
                                <li>
                                    <a href="#portopolio" className="inline-block text-base hover:text-primary2 mb-3">Portopolio</a>
                                </li>
                                <li>
                                    <a href="#Client" className="inline-block text-base hover:text-primary2 mb-3">Client</a>
                                </li>
                                <li>
                                    <a href="#blog" className="inline-block text-base hover:text-primary2 mb-3">Blog</a>
                                </li>
                                <li>
                                    <a href="#contact" className="inline-block text-base hover:text-primary2 mb-3">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full pt-10 border-t border-slate-600">
                        <p className="font-medium text-sm text-slate-500 text-center">Dibuat oleh farhat putra, menggunakan tailwind CSS</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;