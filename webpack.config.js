const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: `${__dirname}/lib`,
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  externals: ['vue'],
  plugins: [new VueLoaderPlugin()]
};
