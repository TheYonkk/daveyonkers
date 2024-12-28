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

export function getPosts(directory: string) {

  let files = import.meta.glob<PostFile>("../routes/**/*.svx", { eager: true });

  let posts_by_directory = new Map<String, Post[]>();

  for (const [path, post] of Object.entries(files)) {

    let directory = path.match(/\/routes\/(.*)\//)?.[1];

    if (!directory){
      continue;
    }
    
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

    const p = {
      title: post.metadata.title,
      slug,
      date: new Date(post.metadata.date),
      published: post.metadata.published ?? false,
    };
    posts_by_directory.set(directory, (posts_by_directory.get(directory) || []).concat(p));

  }

  let posts = posts_by_directory.get(directory) ?? [];

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}