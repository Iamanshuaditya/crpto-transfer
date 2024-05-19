"use client";
import { useState } from "react";
import Wallet from "./Wallet";
import Transfer from "./transfer";

export default function Component() {
  const [address, setAddress] = useState("");
  const [balance, SetBalance] = useState(0);
  return (
    <>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
          <Wallet
            SetBalance={SetBalance}
            balance={balance}
            setAddress={setAddress}
            walletaddress={address}
          />
          <Transfer sender={address} SetBalance={SetBalance} />
        </div>
      </div>
    </>
  );
}
