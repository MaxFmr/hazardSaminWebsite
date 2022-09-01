import Link from 'next/link';

function PageBanner() {
    return (
        <div className='page-banner bg-page-banner-1 flex items-end justify-start lg:h-[950px] h-[550px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-40 before:w-full before:h-full'>
            <div className='container'>
                <div className='banner-content pb-[80px] relative'>
                    <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block'>
                        Nordic interior studio
                    </span>
                    <h2 className='sm:text-[100px] text-[30px] sm:leading-[110px] text-white max-w-[320px]'>
                        About Us
                    </h2>
                    <div className='info text-white hover:text-primary transition-all text-[14px] pt-[15px] uppercase block lm:hidden'>
                        <Link href='tel:+contact@Rustictudio.co'>
                            contact@Rustictudio.co
                        </Link>
                    </div>
                </div>
                <div className='info text-white hover:text-primary transition-all text-[14px] uppercase absolute bottom-[100px] xl:right-[70px] right-[15px] z-[2] hidden lm:block'>
                    <Link href='tel:+contact@Rustictudio.co'>
                        contact@Rustictudio.co
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
