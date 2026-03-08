import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setInProgress(true);
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={inProgress || attemptsLeft <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            Attempts Left: {attemptsLeft}
        </div>
    );
}
