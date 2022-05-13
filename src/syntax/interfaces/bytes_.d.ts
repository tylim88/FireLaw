type Byte = {
	/**
		 * Returns the number of bytes in a Bytes sequence.
		 * @returns non-null rules.Integer the number of bytes.
		 * ```ts
			b('\xFF\xFF').size() === 2
			b('a').size() === 1
			b('€').size() === 3 // 3-byte UTF-8 encoded string
		 * ```
		 */
	size: () => number

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
	toBase64: () => string

	/**
		 * Returns the hexadecimal-encoded string corresponding to the provided Bytes sequence.
		 * @returns non-null rules.String a hexadecimal-encoded string.
		 * ```ts
			b('\x2A').toHexString() === '2A'
			b('**').toHexString() === '2A2A'
			b('€').toHexString() === 'E282AC'
			```
		 */
	toHexString: () => string
}
