import { IoC } from "deps";

export function buildContainer(): IoC.Container {
  const container = new IoC.Container({
    defaultScope: "Singleton",
    autoBindInjectable: true,
  });
  return container;
}
