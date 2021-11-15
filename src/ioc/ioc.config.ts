import { Container } from "../../deps.ts";

export function buildContainer(): Container {
  const container = new Container({
    defaultScope: "Singleton",
    autoBindInjectable: true,
  });
  return container;
}
