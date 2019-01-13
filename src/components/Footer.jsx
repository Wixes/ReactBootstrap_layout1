import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Grid fluid className="footer-grid">
                <Col className="footer">
                    <Row className="footer-main">
                        <Col className="footer-about" xs={4} ms={4} md={4} lg={4}>
                            <Row className="footer-about-name">
                                About us
                            </Row>
                            <Row className="footer-about-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut 
                                laoreet dolore magna aliquam erat volutpat. Ut wisi 
                                enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </Row>
                            <Row className="footer-about-btn">
                                Learn more
                            </Row>
                            <Row className="footer-about-pics-name">
                                Photo Stream
                            </Row>
                            <Row className="footer-about-pics">
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_1.png" responsive />
                                </div>
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_2.png" responsive />
                                </div>
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_3.png" responsive />
                                </div>
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_4.png" responsive />
                                </div>
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_5.png" responsive />
                                </div>
                                <div className="footer-about-pics-item">
                                    <Image src="assets/footer/photo_stream/img_6.png" responsive />
                                </div>
                            </Row>
                        </Col>
                        <Col className="footer-tweets" xs={4} ms={4} md={4} lg={4}>
                            <Row className="footer-tweets-name">
                                Latest tweets
                            </Row>
                            <Row className="footer-tweets-items-row">
                                <Col className="footer-tweets-items">
                                    <Row className="footer-tweets-item">
                                        <Col className="footer-tweets-item-icon" xs={1} ms={1} md={1} lg={1}>
                                            <Image src="assets/footer/socials/twit_bird.png" responsive />
                                        </Col>
                                        <Col className="footer-tweets-item-desc" xs={11} ms={11} md={11} lg={11}>
                                            <Row className="footer-tweets-item-desc-name">
                                                Check Out Dtbaker's <div className="footer-tweets-item-tag">@Arduino</div> Sales Notification <div className="footer-tweets-item-tag">#System</div> http://t.co/WBFKIWHJ 
                                            </Row>
                                            <Row className="footer-tweets-item-desc-date">
                                                3 days ago
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="footer-tweets-item">
                                        <Col className="footer-tweets-item-icon" xs={1} ms={1} md={1} lg={1}>
                                            <Image src="assets/footer/socials/twit_bird.png" responsive />
                                        </Col>
                                        <Col className="footer-tweets-item-desc" xs={11} ms={11} md={11} lg={11}>
                                            <Row className="footer-tweets-item-desc-name">
                                                Community Superstar Winner - <div className="footer-tweets-item-tag">#OrganicBeeMedia</div> http://t.co/2Fs1nnMj 
                                            </Row>
                                            <Row className="footer-tweets-item-desc-date">
                                                3 days ago
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="footer-tweets-item">
                                        <Col className="footer-tweets-item-icon" xs={1} ms={1} md={1} lg={1}>
                                            <Image src="assets/footer/socials/twit_bird.png" responsive />
                                        </Col>
                                        <Col className="footer-tweets-item-desc" xs={11} ms={11} md={11} lg={11}>
                                            <Row className="footer-tweets-item-desc-name">
                                                Clean <div className="footer-tweets-item-tag">#WebSites</div> Designs for Your <div className="footer-tweets-item-tag">#Inspiration</div> http://t.co/SnRKu3HJ
                                            </Row>
                                            <Row className="footer-tweets-item-desc-date">
                                                5 days ago
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="footer-tweets-item">
                                        <Col className="footer-tweets-item-icon" xs={1} ms={1} md={1} lg={1}>
                                            <Image src="assets/footer/socials/twit_bird.png" responsive />
                                        </Col>
                                        <Col className="footer-tweets-item-desc" xs={11} ms={11} md={11} lg={11}>
                                            <Row className="footer-tweets-item-desc-name">
                                                Cute Online <div className="footer-tweets-item-tag">#Shops</div> http://t.co/1PoQN3bJ
                                            </Row>
                                            <Row className="footer-tweets-item-desc-date">
                                                6 days ago
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="footer-tweets-item">
                                        <Col className="footer-tweets-item-icon" xs={1} ms={1} md={1} lg={1}>
                                            <Image src="assets/footer/socials/twit_bird.png" responsive />
                                        </Col>
                                        <Col className="footer-tweets-item-desc" xs={11} ms={11} md={11} lg={11}>
                                            <Row className="footer-tweets-item-desc-name">
                                                Download 40 vector <div className="footer-tweets-item-tag">#icons</div> package for <div className="footer-tweets-item-tag">#FREE</div> http://t.co/2Fp5GLqn
                                            </Row>
                                            <Row className="footer-tweets-item-desc-date">
                                                6 days ago
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="footer-tweets-socials">
                                <div className="footer-tweets-socials-name">Social Connecting</div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/facebook.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/gplus.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/twitter.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/linkedin.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/youtube.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/bloger.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/rss.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/dribble.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/orkut.png" responsive />
                                </div>
                                <div className="footer-tweets-socials-item">
                                    <Image src="assets/footer/socials/flickr.png" responsive />
                                </div>
                            </Row>
                        </Col>
                        <Col className="footer-contacts" xs={4} ms={4} md={4} lg={4}>
                            <Row className="footer-contacts-name">
                                Contact info
                            </Row>
                            <Row className="footer-contacts-address">
                                <Col className="footer-contacts-address-icon" xs={2} ms={2} md={2} lg={2}>
                                    <Image src="assets/footer/contacts/address.png" responsive />
                                </Col>
                                <Col className="footer-contacts-address-text" xs={10} ms={10} md={10} lg={10}>
                                    Address: 12569 Saint Patrick des Pres, 85000 Paris, France
                                </Col>
                            </Row>
                            <Row className="footer-contacts-phone">
                                <Col className="footer-contacts-phone-icon" xs={2} ms={2} md={2} lg={2}>
                                    <Image src="assets/footer/contacts/phone.png" responsive />
                                </Col>
                                <Col className="footer-contacts-phone-text" xs={3} ms={3} md={3} lg={3}>
                                    Phone:
                                </Col>
                                <Col className="footer-contacts-phone-number" xs={7} ms={7} md={7} lg={7}>
                                    <Row className="footer-contacts-phone-number">
                                        +38 045 845-45-78 <br/> +38 045 845-45-78
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="footer-contacts-mail">
                                <Col className="footer-contacts-mail-icon" xs={2} ms={2} md={2} lg={2}>
                                    <Image src="assets/footer/contacts/email.png" responsive />
                                </Col>
                                <Col className="footer-contacts-mail-text" xs={10} ms={10} md={10} lg={10}>
                                    E-mail: <div className="footer-contacts-mail-text-tag">freeforwebdesign@gmail.com</div>
                                </Col>
                            </Row>
                            <Row className="footer-contacts-form">
                                <Col className="footer-contacts-form-col">
                                    <Row className="footer-contacts-form-name">
                                        Follow Us
                                    </Row>
                                    <Row className="footer-contacts-form-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Row>
                                    <Row className="footer-contacts-form-input">
                                    <form className="footer-contacts-form-full">
                                        <input type="text" id="mail" name="mail" />
                                    </form>
                                        <Image src="assets/footer/contacts/mail_follow.png" className="footer-contacts-form-img" responsive />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="footer-copyright">
                        <Col className="footer-copyright-text" xs={6} ms={6} md={6} lg={6}>
                            Copyright 2013 - FreeForWebDesign.com - All Rights Reserved
                        </Col>
                        <Col className="footer-copyright-nav" xs={6} ms={6} md={6} lg={6}>
                            <div className="footer-copyright-nav-item">
                                home    
                            </div>
                            <div className="footer-copyright-nav-item">
                                portfolio
                            </div>
                            <div className="footer-copyright-nav-item">
                                blog
                            </div>
                            <div className="footer-copyright-nav-item">
                                about us
                            </div>
                            <div className="footer-copyright-nav-item">
                                contact
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

export default Footer;