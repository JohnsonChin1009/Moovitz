"use client";
import { useState, useEffect } from "react";

const ProjectBalance = ({ projectWalletAddress }) => {
	const [balance, setBalance] = useState("0");

	const fetchBalance = async () => {
		try {
			const response = await fetch("/api/maschain/token/balance", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ wallet_address: projectWalletAddress }),
			});

			if (!response.ok) {
				throw new Error("Failed to fetch balance");
			}

			const data = await response.json();

			setBalance(data.result);
		} catch (error) {
			console.error("Error fetching balance:", error);
		}
	};

	useEffect(() => {
		fetchBalance();
	}, []);

	return <div className='text-sm text-white'>Project Balance: {balance} tokens</div>;
};

export default ProjectBalance;
