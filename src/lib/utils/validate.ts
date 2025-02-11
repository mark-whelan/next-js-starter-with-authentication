import { z } from "zod";

type ValidationPair<T> = [T, z.ZodType<T>];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateInputs<T extends ValidationPair<any>[]>(
  ...pairs: T
): { [K in keyof T]: T[K] extends ValidationPair<infer U> ? U : never } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedData: any[] = [];

  for (const [value, schema] of pairs) {
    const inputValidation = schema.safeParse(value);
    if (!inputValidation.success) {
      console.error(
        `Validation failed for ${JSON.stringify(value).substring(
          0,
          100
        )} and ${JSON.stringify(schema)}: ${inputValidation.error.message}`
      );
      throw new Error("Validation failed");
    }
    parsedData.push(inputValidation.data);
  }

  return parsedData as {
    [K in keyof T]: T[K] extends ValidationPair<infer U> ? U : never;
  };
}
