"use client";
import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import server from "@/lib/server";

interface TransferProps {
  sender: string;
  SetBalance: React.Dispatch<React.SetStateAction<number>>;
}

function Transfer({ sender, SetBalance }: TransferProps) {
  const [amount, setAmount] = useState<number | "">("");
  const [recipient, setRecipient] = useState<string>("");

  async function handleTransfer() {
    try {
      const response = await server.post("/send", {
        sender,
        recipient,
        amount,
      });

      SetBalance(response.data.balance);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  }

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value ? Number(e.target.value) : "");
  }

  function handleRecipientChange(e: ChangeEvent<HTMLInputElement>) {
    setRecipient(e.target.value);
  }

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 space-y-4">
      <h3 className="text-lg font-medium">Send Transaction</h3>
      <div className="space-y-2">
        <Label htmlFor="send-amount">Amount</Label>
        <Input
          id="send-amount"
          placeholder="Enter amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="recipient-address">Recipient Address</Label>
        <Input
          id="recipient-address"
          placeholder="Enter recipient address"
          value={recipient}
          onChange={handleRecipientChange}
        />
      </div>
      <Button className="w-full" onClick={handleTransfer}>
        Transfer
      </Button>
    </div>
  );
}

export default Transfer;
