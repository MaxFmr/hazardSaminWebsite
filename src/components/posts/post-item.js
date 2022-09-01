import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
    const { title, image, date, slug } = props.posts;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <div className='post-item'>
            <Link href={linkPath}>
                <a>
                    <div className='post-img block'>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={374}
                            height={303}
                            layout='responsive'
                            quality={60}
                            priority
                        />
                    </div>
                    <div className='post-content'>
                        <h2 className='text-[24px] leading-[34px] mt-6 transition duration-300 hover:text-[#cbaf71] hover:underline'>
                            {title}
                        </h2>
                        <div className='text-[14px] leading-6 text-[#222] block mt-2'>
                            {formattedDate} by
                            <span className='text-black font-medium ml-[5px]'>
                                Admin
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default PostItem;
