# A vite-based react starter

## Features

1. vite + typescript + swr
2. vitest + react
3. sass
4. prettier

## Usage

### 1. Clone to local

```bash

```

### 2. Install dependencies

```bash
npm install
```

### 3. Development

```bash
npm run dev
```

## Package Installed

### Prettier

```
npm install prettier & eslint-config-prettier
```

### Testing Library Package

```
npm install vitest jsdom --save-dev
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

### sass support

```
npm install sass --save-dev
```

## Added Commands

This starter template added few useful commands. For all avaiable commands, please look at the `package.json`.

### Format project with Prettier

Run prettier on whole project including root path.
By default [prettier ignore](https://prettier.io/docs/en/cli.html#--ignore-path) file patterns describe in `./.gitignore` and `./.prettierignore`

```
npm run format
```

### Run vitest testing

By default [vitest `includes`](https://vitest.dev/config/#include) `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`.

```
npm run test
```
