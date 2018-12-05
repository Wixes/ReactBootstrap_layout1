import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './TopBanner.css';

class TopBanner extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid main_banner">
                    <Col  className="top_banner" xs={12} md={12} lg={12}>
                        <div className="top_banner-text">
                            PROJECT
                        </div>
                        
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TopBanner;