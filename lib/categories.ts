export const categories = [
	"Salary",
	"Bonus",
	"Freelance",
	"Investment",
	"Interest",
	"Refund",
	"Gifts",
	"Reimbursement",
	"Other",
] as const;

export type Category = (typeof categories)[number];
