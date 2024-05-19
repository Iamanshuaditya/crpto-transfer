import { balances } from "@/lib/balance"

export async function POST(req: Request,res: Response) {
    try {
        const walletaddress = await req.json()
        console.log(walletaddress)
        const balance: number = balances[walletaddress.walletaddress] || 0 
        console.log(balance)
        return Response.json(balance)
    } catch (error) {
        console.log(error)
        return Response.error()
    }
}