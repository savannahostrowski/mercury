/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { WorkerState } from "../websocket/wsSlice";

type RunButtonProps = {
  runNb: () => void;
  waiting: boolean;
  workerState: WorkerState;
};

export default function RunButton({
  runNb,
  waiting,
  workerState,
}: RunButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-success"
      style={{ marginRight: "10px", width: "47%" }}
      onClick={() => {
        runNb();
      }}
      disabled={
        waiting ||
        // !allFilesUploaded() ||
        workerState !== WorkerState.Running
      }
    >
      {workerState === WorkerState.Running && (
        <span>
          <i className="fa fa-play" aria-hidden="true"></i> Run
        </span>
      )}
      {workerState === WorkerState.Busy && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-activity"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
            />
          </svg>{" "}
          Busy
        </span>
      )}
      {workerState !== WorkerState.Busy &&
        workerState !== WorkerState.Running && <span>Wait for worker ...</span>}
    </button>
  );
}
