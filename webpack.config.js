const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")
module.exports={
mode: "production",
entry: {
  bundle: "./src/index.js",
  auth: "./src/auth.js",
  home: "./src/home.js",
  display: "./src/display.js"
},
output:{
  path: path.resolve(__dirname, "docs"),
  filename: "[name].js",
  
},
//dette er alle tilføjelserne
module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",],
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "images/"
          }
        }
      ]
      }
    ]
  },
  stats: {
    children: true
  },
  plugins: [
   new HtmlWebpackPlugin({
    template:'./src/index.html'
   }),
   new HtmlWebpackPlugin({
    template: './src/auth.html',
    filename: 'auth.html',
    chunks: ["auth"],
    scriptLoading: "module"
  }),
  new HtmlWebpackPlugin({
    template: './src/home.html',
    filename: 'home.html',
    chunks: ["home"],
    scriptLoading: "module"
  }),
  ]
 
};