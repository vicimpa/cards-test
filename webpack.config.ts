import { join } from "path";
import { Configuration } from "webpack";
import { compilerOptions } from "./tsconfig.json";

const { NODE_ENV = 'development' } = process.env
const isDevMode = NODE_ENV != 'production'

const alias = Object.entries(compilerOptions.paths)
  .reduce((acc, [a, b]) => {
    acc[a] = join(__dirname, b[0])
    return acc
  }, {})

module.exports = {
  entry: {
    main: './index.tsx'
  },
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  mode: isDevMode ? 'development' : 'production',
  watch: isDevMode,
  devtool: isDevMode && 'source-map',
  externals: {
    'snapsvg': 'Snap'
  },
  resolve: {
    alias,
    extensions: ['.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /img\/.+\.(png|svg|jpg)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  }
} as Configuration