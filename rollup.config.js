import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";

let config = {
  input: "src/index.tsx", // Path to your component
  output: [
    {
      file: "dist/feerio-widget-sdk.js",
      format: "iife",
      name: "Feerio",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        axios: "axios",
      },
    },
  ],
  watch: {
    include: "src/**", // Adjust this to match your source directory
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve these extensions
      browser: true,
    }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extensions: [".css"],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};

export default config;
