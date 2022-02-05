#!/usr/bin/env node
// https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/

import { readFile } from './readFile'
import { readConfigFile, config } from './readConfigFile'
import { Command } from 'commander'
import { writeFile } from './writeFile'

const program = new Command()

export const main = (str: { project: string }) => {
	let config: config = {
		include: [],
		dist: '',
	}
	let error = false
	try {
		config = readConfigFile(str.project)
	} catch (err) {
		error = true
		console.error(err)
	}
	let codeToParse: string[] = []
	if (!error) {
		try {
			codeToParse = readFile(config.include)
		} catch (err) {
			error = true
			console.error(err)
		}
	}
	if (!error) {
		try {
			writeFile(codeToParse, config.dist)
		} catch (err) {
			error = true
			console.error(err)
		}
	}
	return error as unknown as void
}

program
	.name('FireLaw')
	.description('Write truly safe and scalable Firestore Rules in Typescript')
	.version('0.0.0')
	.option('-p, --project [value]', 'custom config location')
	.action(main)

program.parse()
