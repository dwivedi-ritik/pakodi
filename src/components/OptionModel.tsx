import { OptionElement } from "@pakodi/types/uiElement.t"
import { fontFaceList, fontSizeList, themeList, colorSchemaList } from "@pakodi/constants/optionDropdowns"

interface DropdownProps {
    optionElementList: OptionElement[]
}


const CrossIcon = ({ setShowOptionBox }: any) => {
    return (
        <svg onClick={() => setShowOptionBox(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-6 h-6 absolute top-2 right-2 opacity-50 cursor-pointer hover:opacity-100 ">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
    )
}


const Dropdown: React.FC<DropdownProps> = ({ optionElementList }): React.JSX.Element => {
    return (
        <select className="bg-gray-700 opacity-75 text-xs font-mono">
            {optionElementList.map((item: OptionElement) => {
                return <option value={item.value}>{item.label}</option>
            })}
        </select>
    )
}


export default function OptionModel({ setShowOptionBox }: any): React.JSX.Element {
    return (<>
        <div className="absolute inset-0 backdrop-blur-sm">
            <div className="flex justify-center mt-[18vh]">
                <div className="relative w-[420px] h-[260px] thin-border rounded-md option-box text-white">
                    <CrossIcon setShowOptionBox={setShowOptionBox} />
                    <div className="flex flex-col items-center w-[240px] mx-auto mt-20 gap-2">
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Font size:</label>
                            <Dropdown optionElementList={fontSizeList} />
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Font face:</label>
                            <Dropdown optionElementList={fontFaceList} />
                        </div>
                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Themes:</label>
                            <Dropdown optionElementList={themeList} />
                        </div>

                        <div className="flex justify-between w-full px-6">
                            <label className="text-xs font-mono font-medium">Color scheam:</label>
                            <Dropdown optionElementList={colorSchemaList} />
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