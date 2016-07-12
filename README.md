# TypeScript + Babel + Webpack

A simple lightweight TypeScript + Babel + Webpack project.

Each tag in this project increments the complexity adding more features. So check the earlier tags for simple stuff.

# Run

```
npm install
npm run build
npm start
```

# Setup

To create this project I went through some steps:

- `npm init`
- npm installs
  - DevDependencies
    - `npm install -D @types/node`
    - `npm install -D babel-core`
    - `npm install -D babel-loader`
    - `npm install -D babel-polyfill`
    - `npm install -D babel-preset-es2015`
    - `npm install -D babel-preset-stage-0`
    - `npm install -D rimraf`
    - `npm install -D ts-loader`
    - `npm install -D typescript`
    - `npm install -D webpack`
- tsc -init
  - tsconfig.json
    - `"target": "es6",`

## Troubleshoot

### error TS2304: Cannot find name 'regeneratorRuntime'.

- The order of the loaders are wrong. TS needs to go first
  - it runs right to left
  - loaders: ['babel', 'ts']
- See http://stackoverflow.com/q/38320220/340760
