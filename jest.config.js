module.exports = {
	coveragePathIgnorePatterns: ['/tests/', '/node_modules/'],
	moduleFileExtensions: ['ts', 'js', 'tsx'],
	testRegex: 'tests/(.*).test.tsx?$',
	globals: {
		'ts-jest': {
			diagnostics: {
				warnOnly: true,
			},
		},
	},
	preset: 'ts-jest',
	testMatch: null,
};
