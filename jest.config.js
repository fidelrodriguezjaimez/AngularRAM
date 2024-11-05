module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
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
