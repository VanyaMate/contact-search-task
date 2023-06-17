import InputWithMask from "../ui/inputs/input-mask/input-mask.component";
import React from "react";
import {IUseInput} from "../../hooks/use-input.hook";

export interface INumberInputProps {
    hook: IUseInput<string>
}

const NumberInput: React.FC<INumberInputProps> = (props) => {
    return (
        <InputWithMask
            value={props.hook.value}
            onChange={(e) => props.hook.setValue(e.target.value)}
            placeholder={'number'}
            mask={'99-99-99'}
            maskChar={'_'}
        />
    );
};

export default NumberInput;