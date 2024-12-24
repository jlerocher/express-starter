# Express Starter

This project is a starter for an API application using Express.js, Typescript

## Prerequisites

- Node.js (version 22.11.0 or higher)
- yarn (version 1.22.22 or higher)

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/express-starter.git
cd express-starter
yarn
```

## Usage

1. Set up environments variables from .env.example and execute `docker-compose-dev.yml`

2. Push schema or apply migrations

```bash
yarn db:push
```

3. Start the development server

```bash
yarn dev
```

The server will be accessible at `http://localhost:8080`.

## Yarn Scripts

The following yarn scripts are available:

- `start`: Runs the built application using Node.js.
- `dev`: Starts the development server with `nodemon` and `ts-node`.
- `build`: Compiles the TypeScript code to JavaScript.
- `db:push`: Pushes the Prisma schema state to the database.
- `db:gen`: Generates Prisma client based on the schema.
- `migrate`: Runs database migrations with Prisma.
- `studio`: Opens Prisma Studio for database management.
- `postinstall`: Runs Prisma generate after dependencies are installed.
- `env`: Generates environment variables using a custom script.
- `lint`: Runs ESLint to lint the codebase.
- `format`: Formats the codebase using Prettier.
- `test`: Runs tests using Jest.

## Project Structure

The project structure is as follows:

```
├── prisma/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── scripts/
│   └── __tests__/
│   ├── index.ts
│   ├── app.ts
├── tsconfig.json
├── docker-compose-dev.yml
├── eslint.config.mjs
├── jest.config.js
├── package.json
├── README.md
└── yarn.lock
```

- `prisma/`: Contains the Prisma schema and migration files.
- `src/`: Contains the source code for the application.
    - `controllers/`: Contains the controller files for handling requests.
    - `routes/`: Contains the route definitions.
    - `scripts/`: Contains any custom scripts.
    - `__tests__/`: Contains the test files.
    - `index.ts`: The entry point for the application.
    - `app.ts`: The main application setup.
- `tsconfig.json`: TypeScript configuration file.
- `docker-compose-dev.yml`: Docker Compose configuration for development.
- `eslint.config.mjs`: ESLint configuration file.
- `jest.config.js`: Jest configuration file.
- `package.json`: Contains the project dependencies and scripts.
- `README.md`: The readme file you are currently reading.
- `yarn.lock`: Yarn lock file for dependency management.

## Contribution

Contributions are welcome! Please submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
