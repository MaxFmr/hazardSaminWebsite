import Image from 'next/image';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import PostBanner from './post-banner';
import PostSidebar from '../post-sidebar';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';

function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const BlockQuoteIcon = FaIcons[post.icon];

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <Fragment>
                        <div className='post-area pt-155'>
                            <div className='container'>
                                <div className='lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]'>
                                    <div className='lg:col-span-8'>
                                        <h2 className='font-bold text-[24px] leading-[36px] max-w-[710px] mb-[20px]'>
                                            {post.postTitle}
                                        </h2>
                                        <p className='text-secondary leading-[27px] mb-[15px]'>
                                            {post.postDesc}
                                        </p>
                                        <p className='text-secondary leading-[27px] max-w-[680px]'>
                                            {post.postAdditionalDesc}
                                        </p>
                                        <div className='single-item pt-[50px]'>
                                            <div className='image'>
                                                <Image
                                                    src={`/images/posts/${post.slug}/${image.properties.src}`}
                                                    alt={image.alt}
                                                    width={1170}
                                                    height={610}
                                                    objectFit='cover'
                                                />
                                            </div>
                                            <div className='content pt-[45px]'>
                                                <h2 className='font-bold text-[24px] leading-[38px] mb-[15px]'>
                                                    {post.singlePostTitle}
                                                </h2>
                                                <p className='text-secondary leading-[27px]'>
                                                    {post.singlePostDesc}
                                                </p>
                                            </div>
                                        </div>
                                        <blockquote className='flex sm:pt-[75px] sm:pl-[85px] fixed-xs:pt-[30px]'>
                                            <span className='quote mr-[5px]'>
                                                <BlockQuoteIcon />
                                            </span>
                                            <p className='leading-9 text-[24px] max-w-[530px]'>
                                                {post.blockquoteText}
                                            </p>
                                        </blockquote>
                                        <p className='text-secondary leading-[27px] pt-[70px]'>
                                            {post.postExcerpt}
                                        </p>
                                        <ul className='post-share-tags pt-[65px]'>
                                            {post.postTags.map((item, i) => (
                                                <li key={i}>
                                                    <Link href='#'>
                                                        <a>{item}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='lg:col-span-4 max-md:pt-[50px]'>
                                        <PostSidebar
                                            categories={props.categories}
                                            tags={props.tags}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            }
        },
    };

    return (
        <article>
            <PostBanner title={post.title} image={imagePath} date={post.date} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;
