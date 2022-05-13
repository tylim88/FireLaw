import esbuild from 'esbuild'

export const bundler = async (entryPath: string) => {
	return esbuild
		.build({
			entryPoints: [entryPath],
			bundle: true,
			write: false,
			minify: false,
		})
		.then(output => output.outputFiles[0].text)
}
