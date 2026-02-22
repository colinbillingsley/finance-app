"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import React from "react";
import { DatePickerSimple } from "./DatePickerSimple";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { incomeSchema, IncomeFormValues } from "@/lib/schemas/income";
import { useCreateIncome } from "@/lib/hooks/useCreateIncome";

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { categories } from "@/lib/categories";
import { set } from "date-fns";

dayjs.extend(localizedFormat);

export function AddIncome() {
	const [date, setDate] = React.useState<Date>(new Date());
	const mutation = useCreateIncome();

	const form = useForm<IncomeFormValues>({
		resolver: zodResolver(incomeSchema),
		defaultValues: {
			amount: 0,
			date: new Date().toISOString().split("T")[0],
			categoryId: "",
			notes: "",
		},
	});

	function onSubmit(values: IncomeFormValues) {
		// convert dollars → cents here
		const payload = {
			...values,
			amount: Math.round(values.amount * 100),
		};

		toast("Income has been created", {
			description: dayjs(new Date()).format("LLLL"),
		});
	}

	function onCancel() {
		form.reset();
		setDate(new Date());
	}

	return (
		<Dialog onOpenChange={onCancel}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<DialogTrigger asChild>
						<Button>Add Income</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-lg">
						<DialogHeader>
							<DialogTitle>Create an income</DialogTitle>
							<DialogDescription>
								Fill in the following fields to create an income.
							</DialogDescription>
						</DialogHeader>

						<FormField
							control={form.control}
							name="amount"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Amount</FormLabel>
									<FormControl>
										<Input
											type="number"
											step="0.01"
											{...field}
											onChange={(e) =>
												field.onChange(parseFloat(e.target.value))
											}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="date"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Date</FormLabel>
									<FormControl className="w-full">
										<DatePickerSimple
											{...field}
											date={date}
											setDate={setDate}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="categoryId"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Category</FormLabel>
									<FormControl>
										<Select>
											<SelectTrigger className="w-full">
												<SelectValue {...field} placeholder="Category" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													{categories.map((cat) => (
														<SelectItem
															key={cat.toLowerCase()}
															value={cat.toLowerCase()}
														>
															{cat}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Notes</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline" onClick={onCancel}>
									Cancel
								</Button>
							</DialogClose>
							<Button
								type="submit"
								onClick={() =>
									toast("Income has been created", {
										description: dayjs(new Date()).format("LLLL"),
									})
								}
							>
								Add Income
							</Button>
						</DialogFooter>
					</DialogContent>
				</form>
			</Form>
		</Dialog>
	);
}
