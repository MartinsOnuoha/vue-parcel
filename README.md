# Vue Parcel

A starter template for building Vue.js applications using [Parcel](https://parceljs.org/) as the bundler. This project aims to provide a minimal yet extensible setup for rapid Vue development without the complexity of traditional tooling.

## Features

- ⚡️ **Fast zero-config builds** with Parcel
- 🔥 **Hot Module Replacement** out of the box
- 🛠 **Single File Components** support (.vue files)
- 📝 **ES6+ JavaScript** and **SCSS** support
- 🗂 Simple project structure for easy scaling
- 🍃 Minimal dependencies, easy to maintain

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v10+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone this repo and install dependencies:

```bash
git clone https://github.com/MartinsOnuoha/vue-parcel.git
cd vue-parcel
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:1234](http://localhost:1234) by default.

### Building for Production

```bash
npm run build
# or
yarn build
```
Build output will be in the `dist/` directory.

## Project Structure

```
vue-parcel/
├── src/
│   ├── App.vue
│   ├── main.js
│   └── assets/
├── dist/
├── package.json
└── .gitignore
```

- **src/**: Source code
- **dist/**: Production build output

## Scripts

- `dev`: Start the development server with hot reloading
- `build`: Build the app for production

## Customization

You can add more Parcel plugins or configure Babel, PostCSS, or TypeScript as needed. See [Parcel documentation](https://parceljs.org/) for more information.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [MartinsOnuoha](https://github.com/MartinsOnuoha)
