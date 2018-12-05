import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid">
                    <Col  className="top_pic" xs={12} md={12} lg={12}>
                        <div className="top_pic-text">
                            PROJECT
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;