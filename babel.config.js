/**
 * This will be the Babel config for the full project. It has
 * the highest precedence. This is a Babel 7 feature.
 *
 * @see: https://babeljs.io/docs/en/next/babelconfigjs
 *
 * We use the environment config below to call out env sepcific
 * config changes to our Babel setup. Env -specific configs override
 * the non-env configs, and so others don't have to be duplicated.
 *
 * @see: https://babeljs.io/docs/en/next/babelconfigjs#environment
 */
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'entry',
          corejs: 3,
          shippedProposals: true,
          loose: true,
        },
      ],
  
      '@babel/preset-react',
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-syntax-object-rest-spread',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-transform-runtime',
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      },
      development: {
        plugins: [
          [
            'emotion',
            {
              sourceMap: true,
              autoLabel: true,
            },
          ],
        ],
      },
    },
  };
  