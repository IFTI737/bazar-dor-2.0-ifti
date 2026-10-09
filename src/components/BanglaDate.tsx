"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

// The date is read in the browser so the prerendered page never shows a stale day
const BanglaDate = () => {
  const date = useSyncExternalStore(subscribe, getDate, () => "");
  return <>{date || " "}</>;
};

export default BanglaDate;
