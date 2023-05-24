const commitizenConfig = require('./.cz-config.cjs');

const Configuration = {
  extends: ['gitmoji'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    "scope-empty": [2, "never"],
  }
}

module.exports = Configuration