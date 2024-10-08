module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
