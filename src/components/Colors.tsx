
interface ColorPickerProps {
    colors: string[];
    handleColorSelect: (color: string) => void;
}

function ColorPicker({ colors, handleColorSelect }: ColorPickerProps) {
    const renderedColors = colors.map(color => {
        return <button key={color} onClick={() => handleColorSelect(color)}>
            {color}
        </button>
    });

    return (<div className="m-3">
        {renderedColors}
    </div>
    );
}


export default ColorPicker;