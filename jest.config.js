module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  moduleFileExtensions: ['js', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'esbuild-jest',
    '^.+\\.vue$': 'vue-jest'
  }
}
