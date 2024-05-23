'use client'

import { useState } from "react"

export default function Voice(power) {
    const [voiceCells, setVoiceCells] = useState(Array.from({ length: 51}, () => 0))
    return <div className="voice">
        {
            voiceCells.map((cell, index) => (
                <div key={index} data-set-color={cell}/>
            ))
        }
    </div>
}