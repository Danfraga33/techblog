export const postContentsBySlug = Object.fromEntries(
  Object.entries(
    import.meta.glob("../app/content/*.mdx", {
      query: "?raw",
      import: "default",
      eager: true,
    }),
  ).map(([filePath, contents]) => {
    if (typeof contents !== "string") {
      throw new Error(
        `Expected ${filePath} to be a string, but got ${typeof contents}`,
      );
    }

    return [
      filePath.replace("../content/", "").replace(/\.mdx$/, ""),
      contents,
    ];
  }),
);
