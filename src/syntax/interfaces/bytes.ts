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
	return {
		/**
		 * Returns the number of bytes in a Bytes sequence.
		 * @returns non-null rules.Integer the number of bytes.
		 * ```ts
			b('\xFF\xFF').size() === 2
			b('a').size() === 1
			b('€').size() === 3 // 3-byte UTF-8 encoded string
		 * ```
		 */
		size: (): number => {
			return 0
		},

		/**
		 * ```md
		 * Returns the Base64-encoded string corresponding to the provided Bytes sequence.

		Base64 encoding is performed per the base64url specification.
		 ```
		 * @returns non-null rules.String a Base64-encoded string.
		 * ```ts
		 * b('\xFB\xEF\xBE').toBase64() === '----'
		 * ```
		 */
		toBase64: (): string => {
			return value
		},

		/**
		 * Returns the hexadecimal-encoded string corresponding to the provided Bytes sequence.
		 * @returns non-null rules.String a hexadecimal-encoded string.
		 * ```ts
			b('\x2A').toHexString() === '2A'
			b('**').toHexString() === '2A2A'
			b('€').toHexString() === 'E282AC'
			```
		 */
		toHexString: (): string => {
			return value
		},
	}
}
/* eslint-enable @typescript-eslint/no-unused-vars */
