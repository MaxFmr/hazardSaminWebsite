/***
 * Get Related Posts
 * @param categories
 * @param tags
 * @param posts
 * @param limit
 * @returns {*[]}
 */
export const getRelatedPosts = (posts, categories, tags, limit = 3) => {
    const identityMap = {};

    if (tags.length === 0 && categories.length === 0) {
        return [];
    }

    const getSlug = (post) => {
        return post.slug;
    };

    const addToMap = (post) => {
        const slug = getSlug(post);
        if (!(slug in identityMap)) {
            identityMap[slug] = {
                post: post,
                points: 0,
            };
        }
    };

    const addCategoriesPoints = (post, categories) => {
        const point = 2;
        const slug = getSlug(post);
        const postCat = post.category.map((cat) => cat);

        const compareToCat = categories.map((cat) => cat);
        postCat.forEach((cat) => {
            if (compareToCat.includes(cat)) {
                identityMap[slug].points += point;
            }
        });
    };

    const addTagsPoints = (post, tags) => {
        const point = 1;
        const slug = getSlug(post);
        const postTag = post.postTags.map((tag) => tag);
        const compareToTag = tags.map((tag) => tag);
        postTag.forEach((tag) => {
            if (compareToTag.includes(tag)) {
                identityMap[slug].points += point;
            }
        });
    };

    const getIdentityMapAsArray = () => {
        return Object.keys(identityMap).map((slug) => identityMap[slug]);
    };

    for (const post of posts) {
        addToMap(post);
        if (categories.length) addCategoriesPoints(post, categories);
        if (tags.length) addTagsPoints(post, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();
    const similarPosts = arrayIdentityMap.filter((arr) => arr.points);
    similarPosts.sort((a, b) => b.points - a.points).shift();

    return similarPosts.slice(0, limit).map((item) => item.post);
};
