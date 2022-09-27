import { getPostCategories } from '../../lib/getPostCategories';
import { getPostTags } from '../../lib/getPostTags';
import { getAllItems } from '../../lib/items-util';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';

import AllItems from '../../components/posts/all-items';
import { Fragment } from 'react';
import Head from 'next/head';

const CategoryPostPage = ({ posts, categories, tags }) => {
  return (
    <Fragment>
      <Head></Head>
      <HeaderTwo />
      <Breadcrumb activePage={'Actus'} pageTitle={'Nos Actualités'} />
      <AllItems posts={posts} categories={categories} tags={tags} />
    </Fragment>
  );
};

export const getStaticProps = ({ params }) => {
  const { slug } = params;
  const posts = getAllItems('posts');
  const filteredPosts = posts
    .map((post) => ({
      ...post,
      uniqueCategory: post.category.find((cate) => cate === slug),
    }))
    .filter((post) => post.uniqueCategory === slug);
  const categories = getPostCategories();
  const tags = getPostTags();

  return {
    props: {
      posts: filteredPosts,
      categories,
      tags,
    },
  };
};

export const getStaticPaths = () => {
  const categories = getPostCategories();

  return {
    paths: categories.map((category) => ({
      params: { slug: category },
    })),
    fallback: false,
  };
};

export default CategoryPostPage;
