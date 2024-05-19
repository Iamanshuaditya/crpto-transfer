 export const balances: { [key: string]: number } = {
    '0x1': 5000,
    '0x2': 400,
    '0x3': 100,
    '0x4': 1200
}
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