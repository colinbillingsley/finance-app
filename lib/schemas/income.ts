// lib/schemas/income.ts
import { z } from "zod";

export const incomeSchema = z.object({
	amount: z
		.number({ message: "Amount is required" })
		.min(1, "Amount must be greater than 0"),

	date: z.string(),

	categoryId: z.string().min(1, "Select a category"),
	notes: z.string().optional(),
});

export type IncomeFormValues = z.infer<typeof incomeSchema>;
