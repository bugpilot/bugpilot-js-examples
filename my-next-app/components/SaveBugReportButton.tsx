"use client";

import { useBugpilot } from "@bugpilot/next";

const SaveBugReportButton = () => {
  const { saveBugReport } = useBugpilot();

  return (
    <button
      className="bg-red-20 p-4 border-2 border-red-400 rounded-md px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      onClick={saveBugReport}
    >
      Save bug report
    </button>
  );
};

export default SaveBugReportButton;
