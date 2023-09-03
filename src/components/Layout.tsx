import EditorBody from "./EditorBody"
import OptionModel from "./OptionModel"
import { useOptionStore } from "@pakodi/lib/store";


export default function Layout() {
    let store = useOptionStore()
    return (
        <div className="w-2/3 mx-auto mt-12">
            <EditorBody />
            {store.showOptionBox && <OptionModel />}
        </div>
    )
}