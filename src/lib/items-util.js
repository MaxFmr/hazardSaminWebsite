import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getItemsFiles(type) {
  const itemsDirectory = path.join(process.cwd(), "src/data", type);
  return fs.readdirSync(itemsDirectory);
}

export function getItemData(itemIdentifier, type) {
  const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
  const itemSlug = itemIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const itemData = {
    slug: itemSlug,
    ...data,
    content,
  };

  return itemData;
}

export function getAllItems(type) {
  const itemFiles = getItemsFiles(type);

  const allItems = itemFiles.map((itemFile) => {
    return getItemData(itemFile, type);
  });

  const sortedItems = allItems.sort((itemA, itemB) =>
    itemA.date > itemB.date ? -1 : 1
  );

  return sortedItems;
}

export function getFeaturedItems(items) {
  return items.filter((item) => item.isFeatured);
}
