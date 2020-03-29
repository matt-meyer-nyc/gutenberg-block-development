import * as React from "react";
import { MenuStateReturn } from "../MenuState";
export declare function useShortcuts(menuRef: React.RefObject<HTMLElement>, { stops, move }: Pick<MenuStateReturn, "stops" | "move">, timeout?: number): void;
