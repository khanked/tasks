import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
        </div>
    );
}

export default App;
