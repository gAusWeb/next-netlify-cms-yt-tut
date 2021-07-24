const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    /* bydefault config  option Read For More Optios
    here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
    cssModules: true
})

module.exports = {
    /* config options here */
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'css')],
    },
};
