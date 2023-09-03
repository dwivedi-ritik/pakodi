import { OptionElement } from "@pakodi/types/types"

/*
constants for editor
*/










/*
constants for option components
*/
export const themeList: OptionElement[] = [
    {
        value: "dark",
        label: "dark",
    },
    {
        value: "light",
        label: "light"
    },
]

function generateFontSizes(): OptionElement[] {
    const optionElementList: OptionElement[] = []
    const numberList: number[] = [...Array(20).keys()]
    numberList.forEach(item => {
        if (item >= 8 && item % 2 == 0) {
            const optionElement: OptionElement = {
                value: item.toString(),
                label: item.toString()
            }
            optionElementList.push(optionElement)
        }
    })
    return optionElementList
}

export const fontSizeList: OptionElement[] = generateFontSizes()

export const fontFaceList: OptionElement[] = [
    {
        value: "JetBrains Mono",
        label: "JetBrains Mono",
    },
    {
        value: "Monalisa",
        label: "Monalisa",
    }
]

export const colorSchemeList: OptionElement[] = [
    {
        value: "Cobalt",
        label: "Cobalt"
    },
    {
        value: "vs-dark",
        label: "VS Dark"
    }
]
