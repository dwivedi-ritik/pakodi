import { useState, ChangeEvent } from "react"
import EditorBottomBar from "./EditorBottomBar"
import EditorTopBar from "./EditorTopBar"
import { Editor } from "@monaco-editor/react"
import { useEditorStore } from "@pakodi/lib/store"

export default function EditorBody() {
    let [selectedLanguage, setSelectedLanguage] = useState('javascript')
    let [editorValue, setEditorValue] = useState('')
    let store = useEditorStore()


    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value)
    }
    const handleEditorChange = (newValue: string | undefined) => {
        setEditorValue(newValue!)
    }
    return (
        <div className="rounded-md overflow-hidden editor-body">
            <EditorTopBar setSelectChange={handleSelectChange} />
            <div className="editor-main-body">
                <Editor height="375px" language={selectedLanguage} theme={store.theme} value={editorValue} onChange={handleEditorChange}
                    options={{ "fontSize": store.fontSize }}
                />
            </div>
            <EditorBottomBar selectedLanguage={selectedLanguage} editorValue={editorValue} setEditorValue={setEditorValue} />
        </div>
    )

}
