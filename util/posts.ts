import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
// import { reporter } from 'vfile-reporter';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';

// resource: https://medium.com/geekculture/build-a-blog-with-next-js-2315d9683ef
const SHOW_RECENT_POSTS_AMOUNT = 3;
const POST_DIR: string = path.join(process.cwd(), 'posts');
interface IPostFileData {
  title: string;
  date: string;
  html: string;
}

interface IPost extends IPostFileData {
  id: string;
  firstline: string;
}

export async function getAllPosts(): Promise<IPost[]> {
  const fileNames: string[] = fs.readdirSync(POST_DIR);
  const filteredFileNames: string[] = fileNames.filter((fileName) =>
    fileName.endsWith('.md')
  );

  const allPostsData: Promise<IPost>[] = await filteredFileNames.map(
    async (fileName) => {
      const id: string = fileName.replace(/\.md$/, '');
      const fullPath: string = path.join(POST_DIR, fileName);
      const fileContents: string = fs.readFileSync(fullPath, 'utf8');
      const firstline: string = getFirstLineFromPost(id);
      const fileData: IPostFileData = await markdownToPostData(fileContents);

      return {
        id,
        ...fileData,
        firstline,
      };
    }
  );

  try {
    const allPosts: IPost[] = await Promise.all(allPostsData);
    return allPosts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPostById(id: string): Promise<IPost> {
  const fullPath: string = path.join(POST_DIR, `${id}.md`);
  const fileContents: any = fs.readFileSync(fullPath, 'utf8');
  const firstline: string = getFirstLineFromPost(id);
  const fileData: IPostFileData = await markdownToPostData(fileContents);

  fs.writeFileSync(path.join(POST_DIR, `${id}.html`), fileData.html, 'utf8');

  return {
    id,
    ...fileData,
    firstline,
  };
}

export async function getSortedPosts(asc: boolean): Promise<IPost[]> {
  let allPosts: IPost[] = await getAllPosts();

  return allPosts.sort((a, b) => {
    if (asc ? a.date < b.date : a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function createPost(content: string) {
  const post = await getSortedPosts(false);
  console.log(post[0]);

  // const newPostId = post.id + 1;
  // const newPostFileName = `${newPostId}.md`;
  // const newPostFilePath = path.join(POST_DIR, newPostFileName);

  // fs.writeFileSync()
}

export function deletePost(id: string) {
  console.log('Deleting post....');
}

export function getAllPostIds(): string[] {
  const fileNames: string[] = fs.readdirSync(POST_DIR);
  return fileNames.map((fileName: string) => {
    return fileName.replace(/\.md$/, '');
  });
}

function getFirstLineFromPost(id: string): string {
  // const fullPath: string = path.join(POST_DIR, `${id}.html`);
  // const fileContents: any = fs.readFileSync(fullPath, 'utf8');
  // let value: string[] = fileContents
  //   .replace(/<.*>/g, '')
  //   .replace(/<\/.*>/g, '')
  //   .split('\n')
  //   .filter((e) => e.trim() !== '');

  // const valueString: string = value.join(' ').slice(0, 130) + '...';
  // console.log(valueString);

  // return valueString;
  return 'First line of content';
}

async function markdownToPostData(
  fileContents: string
): Promise<IPostFileData> {
  const matterResult: any = matter(fileContents);
  const processedContent: any = await remark()
    .use(remarkPresetLintRecommended)
    .use(html)
    .process(matterResult.content);
  const htmlContent: string = processedContent.toString();

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    html: htmlContent,
  };
}

export function doesPostExist(id: string): boolean {
  const fileNames: string[] = fs.readdirSync(POST_DIR);
  return fileNames.includes(`${id}.md`);
}

export function setPostStyling(postData: IPost) {
  const modifiedPostData: any = postData;
  return modifiedPostData;
}

export async function getRecentPosts(): Promise<IPost[]> {
  let sortedPosts: any[] = await getSortedPosts(false);
  return sortedPosts.slice(0, SHOW_RECENT_POSTS_AMOUNT);
}
