import path from 'path';

export default {
  entry: './components/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'components'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/preset-react'
            ],
            plugins: [
              ["@babel/transform-runtime"],
              ["babel-plugin-styled-components"]
            ]
          }
        }
      }
    ]
  },
  externals: ['react', 'react-dom', 'styled-components']
};