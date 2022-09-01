import Head from "next/head";
import { Fragment } from "react";
import HeaderOne from "../../components/header/header-1";
import { getAllItems, getItemData, getItemsFiles } from "../../lib/items-util";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostCategories } from "../../lib/getPostCategories";
import { getRelatedPosts } from "../../lib/getRelatedPosts";
import DisqusForm from "../../components/posts/disqus-form";
import { getPostTags } from "../../lib/getPostTags";
import Link from "next/link";

function PostDetailPage(props) {
  const { prevPost, nextPost } = props;
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <HeaderOne />
      <PostContent
        post={props.post}
        categories={props.categories}
        tags={props.tags}
      />
      <DisqusForm />
      <div className="post-pagination pt-[60px]">
        <div className="image-layer relative">
          <div className="grid grid-cols-2 relative text-[18px] leading-6 uppercase font-semibold tracking-[10px] z-[1]">
            <Link href={`/posts/${prevPost.slug}`}>
              <a
                className={`prev py-[50px] mr-[30px] flex justify-center bg-cover bg-no-repeat bg-center relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                  !prevPost?.slug
                    ? "text-dark pointer-events-none opacity-40"
                    : "text-white"
                }`}
                style={{
                  backgroundImage: `url('/images/posts/${
                    prevPost?.slug + "/" + prevPost?.image
                  }')`,
                }}
              >
                Prev
              </a>
            </Link>
            <Link href={`/posts/${nextPost?.slug}`}>
              <a
                className={`next py-[50px] flex justify-center bg-cover bg-no-repeat bg-center text-right relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${
                  !nextPost?.slug
                    ? "text-dark pointer-events-none opacity-40"
                    : "text-white"
                }`}
                style={{
                  backgroundImage: `url('/images/posts/${
                    nextPost?.slug + "/" + nextPost?.image
                  }')`,
                }}
              >
                Next
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getItemData(slug, "posts");
  const posts = getAllItems("posts");
  const categories = getPostCategories();
  const tags = getPostTags();
  const relatedPosts = getRelatedPosts(posts, categories, tags, 4);
  const currentPostIndex = posts.findIndex((post) => post.slug === slug);
  const nextPost = posts[currentPostIndex + 1]
    ? posts[currentPostIndex + 1]
    : {};
  const prevPost = posts[currentPostIndex - 1]
    ? posts[currentPostIndex - 1]
    : {};

  return {
    props: {
      post,
      tags,
      categories,
      relatedPosts,
      prevPost,
      nextPost,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getItemsFiles("posts");

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
