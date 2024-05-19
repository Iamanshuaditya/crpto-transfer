import { balances } from "@/lib/balance";

export async function POST(req: Request, res: Response) {
    try {
        const { sender, recipient, amount } = await req.json();
        if (balances[sender] > amount) {
            Response.json('Insufficient Funds ',{status: 400})
        }
        
            balances[sender] -= amount;
           balances[recipient] += amount;
           return Response.json({balance: balances[sender]})
         

    } catch (error) {
        console.error("Error processing request:", error);

        return Response.json({ error: 'Internal Server Error' });
    }
}
