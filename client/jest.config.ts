module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/__ mocks __/fileMock.js",
    "\\.(css)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/$1",
  },
};
