# dev-ciro-sira-frontend

## Requirements

- Node: v20.16.0
- Npm: v10.8.1
- Next: v15.1.7
- Tailwindcss: v3.4.1

## Installation / How to run

To install it you just need to clone the repository and run the following command:

Install dependencies

```bash
npm install
```

To run the samples in development mode, run the following command:

```bash
npm run dev
```

To run the Doc, run the following command:

```bash
npm run storybook
```

To run the samples in production mode, first build the samples using the following command:

```bash
npm run build
```

Then, run the following command to serve the samples:

```bash
npm run start
```

## Environment Variables

The environment variables are located in the `.env.local` file. The following environment variables are required:

- `NEXT_PUBLIC_API_UR`: API URL

## Pages description

- `/`: The homepage of the application.
- `[slug]`: A post page
- `/404`: The 404 page of the application.

## Project Structure

```bash
dev-ciro-sira-frontend
│
├── apps/
│   │
│   ├── remote/
│   │   ├── public/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── ...
│   │   ├── tailwind.config.js
│   │   ├── next.config.js
│   │   └── tsconfig.json
└── docs/
```

## Stack, Libraries, and Tools

This project uses the following stack:

- Library: [React](https://reactjs.org/)
- Framework: [Next.js](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Deployment: [Vercel](https://vercel.com/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Version Control: [Git](https://git-scm.com/)
- Repository Hosting: [GitHub](https://github.com/)
- Data fetching: Axios

## License

This project is open source and available under the [MIT License](LICENSE).
