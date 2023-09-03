import React from 'react'
import { useOptionStore } from '@pakodi/lib/store'

const CrossIcon: React.FC = (): React.JSX.Element => {
    const store = useOptionStore()
    return (
        <svg onClick={() => store.toggleOptionBox(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-6 h-6 absolute top-2 right-2 opacity-50 cursor-pointer hover:opacity-100 ">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
    )
}


export default CrossIcon