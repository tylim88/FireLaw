import fs from 'fs'

export const writeFile = (text: string[], path: string) => {
	return fs.writeFileSync(
		path,
		`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  ${text.join(',')}
  }`
	)
}
