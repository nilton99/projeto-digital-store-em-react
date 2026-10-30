import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
} from "@mui/material";

type FilterOption = {
    text: string;
    value: string;
};

type FilterGroupProps = {
    title: string;
    inputType: "checkbox" | "radio";
    options: FilterOption[];
    selectedValues: string[];
    onChange: (value: string) => void;
};

export function FilterGroup({
    title,
    inputType,
    options,
    selectedValues,
    onChange,
}: FilterGroupProps) {
    return (
        <FormControl component="fieldset" sx={{ display: "block", mb: 3 }}>
            <FormLabel
                component="legend"
                sx={{ color: "#474747", fontWeight: 700, mb: 1 }}
            >
                {title}
            </FormLabel>
            <FormGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        control={
                            inputType === "checkbox" ? (
                                <Checkbox
                                    checked={selectedValues.includes(option.value)}
                                    onChange={() => onChange(option.value)}
                                />
                            ) : (
                                <Radio
                                    checked={selectedValues.includes(option.value)}
                                    onChange={() => onChange(option.value)}
                                />
                            )
                        }
                        label={option.text}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
}
