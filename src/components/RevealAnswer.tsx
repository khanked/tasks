import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setRevealed(!revealed);
                }}
            >
                {revealed ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {revealed && <div>Answer: 42</div>}
        </div>
    );
}
