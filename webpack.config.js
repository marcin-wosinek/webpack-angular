import { AngularWebpackPlugin } from "@ngtools/webpack";
import linkerPlugin from "@angular/compiler-cli/linker/babel";

export default {
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["ts-loader"],
      },
      {
        test: /\.[jt]sx?$/,
        loader: "@ngtools/webpack",
      },
      {
        test: /\.[cm]?js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            compact: false,
            plugins: [linkerPlugin],
          },
        },
      },
    ],
  },

  plugins: [
    new AngularWebpackPlugin({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
