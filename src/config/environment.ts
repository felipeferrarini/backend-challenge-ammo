const assertExists = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const environment = () => ({
  PORT: Number(assertExists('PORT')),
  DATABASE_URL: assertExists('DATABASE_URL'),
});

export type AppEnvironment = ReturnType<typeof environment>;
