import { useCallback, useState, type ReactNode } from "react";
import {
  SceneContext,
  type HistoryRecord,
  type PumpkinState,
  type SceneState,
} from "./SceneContext";

export const PUMPKIN_COLOR = "#F58A47";

const INITIAL_HISTORY = {
  current: 1,
  records: [{ version: 1, pumpkinState: { color: PUMPKIN_COLOR }, modifiedDate: null }],
};

export default function SceneProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<SceneState["history"]>(INITIAL_HISTORY);

  const updateHistory = useCallback(
    (pumpkinState: PumpkinState) =>
      setHistory((prevHistory) => {
        const lastVersion = prevHistory.records[prevHistory.records.length - 1];
        const newVersionNum = lastVersion.version + 1;
        const newVersion = {
          version: newVersionNum,
          pumpkinState: pumpkinState,
          modifiedDate: new Date().toISOString(),
        };
        return { current: newVersionNum, records: [...prevHistory.records, newVersion] };
      }),
    [],
  );

  const toggleVersion = useCallback(
    (versionNumber: HistoryRecord["version"]) =>
      setHistory((prevHistory) => ({ ...prevHistory, current: versionNumber })),
    [setHistory],
  );

  const recordToShow = history.records.find((record) => record.version === history.current);

  return (
    <SceneContext value={{ history, recordToShow, toggleVersion, updateHistory }}>
      {children}
    </SceneContext>
  );
}
