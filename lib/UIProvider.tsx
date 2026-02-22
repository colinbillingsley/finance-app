"use client";

// ui-state.ts
export type UIState = {
	sidebarOpen: boolean;
	selectedAccountId: string | null;
	transactionFilter: "all" | "income" | "expense";
};

type UIAction =
	| { type: "TOGGLE_SIDEBAR" }
	| { type: "SET_ACCOUNT"; payload: string | null }
	| { type: "SET_FILTER"; payload: "all" | "income" | "expense" };

function uiReducer(state: UIState, action: UIAction): UIState {
	switch (action.type) {
		case "TOGGLE_SIDEBAR":
			return { ...state, sidebarOpen: !state.sidebarOpen };

		case "SET_ACCOUNT":
			return { ...state, selectedAccountId: action.payload };

		case "SET_FILTER":
			return { ...state, transactionFilter: action.payload };

		default:
			return state;
	}
}

import { createContext, useReducer, useContext } from "react";

const UIContext = createContext<
	| {
			state: UIState;
			dispatch: React.Dispatch<UIAction>;
	  }
	| undefined
>(undefined);

const initialState: UIState = {
	sidebarOpen: true,
	selectedAccountId: null,
	transactionFilter: "all",
};

export function UIProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(uiReducer, initialState);

	return (
		<UIContext.Provider value={{ state, dispatch }}>
			{children}
		</UIContext.Provider>
	);
}

export function useUI() {
	const context = useContext(UIContext);
	if (!context) throw new Error("useUI must be used within UIProvider");
	return context;
}
