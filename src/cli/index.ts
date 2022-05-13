#!/usr/bin/env node
// https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/

import { readConfigFile, config } from './readConfigFile'
import { Command } from 'commander'
import { writeFile } from './writeFile'
import { bundler } from '../bundler'

export const main = async (str: { project: string }) => {
	let config: config = {
		entryPoint: '',
		dist: '',
	}

	config = readConfigFile(str.project)

	const codeToParse = await bundler(config.entryPoint) // bundle code, also throw on syntax error

	// TODO transpile

	writeFile([codeToParse], config.dist) // convert code here
}

export const cli = () => {
	const program = new Command()

	program
		.name('FireLaw')
		.description('Write truly safe and scalable Firestore Rules in Typescript')
		.version('0.0.0')
		.option('-p, --project [value]', 'custom config location')
		.action(main)

	program.parse()
}
