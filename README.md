<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

<div align="center">
		<img src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png" width="200px"/>
		<h1>Firelaw 烈火戒</h1>
</div>

<div align="center">
		<a href="https://www.npmjs.com/package/firelaw" target="_blank">
				<img
					src="https://img.shields.io/npm/v/firelaw"
					alt="Created by tylim88"
				/>
			</a>
			&nbsp;
			<a
				href="https://github.com/tylim88/firelaw/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/firelaw"
					alt="License"
				/>
			</a>
			&nbsp;
			<a
				href="https://www.npmjs.com/package/firelaw?activeTab=dependencies"
				target="_blank"
			>
				<img
					src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/firelaw&label=dependencies&query=$.dependencies.count&color=brightgreen"
					alt="dependency count"
				/>
			</a>
			&nbsp;
			<img
				src="https://img.shields.io/badge/gzipped-2KB-brightgreen"
				alt="package size"
			/>
			&nbsp;
			<a href="https://github.com/tylim88/firelaw/actions" target="_blank">
				<img
					src="https://github.com/tylim88/firelaw/workflows/Main/badge.svg"
					alt="github action"
				/>
			</a>
			&nbsp;
			<a href="https://codecov.io/gh/tylim88/firelaw" target="_blank">
				<img
					src="https://codecov.io/gh/tylim88/firelaw/branch/main/graph/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a href="https://github.com/tylim88/firelaw/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/firelaw"
				></img>
			</a>
			&nbsp;
			<a href="https://snyk.io/test/github/tylim88/firelaw" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/firelaw/badge.svg"
					alt="code coverage"
				/>
			</a>
			&nbsp;
			<a
				href="https://lgtm.com/projects/g/tylim88/FireLaw/alerts/"
				target="_blank"
			>
				<img
					alt="Total alerts"
					src="https://img.shields.io/lgtm/alerts/g/tylim88/FireLaw.svg?logo=lgtm&logoWidth=18"
				/>
			</a>
			&nbsp;
			<a href="https://lgtm.com/projects/g/tylim88/FireLaw/context:javascript">
				<img
					target="_blank"
					alt="Language grade: JavaScript" 
					src="https://img.shields.io/lgtm/grade/javascript/g/tylim88/FireLaw.svg?logo=lgtm&logoWidth=18"/>
			</a>
</div>

I decided to stop working on this project after I found out that the security rule methods does not support nested object well enough, too much limitation.

Hence it is pointless to continue this project, there is no enough value.

You should be ok with read operations, because read rule is quite simple, but this is not the case with write operations.

My advice is to validate your data in cloud function instead, and enjoy good libraries like yup, joi and zod.

You lose optimistic update in front end, but I think that is acceptable.

TLDR, Firestore security rule suck, don't use it with nested object.
