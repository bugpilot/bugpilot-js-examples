"use client";

import { Bugpilot } from "@bugpilot/next";

// This component is used to wrap all the context providers in your app.
// It must be marked as a client component since context is not supported on the server.

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Bugpilot
      workspaceId="workspace-4848edc7-365c-40a9-8c77-fa19217047f8"
      user={null}
      enabled={true}
    >
      {children}
    </Bugpilot>
  );
};

export default ContextProviders;
