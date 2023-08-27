import { useState, ChangeEvent } from "react"
import EditorBottomBar from "./EditorBottomBar"
import EditorTopBar from "./EditorTopBar"
import { Editor } from "@monaco-editor/react"


export default function EditorBody() {
    let [selectedLanguage, setSelectedLanguage] = useState('javascript')
    let [editorTextContent, setEditorTextContent] = useState('')
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value)
    }

    return (
        <div className="rounded-md overflow-hidden editor-body">
            <EditorTopBar setSelectChange={handleSelectChange} />
            <div className="editor-main-body">
                <Editor height="50vh" language={selectedLanguage} theme="vs-dark" value={editorTextContent} />
            </div>
            <EditorBottomBar />
        </div>
    )

}