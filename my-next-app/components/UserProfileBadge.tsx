"use client";

// You can identify users wherever you prefer in your app. It might be a good idea to call
// identify() in the same component you use to render the user profile badge, if you have one.
// You can also call identify() in any client-side event handler, e.g., when the user logs in.
// Note: Only client components can call identify().

import { useBugpilot } from "@bugpilot/next";
import { useEffect, useMemo } from "react";

const UserProfileBadge = () => {
  const { identify } = useBugpilot();
  // const { user } = useAuth(); // TODO: replace with your own auth hook

  const user = useMemo(
    () => ({
      // Required: user id and email
      id: "123",
      email: "jane@bugpilot.io",

      // Optional: any other user properties you want to pass (must be json-serializable)
      // firstName, lastName will be used to display the user's name in the dashboard
      firstName: "Jane",
      lastName: "Doe",
    }),
    []
  );

  useEffect(() => {
    // Here is an example call to identify(); it can be called anywhere in your app
    // to update the user details as soon as they are available or updated.

    identify(user);
  }, [identify, user]);

  // ...

  return (
    <p className="rounded-sm bg-green-200 p-4">Welcome, {user.firstName}</p>
  );
};

export default UserProfileBadge;
