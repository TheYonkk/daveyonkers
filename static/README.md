Here's an interesting note about where to put images. https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit

Basically, if they are in `/src`, they are appended with a hash and can be cached with a super long expiry until they actually change. 