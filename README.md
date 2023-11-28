# wander-map

[Wander map :airplane:](https://lizshigetoshi.com/wander-map/) Toy project for putting adventures on a map.

## Basics

- Install [Node.js + npm](https://nodejs.org/en/)
- Clone or fork the repository `https://github.com/lshig/wander-map.git`
- Install [nvm](https://github.com/nvm-sh/nvm) and run `nvm use` to run a stable version of Node.js + npm within the project
- Set up `.env.local` file with development restricted Mapbox access token
- Run `npm run dev` to open development at `http://localhost:3000/wander-map`
- Run `npm run build` to build production files to `out/` folder
- Set up production with production restricted Mapbox access token and GitHub Actions workflow to deploy `main` branch to `gh-pages` branch for [live](https://lizshigetoshi.com/wander-map/)

## Flavors

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [PostCSS](https://postcss.org/)
- [Remark](https://github.com/remarkjs/remark-lint)
- Run `npm run format` to format and write `*.js`, `*.scss`, `*.css`, and `*.md` files with Prettier
- Run `npm run lint` to determine if there are simple errors according to ESLint, Stylelint, and Remark

## Credits

This project is using a [template Mapbox designer style](https://studio.mapbox.com/) called North Star.
