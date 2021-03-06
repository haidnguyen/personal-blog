if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env',
  });
}
module.exports = {
  siteMetadata: {
    title: 'Lorem',
    author: 'Hai Nguyen',
    description: "Hai's Personal Blog",
    keywords: ['Blog', 'React', 'Angular', 'Javascript', 'Typescript', 'Functional Programming'],
    siteUrl: 'https://haidnguyen.dev',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ['en', 'vi'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        token: process.env.GITHUB_API_KEY,
        graphQLQuery: `
          query {
            viewer {
              login
              name
              avatarUrl
              email
            }
        }`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
