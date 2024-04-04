import React from "react";
import SkillImg from "./SkillImage";
import "./Skill.css";
import { Fade } from "react-reveal";
import { Card, Row, Col } from 'react-bootstrap';
import { style } from "glamor";
import html from "../../assests/logo/html.png"
import bootstrap from "../../assests/logo/bootstrap.png"
import js from "../../assests/logo/js.png"
import mysql from "../../assests/logo/mysql.png"
import css from "../../assests/logo/css.png"
import react from "../../assests/logo/react.png"

function Skill(props) {

    const theme = props.theme;

    const imageList = [
        {
            url: html,
            name: 'HTML'
        },
        {
            url: css,
            name: 'css'
        },
        {
            url: bootstrap,
            name: 'Bootstrap'
        },
        {
            url: js,
            name: 'JavaScript'
        },
        {
            url: mysql,
            name: 'MySQL'
        },
        {
            url: react,
            name: 'React.js'
        },
        {
            url: 'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png',
            name: 'Flutter'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dart-logo-icon.svg/2048px-Dart-logo-icon.svg.png',
            name: 'Dart'
        },

    ];

    const styles = style({
        margin: "10px",
        color: theme.text,
        backgroundColor: theme.projectCard,
        cursor: "pointer",
        borderRadius: "5px",
        height: "100%",
        transition: "all 0.2s ease-in-out",
        boxShadow: `0px 0px 1px ${theme.text}`,
        ":hover": {

            boxShadow: `0 2px 10px ${theme.text}`,
        },
    });
    let time = 2000;
    return (
        <div className="skill container " style={{ paddingTop: '110px' }} id="skill"  >
            <div className="basic-education">
                <Fade left duration={2000} distance="40px">
                    <div className="heading-div">
                        <div className="heading-img-div">
                            <SkillImg theme={theme} />
                        </div>
                        <div className="heading-text-div">
                            <h1 className="heading-text" style={{ color: theme.text }}>
                                Skill
                            </h1>
                            <h3 className="heading-sub-text" style={{ color: theme.text }}>
                                Technical Skills
                            </h3>
                        </div>
                    </div>
                </Fade>

                <Row className="justify-content-center">
                    {imageList.map((image, index) => (
                        <Col key={index} md={3} sm={5} xs={6} style={{ marginBottom: "10px" }}>
                            <Fade right duration={time} distance="40px">
                                <Card {...styles}>
                                    <Card.Body className="card-text">
                                        <Card.Img src={image.url} 
                                            style={{ maxWidth: "250px", maxHeight: "250px", width: "100%", height: "100%" }} 
                                            className="custom-image"
                                        />
                                        <div className="d-flex justify-content-center mt-1">{image.name}</div>

                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    ))}
                </Row>

                {/* <Row>
                    {imageList.map((image, index) => (
                        <Col key={index} md={3} sm={5} xs={10} style={{ marginBottom: "20px" }}>
                            <Fade right duration={time} distance="40px">
                                <Card {...styles}>
                                    <Card.Body className="text-center card-text">
                                        <Card.Title>{image.name}</Card.Title>
                                        <Card.Img src={image.url} 
                                            style={{ maxWidth: "250px", maxHeight: "250px", width: "100%", height: "100%" }} 
                                            className="custom-image"
                                        />
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </Col>
                    ))}
                </Row> */}
            </div>
        </div >
    );
}

export default Skill;
