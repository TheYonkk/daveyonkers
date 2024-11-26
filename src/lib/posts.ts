import type { Post } from "$lib/types";
import { dev } from '$app/environment';

interface PostFile {
  metadata: {
    date?: string,
    published?: boolean,
    title?: string,
  };
  default: any;
}

export function getPosts() {

  let posts: Post[] = [];

  let files = import.meta.glob<PostFile>('../routes/posts/**/*.svx', { eager: true });

  for (const [path, post] of Object.entries(files)) {
    if (!post.metadata.date) continue;
    if (!post.metadata.title) continue;

    if (!post.metadata.published && !dev){
      continue;
    }

    let slug = path.split('/').pop()?.split('.').shift();

    if (!slug){
      console.error(`No slug found for ${path}`);
      continue;
    }
    
    posts.push({
      title: post.metadata.title,
      slug,
      date: new Date(post.metadata.date),
      published: post.metadata.published ?? false,
    });

  }

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}