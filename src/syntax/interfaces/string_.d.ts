type IsInteger<T extends number> = `${T}` extends `${number}.${number}`
	? 'Integer Only'
	: T

interface String {
	/**
     * ```md
        Primitive type representing a string value.

        Strings can be lexicographically compared using the ===, !==, >, <, >= and <= operators.

        Strings can be concatenated using the + operator:
            * ```
    ```ts
    // Concatenate a username and an email domain
    'username' + '@domain.com'
    ```
    Sub-strings can be accessed using the index operator [].
    ```ts
    // Check if the first character of a string is 'a'
    mystring[0] == 'a'
    ```
     */
	FSR: {
		/**
		 * range operator
		 * @param start rules.Integer. Start index
		 * @param end rules.Integer. End Index
		 * @returns rules.String
         * ```ts
            // Check if the string starts with 'abc'
            mystring.FSR.range(0,3) === 'abc'
            ```
		 */
		range: <S extends number, E extends number>(
			start: IsInteger<S>,
			end: IsInteger<E>
		) => string

		/**
		 * Returns a lowercase version of the input string.
		 * @returns non-null rules.String the lowercase string.
		 */
		lower: () => string

		/**
		 * Performs a regular expression match on the whole string.
		 * @param re rules.String. A regular expression using Google RE2 syntax. Value must not be null.
		 * @returns non-null rules.String the lowercase string.
         * ```ts
         * 'user@domain.com'.matches('.*@domain[.]com') === true
           'banana'.matches('.*@domain[.]com') === false
         * ```
		 */
		matches: (re: string) => string

		/**
		 * Replaces all occurrences of substrings matching a regular expression with a user-supplied string.
		 * @param re rules.String. A regular expression using Google RE2 syntax. Value must not be null.
         * @param sub rules.String. A string to substitute. Value must not be null.
		 * @returns non-null rules.String A string representing the result of the replacement operation. If no substrings matched the regular expression, the unmodified original string is returned.
         * ```ts
            'banana'.replace("a", "o") === 'bonono'
            'banana'.replace("ana", "ee") === 'beena'
            'foo@test.com'.replace(".", "-") === '---------------' // '.' regex match all
         * ```
		 */
		replace: (re: string) => string

		/**
		 * Returns the number of characters in the string.
		 * @returns non-null rules.Integer the number of characters.
         * ```ts
            'a'.size() == 1
            'abc'.size() == 3
         * ```
		 */
		size: () => number

		/**
		 * Splits a string according to a regular expression.
		 * @param re rules.String. A regular expression using Google RE2 syntax. Value must not be null.
		 * @returns non-null rules.List a list of strings.
		 * ```ts
		 * 'a/b/c'.FSR.split('/') == ['a', 'b', 'c']
		 * ```
		 */
		split: (re: string) => Array<string>

		/**
		 * Returns the UTF-8 byte encoding of a string.
		 * @returns non-null rules.Bytes a Bytes sequence containing the UTF-8 encoded representation of the string.
         * ```ts
            '**'.toUtf8() === byte('\x2A\x2A')
            '€'.toUtf8() === byte('\xE2\x82\xAC')
         * ```
		 */
		toUtf8: () => Byte

		/**
		 * Returns a version of the string with leading and trailing spaces removed.
		 * @returns non-null rules.String the trimmed string.
         * ```ts
            ' a '.trim() === 'a'
            'b'.trim() === 'b'
         * ```
		 */
		trim: () => string

		/**
		 * Returns an uppercase version of the input string.
		 * @returns non-null rules.String the uppercase string.
         * ```ts
            'abc'.upper() === 'ABC'
            'abc123'.upper() === 'ABC123'
         * ```
		 */
		upper: () => string
	}
}
