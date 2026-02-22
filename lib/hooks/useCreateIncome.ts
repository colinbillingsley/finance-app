// lib/hooks/useCreateIncome.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateIncome() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data: unknown) => {
			const res = await fetch("/api/income", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Failed to create income");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["income"] });
		},
	});
}
