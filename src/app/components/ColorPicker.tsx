
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

export default function BasicColor(e:any) {
    const [color, setColor] = useState(e);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e: ColorPickerChangeEvent) => setColor(e.value)} />
        </div>
    )
}

