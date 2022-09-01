import PostSidebar from './post-sidebar';
import PostsGrid from './posts-grid';

function allItems(props) {
    return (
        <div className='post-area md:pt-[160px] pt-[60px] md:pb-[155px] pb-[55px] border-[#dbdbdb] border-b'>
            <div className='container'>
                <div className='lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]'>
                    <PostsGrid posts={props.posts} />
                    <div className='lg:col-span-4 max-md:pt-[50px]'>
                        <PostSidebar
                            categories={props.categories}
                            tags={props.tags}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default allItems;
