import PostItem from './post-item';

function PostsGrid(props) {
    const { posts } = props;

    return (
        <div className='lg:col-span-8'>
            <div className='grid lm:grid-cols-2 gap-x-[25px] gap-y-[55px]'>
                {posts.map((posts) => (
                    <PostItem key={posts.slug} posts={posts} />
                ))}
            </div>
        </div>
    );
}

export default PostsGrid;
