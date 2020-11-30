module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'clover'],
    setupFilesAfterEnv: ['<rootDir>/.jest.setup.js'],
    setupFiles: ['<rootDir>/.env.test.js'],
    testPathIgnorePatterns: ['<rootDir>/.env.test.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.js?$': 'babel-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    },
    snapshotSerializers: [], // 'jest-emotion/serializer'],
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
    coverageThreshold: {
      global: {
        statements: 65,
        branches: 65,
        functions: 65,
        lines: 65,
      },
    },
  };
  