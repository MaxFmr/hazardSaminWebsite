import PostSlider from '../posts/post-slider';
import Link from 'next/link';

function FeaturedPost(props) {
    return (
        <div className='post-area bg-azure md:pt-[160px] pt-[55px] md:pb-[155px] pb-[55px]'>
            <div className='container'>
                <div className='post-wrap flex items-center justify-between mb-[60px]'>
                    <h2 className='lm:text-[42px] lm:leading-[50px] text-[32px]'>
                        Editorials
                    </h2>
                    <Link href='/posts'>
                        <a className='lm:text-[18px] text-[16px] text-secondary uppercase leading-[24px]'>
                            All articles
                        </a>
                    </Link>
                </div>
                <PostSlider posts={props.posts} />
            </div>
        </div>
    );
}

export default FeaturedPost;
