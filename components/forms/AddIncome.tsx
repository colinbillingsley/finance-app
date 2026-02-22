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
import dayjs from "dayjs";

export function AddIncome() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add Income</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create an income</DialogTitle>
            <DialogDescription>
              Fill in the following fields to create an income.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                defaultValue={0.0}
              />
            </Field>
            <Field>
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" />
            </Field>

            <Field>
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="date"
                name="date"
                placeholder={"Enter any notes here..."}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={() =>
                toast("Income has been created", {
                  description: dayjs(new Date()).format(
                    "dddd, MMMM DD, YYYY at h:mm A",
                  ),
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Add Income
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
