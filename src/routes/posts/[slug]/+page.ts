import { error } from '@sveltejs/kit';

export async function load({params}){
  const slug = params.slug;

  try {

    let post = await import(`../../posts/${slug}.svx`);

    return {
      content: post.default,
      meta: post.metadata,
    }

  } catch (e) {
    return error(404, `Post with slug ${slug} not found`);
  }
}
