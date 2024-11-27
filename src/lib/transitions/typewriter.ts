export default function typewriter(node: HTMLElement, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error('Typer writer only works on text nodes.');
  }

  const text = node.textContent ?? '';
  const duration = text.length / (speed * 0.01);

  return {duration, tick: (t: number) => {
			const i = Math.floor(text.length * t) + 1;
			node.textContent = text.slice(0, i);
		},
	};
}