// Issues with Generice Type Inference
import { useState } from "react";

function ColorPicker() {
    const [colors, setColors] = useState<string[]>([]);

    const handleClick = () => {
        setColors([...colors, 'red']);
    }

    return (
        <button
            onClick={handleClick}
        >
            Click
        </button>
    )
}

export default ColorPicker;