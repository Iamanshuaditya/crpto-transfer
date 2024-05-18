import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Wallet</h3>
              <Button size="sm" variant="outline">
                <RefreshCwIcon className="h-4 w-4" />
                Refresh
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <Input id="wallet-address" placeholder="Enter wallet address" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Balance
                </span>
                <span className="font-medium">0.5 BTC</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-lg font-medium">Send Transaction</h3>
            <div className="space-y-2">
              <Label htmlFor="send-amount">Amount</Label>
              <Input
                id="send-amount"
                placeholder="Enter amount"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipient-address">Recipient Address</Label>
              <Input
                id="recipient-address"
                placeholder="Enter recipient address"
              />
            </div>
            <Button disabled className="w-full">
              Transfer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}
