module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "dist/bundle.js"
  },

  // devtool: 'eval-source-map',

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/}
    ]
  }
};


// module.exports = {
//   entry: "./app/App.js",
//   output: {
//     filename: "public/bundle.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel'
//       }
//     ]
//   }
// };
