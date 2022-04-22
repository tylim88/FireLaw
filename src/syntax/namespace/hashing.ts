import { Byte } from '../interfaces/bytes'
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Compute a hash using the CRC32 algorithm.
 * @param bytes_or_string (non-null rules.Bytes or non-null rules.String). Bytes sequence (declared with b prefix), or string. For strings, the UTF-8 encoding is used.
 * @returns non-null rules.Bytes hash value as a Bytes sequence.
 */
export const crc32 = (bytes_or_string: string | Byte) => {
	return 1 as unknown as Byte
}

/**
 * Compute a hash using the CRC32c algorithm.
 * @param bytes_or_string (non-null rules.Bytes or non-null rules.String). Bytes sequence (declared with b prefix), or string. For strings, the UTF-8 encoding is used.
 * @returns non-null rules.Bytes hash value as a Bytes sequence.
 */
export const crc32c = (bytes_or_string: string | Byte) => {
	return 1 as unknown as Byte
}

/**
 * Compute a hash using the md5 algorithm.
 * @param bytes_or_string (non-null rules.Bytes or non-null rules.String). Bytes sequence (declared with b prefix), or string. For strings, the UTF-8 encoding is used.
 * @returns non-null rules.Bytes hash value as a Bytes sequence.
 */
export const md5 = (bytes_or_string: string | Byte) => {
	return 1 as unknown as Byte
}

/**
 * Compute a hash using the sha256 algorithm.
 * @param bytes_or_string (non-null rules.Bytes or non-null rules.String). Bytes sequence (declared with b prefix), or string. For strings, the UTF-8 encoding is used.
 * @returns non-null rules.Bytes hash value as a Bytes sequence.
 */
export const sha256 = (bytes_or_string: string | Byte) => {
	return 1 as unknown as Byte
}
/* eslint-enable @typescript-eslint/no-unused-vars */
