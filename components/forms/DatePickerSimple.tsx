"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export function DatePickerSimple({
	date,
	setDate,
}: {
	date: Date;
	setDate: (date: Date) => void;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id="date"
						className="font-normal w-full justify-start"
					>
						{date ? dayjs(date).format("LL") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						required
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
						defaultMonth={date}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
