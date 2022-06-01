export function withSetup(
  action: (t: Deno.TestContext) => Promise<void>,
): (t: Deno.TestContext) => Promise<void> {
  return async (t: Deno.TestContext) => {
    const dir = await Deno.makeTempDir({ prefix: "hello-gen" });
  
    try {
      Deno.chdir(dir);
  
      // Act
      return await action(t);
    } finally {
      await Deno.remove(dir);
    }
  }
}