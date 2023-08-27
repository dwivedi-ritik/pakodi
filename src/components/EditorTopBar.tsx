import { ChangeEvent } from 'react'

interface SelectComponentProps {
    setSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function EditorTopPanel({ setSelectChange }: SelectComponentProps) {

    return (
        <div className="h-12 border-bottom position-fixed flex justify-between items-center">
            <p className="text-sm ml-4">
                Pakcodi <span className="opacity-50 text-xs">(Browser based Text Editor)</span>
            </p>
            <div className="flex font-mono text-xs mr-4">

                <p className="font-medium pr-2">Language</p>
                <select className=" block w-full bg-gray-700 opacity-75" onChange={setSelectChange}>
                    <option selected value="javascript">Javascript</option>
                    <option value="python">Python</option>
                    <option value="sql">SQL</option>
                    <option value="json">json</option>
                    <option value="java">Java</option>
                </select>
            </div>
        </div>
    )
}
