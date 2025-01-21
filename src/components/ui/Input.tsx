import React from 'react';
import { Input as MUIInput, InputProps } from "@mui/material";

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <div className="w-full flex items-center justify-center">
            <MUIInput {...props} ref={ref}/>
        </div>
    )
})

export default CustomInput;

