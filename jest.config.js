module.exports = {
  moduleFileExtensions: [
    'js',
    'vue',
    'html'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "vue$": "vue/dist/vue"
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: ["/node_modules/(?!vue-loading-spinner)"],
  modulePaths: [
    "<rootDir>"
  ],
  testMatch: [
    '<rootDir>/__tests__/*.(js)'
  ]
}