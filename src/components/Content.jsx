import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <Grid fluid className="main-content">
                <Row className="show-grid">
                    <Col className="content" xs={12} md={9} lg={9}>
                        <Row className="slider">
                            <Image src="assets/slider/resize_icon.png" className="slider-resize_icon" responsive />
                            <div className="slider-arrow-left">
                                <i className="slider-arrow-left-arr"></i>
                            </div>
                            <div className="slider-arrow-right">
                                <i className="slider-arrow-right-arr"></i>
                            </div>
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
                    <Col className="sidebar" xsHidden smHidden md={3} lg={3}>
                        <Row className="project-details">
                            <Col className="project-details-content">
                                <Row className="project-details-name">
                                    project details
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        10/22/2013
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        skokov responsive wordpress theme
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        website design
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        ie 8, ie 9, ie 10, firefox, safari, opera, chrome
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        wordpress 3.5, wordpress 3.6
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        responsive
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        logotype
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        unique icons
                                    </Col>
                                </Row>
                                <Row className="project-details-menu">
                                    <Col className="project-details-pic-col">
                                        <Image src="assets/arrow.png" className="project-details-pic" responsive />
                                    </Col>
                                    <Col className="project-details-description">
                                        live preview
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="popular-posts">
                            <Col className="popular-posts-main">
                                <Row className="popular-posts-name">
                                    popular posts
                                </Row>
                                <Row className="popular-posts-item">
                                    <Col className="popular-posts-image" xs={4} md={4} lg={4}>
                                        <Image src="assets/popular_posts/pp1.png" className="popular-posts-png" responsive />
                                    </Col>
                                    <Col className="popular-posts-info" xs={8} md={8} lg={8}>
                                        <Row className="popular-posts-text">
                                            15 fresh examples of clean and minimal web designs
                                        </Row>
                                        <Row className="popular-posts-date">
                                            Oct, 09, 2013 &#10084; 21
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="popular-posts-item">
                                    <Col className="popular-posts-image" xs={4} md={4} lg={4}>
                                        <Image src="assets/popular_posts/pp2.png" className="popular-posts-png" responsive />
                                    </Col>
                                    <Col className="popular-posts-info" xs={8} md={8} lg={8}>
                                        <Row className="popular-posts-text">
                                            inspiring examples of color in web design
                                        </Row>
                                        <Row className="popular-posts-date">
                                            Oct, 10, 2013 &#10084; 19
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="popular-posts-item">
                                    <Col className="popular-posts-image" xs={4} md={4} lg={4}>
                                        <Image src="assets/popular_posts/pp3.png" className="popular-posts-png" responsive />
                                    </Col>
                                    <Col className="popular-posts-info" xs={8} md={8} lg={8}>
                                        <Row className="popular-posts-text">
                                            17 inspiring examples of parallax scrolling sites
                                        </Row>
                                        <Row className="popular-posts-date">
                                            Oct, 12, 2013 &#10084; 15
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="popular-posts-item">
                                    <Col className="popular-posts-image" xs={4} md={4} lg={4}>
                                        <Image src="assets/popular_posts/pp4.png" className="popular-posts-png" responsive />
                                    </Col>
                                    <Col className="popular-posts-info" xs={8} md={8} lg={8}>
                                        <Row className="popular-posts-text">
                                            15 websites with beautiful typography
                                        </Row>
                                        <Row className="popular-posts-date">
                                            Oct, 03, 2013 &#10084; 13
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="popular-posts-item">
                                    <Col className="popular-posts-image" xs={4} md={4} lg={4}>
                                        <Image src="assets/popular_posts/pp5.png" className="popular-posts-png" responsive />
                                    </Col>
                                    <Col className="popular-posts-info" xs={8} md={8} lg={8}>
                                        <Row className="popular-posts-text">
                                            20 resources for beginner designers & developers
                                        </Row>
                                        <Row className="popular-posts-date">
                                            Oct, 10, 2013 &#10084; 7
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="tags">
                            <Col className="tags-col">
                                <Row className="tags-name">
                                    tags
                                </Row>
                                <Row className="tags-content">
                                    <div className="tags-content-item">
                                        web design
                                    </div>
                                    <div className="tags-content-item">
                                        html5
                                    </div>
                                    <div className="tags-content-item">
                                        inspiration
                                    </div>
                                    <div className="tags-content-item">
                                        photo
                                    </div>
                                    <div className="tags-content-item">
                                        css
                                    </div>
                                    <div className="tags-content-item">
                                        illustration
                                    </div>
                                    <div className="tags-content-item">
                                        design
                                    </div>
                                    <div className="tags-content-item">
                                        wordpress
                                    </div>
                                    <div className="tags-content-item">
                                        business
                                    </div>
                                    <div className="tags-content-item">
                                        theme
                                    </div>
                                    <div className="tags-content-item">
                                        joomla
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Content;