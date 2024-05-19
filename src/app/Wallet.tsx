"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { RefreshCwIcon } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import server from "@/lib/server";
import { Input } from "../components/ui/input";

interface WalletProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  walletaddress: string;
  SetBalance: React.Dispatch<React.SetStateAction<number>>;
  balance: number;
}

export function Wallet({
  setAddress,
  walletaddress,
  SetBalance,
  balance,
}: WalletProps) {
  async function SetWalletBalance() {
    try {
      const response = await server.post("/balances", { walletaddress });
      const newbal = response.data;
      SetBalance(newbal);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  if (walletaddress) {
    SetWalletBalance();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Wallet</h3>
        <Button size="sm" variant="outline" onClick={() => location.reload()}>
          <RefreshCwIcon className="h-4 w-4" />
          Refresh
        </Button>
      </div>
      <div className="space-y-2">
        <Label htmlFor="wallet-address">Wallet Address</Label>
        <Input
          id="wallet-address"
          placeholder="Enter wallet address, for example: 0x1"
          onChange={handleChange}
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 dark:text-gray-400">Balance</span>
          <span className="font-medium">{balance}</span>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
