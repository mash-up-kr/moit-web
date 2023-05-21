const commitizenConfig = require('./.cz-config.cjs');

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', commitizenConfig.types.map(({ value }) => value)],
    'type-case': [2, 'always', 'lower-case']
  },
}

module.exports = Configuration