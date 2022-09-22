This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Detail

The main thing for this task is to read CSV file and parse it.
The CsvReader in the components directory is charging for reading and parsing CSV file.<br/>

In the main page, our app share its state (table data) with top navbar component and data table component through passing state and callback function.
