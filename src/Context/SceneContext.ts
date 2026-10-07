import { createContext, type CSSProperties } from "react";

export interface PumpkinState {
  /** @default #F58A47 */
  color: NonNullable<CSSProperties["color"]>;
}

export interface HistoryRecord {
  modifiedDate: string | null;
  pumpkinState: PumpkinState;
  version: number;
}

export interface SceneState {
  history: {
    /** @default 1 */
    current: HistoryRecord["version"];
    records: HistoryRecord[];
  };
  recordToShow: HistoryRecord | undefined;
  toggleVersion: (versionNum: HistoryRecord["version"]) => void;
  updateHistory: (pumpkinState: PumpkinState) => void;
}

export const SceneContext = createContext<SceneState | null>(null);
