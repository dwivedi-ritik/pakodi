import { useState } from "react";
import EditorBody from "./EditorBody"
import OptionModel from "./OptionModel"

export default function Layout() {
    let [showOptionBox, setShowOptionBox] = useState(false);
    return (
        <div className="w-2/3 mx-auto mt-12">
            <EditorBody setShowOptionBox={setShowOptionBox} />

            {showOptionBox && <OptionModel setShowOptionBox={setShowOptionBox} />}
        </div>
    )
}