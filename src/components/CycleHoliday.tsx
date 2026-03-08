import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎆" | "🍀" | "🦃" | "💝";

const holidayTransitionsAlpha: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🍀",
    "🍀": "🦃",
    "🦃": "💝",
    "💝": "🎄",
};
const holidayTransitionsChrono: Record<Holiday, Holiday> = {
    "🎆": "💝", //new years
    "💝": "🍀", //valentines
    "🍀": "🦃", //st pattys
    "🦃": "🎄", //thanksgiving
    "🎄": "🎆", //christmas
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    return (
        <div>
            Holiday: {holiday}
            <Button
                onClick={() => {
                    const newHoliday = holidayTransitionsAlpha[holiday];
                    setHoliday(newHoliday);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    const newHoliday = holidayTransitionsChrono[holiday];
                    setHoliday(newHoliday);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
