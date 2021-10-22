module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest/globals': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': [
      'jest',
    ],
    'rules': {
        'linebreak-style': [
            'error',
            'windows'
          ],
          'quotes': [
            'error',
            'single'
          ],
          'semi': [
            'error',
            'never'
          ],
          'eqeqeq': 'error',
          'no-trailing-spaces': 'error',
          'object-curly-spacing': [
            'error', 'always'
          ],
          'arrow-spacing': [
            'error', { 'before': true, 'after': true }
          ],
    }
}
