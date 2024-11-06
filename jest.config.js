module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  reporters: [
        "default",
        [
            "jest-junit",
            {
                "outputDirectory": "coverage",
                "outputName": "unit-test-results.xml"
            }
        ]
    ]
};
