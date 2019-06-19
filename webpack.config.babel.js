import {join} from 'path'

const context = join(__dirname, 'src')

export default {
  context,
  mode: 'development',
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'starWarsNames',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.js$/, loader: ['babel-loader'], include: context},
      {test: /\.json$/, loader: ['json'], include: context},
    ],
  },
}
