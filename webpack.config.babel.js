import path from 'path';

export default {
  mode: 'production',
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
              "next/babel"
            ],
            plugins: [
              ["@babel/transform-runtime"],
            ]
          }
        }
      }
    ]
  },
  externals: ['next', 'react', 'react-dom', 'styled-components']
};