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
                                    <Col>
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
                            <Col xs={12} md={12} lg={12}>
                                <Row className="project-description-name">
                                    <Col xs={12} md={12} lg={12}>
                                        project description
                                    </Col>
                                </Row>
                                <Row className="project-description-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis 
                                        at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam 
                                        liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non 
                                        habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod 
                                        ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera 
                                        gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. 
                                        Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis 
                                        at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam 
                                        liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                        consequat.
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="recent-projects">
                            <Col xs={12} md={12} lg={12}>
                                <Row className="recent-projects-name">
                                    recent projects
                                </Row>
                                <Row className="recent-projects-pics">
                                    <Col className="recent-projects-col">
                                        <Image src="assets/recent_projects/rp_1.png" className="recent-projects-img" responsive />
                                    </Col>
                                    <Col className="recent-projects-col">
                                        <Image src="assets/recent_projects/rp_2.png" className="recent-projects-img" responsive />
                                    </Col>
                                    <Col className="recent-projects-col">
                                        <Image src="assets/recent_projects/rp_3.png" className="recent-projects-img" responsive />
                                    </Col>
                                </Row>
                            </Col>
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