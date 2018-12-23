import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Content.css';

class ContentSlider extends Component {
    render() {
        return (
            <Grid fluid className="main-content">
                <Row className="show-grid">
                    <Col className="content" xs={12} md={9} lg={9}>
                        <Row className="slider">
                        <Image src="assets/slider/slider_photo_main.png" className="center-block slider-main-img" responsive />
                            <Col>
                                <Row className="slider-line">
                                    <Col className="helpful">
                                        <Row className="slider-line-pics">
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_1.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_2.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_3.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_4.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_5.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_6.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_7.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_8.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_9.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_10.png" className="slider-line-img" responsive />
                                        </Col>
                                        <Col className="slider-line-col">
                                            <Image src="assets/slider/slider_photo_11.png" className="slider-line-img" responsive />
                                        </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="project-description">
                        
                        </Row>
                        <Row className="recent-projects">
                        
                        </Row>
                    </Col>
                    <Col className="sidebar" xsHidden md={3} lg={3}>
                        <Row className="projects-details">
                        
                        </Row>
                        <Row className="popular-posts">
                        
                        </Row>
                        <Row className="tags">
                        
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ContentSlider;