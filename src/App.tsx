import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">meo</header>
            <div>
                <h1>Khang&apos;s CISC275 Website</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="red-bg"
                            style={{ backgroundColor: "red" }}
                        >
                            <ul>
                                <li>mrowwww</li>
                                <li>miaooo</li>
                                <li>meow :3</li>
                            </ul>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="red-bg"
                            style={{ backgroundColor: "red" }}
                        >
                            <img
                                src="https://i.pinimg.com/1200x/09/66/f1/0966f1119f893870833e80f57452fc4d.jpg"
                                alt="Toro Inuoe"
                                style={{ width: "100%", height: "30%" }}
                            ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hi it is Khang.
            </p>
            <hr />
            <DoubleHalf></DoubleHalf>
            <hr />
            <ChooseTeam></ChooseTeam>
            <hr />
            <ColoredBox></ColoredBox>
            <hr />
            <ShoveBox></ShoveBox>
            <hr />
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
