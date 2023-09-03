import { OptionElement } from "@pakodi/types/types"
import { fontFaceList, fontSizeList, themeList, colorSchemeList } from "@pakodi/utils/constants"
import { ChangeEvent } from "react"
import { useEditorStore } from "@pakodi/lib/store"

import CrossIcon from "./ui/CrossIcon"

interface DropdownProps {
    optionElementList: OptionElement[]
    dropDownFor: string
}


const Dropdown: React.FC<DropdownProps> = ({ optionElementList, dropDownFor }): React.JSX.Element => {
    const store = useEditorStore()
    const handleDropDownChange = (e: ChangeEvent<HTMLSelectElement>) => {
        switch (dropDownFor) {
            case 'theme':
                store.toggleTheme(e.target.value)
                break
            case 'fontSize':
                store.setFontSize(parseInt(e.target.value))
                break
            default:
                break
        }
    }
    return (
        <select className="bg-gray-700 opacity-75 text-xs font-mono" onChange={handleDropDownChange}>
            {optionElementList.map((item: OptionElement) => {
                if (dropDownFor === "fontSize" && store.fontSize == parseInt(item.value)) {
                    return <option selected value={item.value} key={item.label}>{item.label}</option>
                }

                if (dropDownFor === "theme" && store.theme == item.value) {
                    return <option selected value={item.value} key={item.label}>{item.label}</option>
                }
                return <option value={item.value} key={item.label}>{item.label}</option>
            })}
        </select>
    )
}


export default function OptionModel(): React.JSX.Element {
    return (<>
        <div className="absolute inset-0 backdrop-blur-sm">
            <div className="flex justify-center mt-[18vh]">
                <div className="relative w-[420px] h-[260px] thin-border rounded-md option-box text-white">
                    <CrossIcon />
                    <div className="flex flex-col items-center w-[240px] mx-auto mt-20 gap-2">
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Font size:</label>
                            <Dropdown optionElementList={fontSizeList} dropDownFor="fontSize" />
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Font face:</label>
                            <Dropdown optionElementList={fontFaceList} dropDownFor="fontFace" />
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Themes:</label>
                            <Dropdown optionElementList={themeList} dropDownFor="theme" />
                        </div>

                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Color scheme:</label>
                            <Dropdown optionElementList={colorSchemeList} dropDownFor="colorScheme" />
                        </div>
                    </div>
                    <div className="border-top mt-12 flex justify-end h-10 ">
                        <div className="flex justify-between gap-2 mr-2">
                            <button className="text-xs font-mono px-3">
                                Revert
                            </button>
                            <button className="text-xs font-mono px-3 opacity-40">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}