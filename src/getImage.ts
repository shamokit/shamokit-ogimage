// @ts-ignore
import satori, { init } from 'satori/wasm';
import initYoga from 'yoga-wasm-web';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import type { ReactNode } from 'react';
// @ts-ignore
import yogaWasm from './wasm/yoga.wasm';
// @ts-ignore
import resvgWasm from './wasm/resvg.wasm';
import { width, height } from './const';

const genModuleInit = () => {
	let isInit = false;
	return async () => {
		if (isInit) {
			return;
		}
		init(await initYoga(yogaWasm));
		await initWasm(resvgWasm);
		isInit = true;
	};
};
const moduleInit = genModuleInit();

export const generateImage = async (node: ReactNode) => {
	await moduleInit();

	const font = await fetch(
		'https://shamokit.com/ZenKakuGothicNew-Regular.ttf'
	).then((res) => res.arrayBuffer());

	const svg = await satori(node, {
		width,
		height,
		fonts: [
			{
				name: 'Zen Kaku Gothic New',
				data: font,
				style: 'normal',
			},
		],
	});

	const resvg = new Resvg(svg);
	const pngData = resvg.render();
	const pngBuffer = pngData.asPng();

	return pngBuffer;
};
