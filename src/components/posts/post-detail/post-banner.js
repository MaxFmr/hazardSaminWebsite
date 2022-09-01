import Image from 'next/image';

function PostBanner(props) {
    const { title, image, date } = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='post-banner relative'>
            <div className='image relative w-full lg:h-[980px] h-[550px] before:absolute before:bg-black before:opacity-40 before:w-full before:h-full before:z-[1]'>
                <Image
                    src={image}
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
            <div className='container'>
                <div className='content absolute top-1/2 transform -translate-y-1/2 z-[1]'>
                    <div className='inner-content relative z-[1]'>
                        <div className='relative text-[18px] leading-[29px] text-white block uppercase pt-[35px] before:absolute before:top-0 before:left-0 before:w-[80px] before:h-[4px] before:rounded-[2px] before:bg-primary'>
                            {formattedDate}
                            <span className='block ml-[5px]'>by Admin</span>
                        </div>
                        <h2 className='lg:text-[80px] lm:text-[50px] text-[30px] lg:leading-[90px] text-white max-w-[770px]'>
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBanner;
