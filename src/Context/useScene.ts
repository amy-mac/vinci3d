import { use } from "react";
import { SceneContext } from "./SceneContext";

export function useScene() {
  const context = use(SceneContext);
  if (!context) {
    throw new Error("useScene must be used within a SceneProvider");
  }
  return context;
}
