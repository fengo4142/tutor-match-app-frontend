module.exports = {
  "transform": {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '.+\\.(css|css!|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  "collectCoverageFrom": [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.jsx'
  ],
  "testEnvironment": "node",
  "testMatch": [
    '<rootDir>/test/__unit__/*.test.js',
    '<rootDir>/test/__unit__/**/*.test.js'
  ],
  // "testRegex": "(<rootDir>/test/__unit__/**/.*|(\\.|/)(test|spec))\\.js?(x)$",
  "setupFilesAfterEnv": ["<rootDir>/test/setupTest.js"],
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