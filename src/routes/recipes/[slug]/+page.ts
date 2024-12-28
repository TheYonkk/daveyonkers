import { error } from '@sveltejs/kit';

export async function load({params}){
  const slug = params.slug;

  try {

    let post = await import(`../../recipes/${slug}.svx`);

    return {
      content: post.default,
      meta: post.metadata,
    }

  } catch (e) {
    return error(404, `Recipe with slug ${slug} not found`);
  }
}
