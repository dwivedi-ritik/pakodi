/*
Zustand state management
*/

import { create } from "zustand";

import { EDITOR_THEME, EDITOR_COLOR_SCHEME } from "@pakodi/types/types";


type EditorStore = {
    theme: string,
    colorScheme: string,
    fontFace: string,
    fontSize: number,
    toggleTheme: (mode: string) => void,
    setColorSheme: (colorScheme: string) => void,
    setFontFace: (font: string) => void,
    setFontSize: (fontSize: number) => void
}


export const useEditorStore = create<EditorStore>((set) => ({
    theme: EDITOR_THEME.DARK,
    colorScheme: EDITOR_COLOR_SCHEME.VS_DARK,
    fontFace: 'CascadiaCode',
    fontSize: 14,
    toggleTheme(mode: string) {
        set((state) => ({
            ...state,
            theme: mode === 'dark' ? EDITOR_THEME.DARK : EDITOR_THEME.LIGHT
        }))
    },
    setColorSheme(colorScheme: string) {
        set((state) => ({
            ...state,
            colorScheme: colorScheme
        }))
    },
    setFontFace(font: string) {
        set((state) => ({
            ...state,
            fontFace: font
        }))
    },
    setFontSize(fontSize: number) {
        set((state) => ({
            ...state,
            fontSize: fontSize
        }))
    }

}))

type OptionBoxStore = {
    showOptionBox: boolean,
    toggleOptionBox: (show: boolean) => void
}

export const useOptionStore = create<OptionBoxStore>((set) => ({
    showOptionBox: false,
    toggleOptionBox(show: boolean) {
        set((state) => ({
            ...state,
            showOptionBox: show
        }))
    }
}))