import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [
              ["@babel/transform-runtime"]
            ]
          }
        }
      }
    ]
  },
  externals: [
    'next',
    'react',
    'react-dom',
    'react-icons',
    'universal-cookie',
    'styled-components'
  ],
  optimization: {
    // minimizer: [new TerserPlugin()]
  }
};