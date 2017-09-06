/* This says that when webpack loads, everything that is exported
it has access to. If a module or package is not in the export object
then it does not have access to it
*/

module.exports = {
  entry:['babel-polyfill','./src/client.js' ],
  output:{
    path:'/',
    filename:'index.js'
  },
  devServer:{
    inline:true,
    contentBase:'public',
    port:3000
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        query:{
          cacheDirectory:true,
          presets:['es2015', 'react']
        }
      }
    ]
  }
};
