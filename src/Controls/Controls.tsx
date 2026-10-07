import '../App.css'
import type { ChangeEvent } from "react";
import { useScene } from "../Context/useScene";
import type { HistoryRecord, SceneState } from "../Context/SceneContext";

function ColorInput({
  recordToShow,
  updateHistory,
}: {
  recordToShow: HistoryRecord;
  updateHistory: SceneState["updateHistory"];
}) {
  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    updateHistory({ color: value });
  };

  return (
    <label htmlFor="pumpkinColor">
      Change Color
      <input
        className="form__input"
        name="pumpkinColor"
        id="pumpkinColor"
        onChange={handleUpdate}
        type="color"
        value={recordToShow.pumpkinState.color}
      />
    </label>
  );
}

function VersionSelect({
  records,
  recordToShow,
  toggleVersion,
}: {
  records: HistoryRecord[];
  recordToShow: HistoryRecord;
  toggleVersion: SceneState["toggleVersion"];
}) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    toggleVersion(+value);
  };

  return (
    <label htmlFor="versionHistory">
      Version History
      <select
        className='form__input'
        name="versionHistory"
        id="versionHistory"
        onChange={handleChange}
        value={recordToShow.version}
      >
        {records.map((record) => (
          <option key={`version${record.version}`} value={record.version}>
            {record.version} {record.modifiedDate && (<>&mdash; {record.modifiedDate}</>)}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Controls() {
  const { history, recordToShow, toggleVersion, updateHistory } = useScene();

  if (!recordToShow) return null;

  const shouldDisable =
    history.records[history.records.length - 1].version !== recordToShow?.version;

  return (
    <form className='form__controls'>
      <VersionSelect
        recordToShow={recordToShow}
        records={history.records}
        toggleVersion={toggleVersion}
      />

      <fieldset className="form__fieldset" disabled={shouldDisable}>
        <legend>Object Controls</legend>
        <ColorInput recordToShow={recordToShow} updateHistory={updateHistory} />
      </fieldset>
    </form>
  );
}
