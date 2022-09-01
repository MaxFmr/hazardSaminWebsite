function PageBannerTwo() {
    return (
        <div className='page-banner bg-page-banner-2 flex items-center justify-start h-[950px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-30 before:w-full before:h-full'>
            <div className='custom-container container pt-[90px]'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2'>
                        <div className='year relative text-white'>
                            <span>2022</span>
                        </div>
                    </div>
                    <div className='col-span-10'>
                        <div className='banner-content relative'>
                            <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block mb-[310px]'>
                                Nordic interior studio
                            </span>
                            <h2 className='text-[100px] leading-[110px] text-white max-w-[680px]'>
                                Copper Brass & Rustic
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBannerTwo;
