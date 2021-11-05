import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { reporter } from 'vfile-reporter';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';

// resource: https://medium.com/geekculture/build-a-blog-with-next-js-2315d9683ef
const SHOW_RECENT_POSTS_AMOUNT = 3;

const postsDirectory: string = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): any[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: any[] = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '');
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const matterResult: any = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getRecentPostsData(): any[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  const allPostsData: any[] = fileNames.map((fileName) => {
    const id: string = fileName.replace(/\.md$/, '');
    const fullPath: string = path.join(postsDirectory, fileName);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const matterResult: any = matter(fileContents);
    const firstline: string = getFirstLineFromPost(id);

    return {
      id,
      firstline,
      ...matterResult.data,
    };
  });

  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedPosts.slice(0, SHOW_RECENT_POSTS_AMOUNT);
}

function getFirstLineFromPost(id: string): string {
  return 'Hello world out there';
}
export function getAllPostIds(): any[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: number) {
  const fullPath: string = path.join(postsDirectory, `${id}.md`);
  const fileContents: any = fs.readFileSync(fullPath, 'utf8');
  const matterResult: any = matter(fileContents);

  let processedContent = await remark()
    .use(remarkPresetLintRecommended)
    .use(html)
    .process(matterResult.content);

  // DEBUG
  // console.error(reporter(processedContent));
  // console.log(String(processedContent));
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function setPostStyling(postData: any) {
  const modifiedPostData: any = postData;
  return modifiedPostData;
}
