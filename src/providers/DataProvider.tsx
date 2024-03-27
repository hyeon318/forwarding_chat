"use client";
import { TFriend } from "@/components/atom/list/List";
import React, { createContext, useContext, useMemo, useState } from "react";
type props = {
  // value: TPane[]
  children: React.ReactNode;
};

type TDataContext = {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  friends: TFriend[];
  setFriends: React.Dispatch<React.SetStateAction<TFriend[]>>;
};

const DataContext = createContext<TDataContext>({
  accessToken: "",
  friends: [],
  setAccessToken: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  setFriends: function (value: React.SetStateAction<TFriend[]>): void {
    throw new Error("Function not implemented.");
  },
});

export function DataProvider({ children }: props) {
  const [accessToken, setAccessToken] = useState<string>("");
  const [friends, setFriends] = useState<TFriend[]>([]);

  const dataStore = useMemo(
    () => ({
      accessToken: accessToken,
      setAccessToken: setAccessToken,
      friends: friends,
      setFriends: setFriends,
    }),
    []
  );
  return <DataContext.Provider value={dataStore}></DataContext.Provider>;
}

export default function useDataContext() {
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error("Data Context is null");
  }
  return context;
}
