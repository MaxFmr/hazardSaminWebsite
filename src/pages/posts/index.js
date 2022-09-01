import Head from "next/head";
import { Fragment } from "react";
import Breadcrumb from "../../components/breadcrumb";
import HeaderTwo from "../../components/header/header-2";
import AllItems from "../../components/posts/all-items";
import { getAllItems } from "../../lib/items-util";
import { getPostCategories } from "../../lib/getPostCategories";
import { getPostTags } from "../../lib/getPostTags";

function allItemsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Rustic posts!" />
      </Head>
      <HeaderTwo />
      <Breadcrumb activePage={"Posts"} pageTitle={"Our Posts"} />
      <AllItems
        posts={props.posts}
        categories={props.categories}
        tags={props.tags}
      />
    </Fragment>
  );
}

export function getStaticProps() {
  const allItems = getAllItems("posts");
  const categories = getPostCategories();
  const tags = getPostTags();

  return {
    props: {
      posts: allItems,
      categories,
      tags,
    },
  };
}

export default allItemsPage;
