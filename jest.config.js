module.exports = {
  "transform": {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|css!|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  "testEnvironment": "node",
  "testRegex": "(/test/__tests__/.*|(\\.|/)(test|spec))\\..js?(x)$",
  "setupFilesAfterEnv": ["<rootDir>/test/setupTest.ts"],
  "transformIgnorePatterns": ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  "modulePathIgnorePatterns": [
    "<rootDir>/node_modules/", "<rootDir>/dist/*"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "node"
  ]
};