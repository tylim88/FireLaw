import {
	initializeTestEnvironment,
	RulesTestContext,
	RulesTestEnvironment,
} from '@firebase/rules-unit-testing'
import { setDoc, getFirelord, FirelordRef, MetaTypeCreator } from 'firelordjs'
import firebasejson from '../../firebase.json'
import fs from 'fs'
import path from 'path'

const port = firebasejson.emulators.firestore.port

type User = MetaTypeCreator<{ a: { b: number }; c: number }, 'User', string>
let userRef = undefined as unknown as FirelordRef<User>
let testEnvFirestore = undefined as unknown as ReturnType<
	RulesTestContext['firestore']
>
let testEnv = undefined as unknown as RulesTestEnvironment

describe('test whether works with rules-unit-testing', () => {
	beforeAll(async () => {
		testEnv = await initializeTestEnvironment({
			projectId: 'any',
			firestore: {
				host: 'localhost',
				port,
				rules: fs.readFileSync(
					path.resolve(process.cwd(), 'firestore.rules'),
					'utf8'
				),
			},
		})
		await testEnv.clearFirestore()
		testEnvFirestore = testEnv
			.authenticatedContext('alice', {
				email: 'alice@example.com',
			})
			.firestore()
		userRef = getFirelord<User>(testEnvFirestore)('User')
	})
	afterAll(() => {
		testEnv.cleanup()
	})
	it('test basic operation like setDoc, updateDoc, addDoc, deleteDoc etc etc', async () => {
		const ref = userRef.doc('user1')
		expect(__dirname).toBe('')
		await setDoc(ref, { a: { b: 30 } }, { merge: true })
		// some other operations
		// do your assertion here...
	})
})
