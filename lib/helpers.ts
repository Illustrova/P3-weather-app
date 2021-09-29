// Helper function to validate error
// @see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43553#issuecomment-607427237
export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};
