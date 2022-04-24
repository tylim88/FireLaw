/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @param value - a sequence of characters, two-place hexadecimal values (for example, b'\x0F', not b'\xF'), or three-place octal values (for example, b'\000', not b'\0'). Character sequences are interpreted as UTF-8 encoded strings.
* ```ts
	// These are all equal to decimal 42.
	b('*')
	b('\x2A')
	b('\052')

	// These are all equivalent
	b('€') // 3-byte UTF-8 encoded string
	b('\342\202\254')
	b('\xE2\x82\xAC')
```
*/
export const b = (value: string) => {
	return 1 as unknown as Byte
}
