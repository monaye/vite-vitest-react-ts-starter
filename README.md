# A vite-based react starter

## Features

1. vite + typescript + swr
2. vitest
3. sass
4. prettier

## Usage

### 1. Clone to local

```bash
git clone git@github.com:monaye/vite-vitest-react-ts-starter.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Development

```bash
npm run dev
```

## Installed Packages

### Prettier

```
npm i -D prettier & eslint-config-prettier
```

### Testing Library Package

```
npm i -D vitest jsdom
npm i -D @testing-library/react @testing-library/jest-dom
npm i -D @vitest/ui @vitest/coverage-v8
```

### sass support

```
npm i -D sass
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
npm run test:ui
npm run test:coverage
```
