import glob from 'glob'

export const getFilenames = (paths: string[]) => {
	return paths.reduce<string[]>((acc, path) => {
		const filenames = glob.sync(path, { nodir: true })
		return acc.concat(filenames)
	}, [])
}
