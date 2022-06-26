export function withTestContext(
  action: (t: Deno.TestContext) => Promise<void>,
): (t: Deno.TestContext) => Promise<void> {
  return async (t: Deno.TestContext) => {
    const cwd = Deno.cwd();
    const dir = await Deno.makeTempDir({ prefix: "hello-gen" });

    try {
      Deno.chdir(dir);

      // Act
      return await action(t);
    } finally {
      Deno.chdir(cwd);
      await Deno.remove(dir, { recursive: true });
    }
  };
}
