"use client";
import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
	clusterApiUrl,
	Connection,
	PublicKey,
	LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  import { useWallet, useConnection } from "@solana/wallet-adapter-react";

export default function TopUp() {
	const  { publicKey } = useWallet();
	const { connection } = useConnection();

	const [amount, setAmount] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	useEffect(() => {
		const storedAddress = localStorage.getItem("walletAddress");
		if (storedAddress) {
			setWalletAddress(storedAddress);
		}
	}, []);

	const handleTopUp = async (e) => {
		e.preventDefault();
		// if (!walletAddress) {
		// 	toast.error("Please create a wallet first");
		// 	return;
		// }

		// try {
		// 	const response = await fetch("/api/maschain/token/mint", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			amount,
		// 			walletAddress,
		// 		}),
		// 	});

		// 	if (!response.ok) {
		// 		throw new Error("Failed to top up wallet");
		// 	}

		// 	const data = await response.json();
		// 	console.log("Top up successful:", data);
		// 	toast.success(`Successfully topped up ${amount} tokens!`,{
		// 				action: {
		// 				  label: "View",
		// 				  onClick: () => {
		// 					window.open(
		// 					  "https://explorer-testnet.maschain.com/" +
		// 						data.result.transactionHash,
		// 					  "_blank"
		// 					);
		// 				  },
		// 				},
		// 			  });
		// 	setAmount("");
		// } catch (error) {
		// 	console.error("Error topping up wallet:", error);
		// 	toast.error("Failed to top up wallet. Please try again.");
		// }
	};

	return (
		<Dialog>
			<DialogTrigger className='bg-blue-600 rounded-lg text-white px-3 py-2'>
				Top Up SOL
			</DialogTrigger>
			<DialogContent className='bg-white'>
				<DialogHeader>
					<DialogTitle>Top Up Wallet</DialogTitle>
					<DialogDescription>Enter the amount you want to top up.</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleTopUp} className='space-y-4'>
					<div>
						<label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
							Amount (in tokens)
						</label>
						<Input
							id='amount'
							type='number'
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							required
							className='mt-1 text-black bg-white'
							min='0.000001'
						/>
					</div>
					<Button type='submit' className='w-full'>
						Buy SOL
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
