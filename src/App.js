import React, { Component } from 'react';
import { Button , ButtonToolbar, Grid, Row, Col, Clearfix, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'aaaa',
            
        };
    }

    getValidationState() {
        const length = this.state.value.length;

        // Check string is only number
        var reg = /^\d+$/;
        if (reg.test(this.state.value)) {

            if (length < 10) {
                return 'warning';
            } else {
                return'success';
            }
        } else {
            return 'error';
        }

        

        
        
    }

    handleChange(e) {

        this.setState({ value: e.target.value });
    }

    render() {
        const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ButtonToolbar>
            
                    <Button>Default</Button>

                    <Button bsStyle="primary">Primary</Button>

                    <Button bsStyle="success">Success</Button>
            
                    <Button bsStyle="info">Info</Button>
            
                    <Button bsStyle="warning">Warning</Button>
            
                    <Button bsStyle="danger">Danger</Button>

                    <Button bsStyle="link">Link</Button>

                </ButtonToolbar>



                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                        <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={12} md={12}>
                            <form>
                                <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                                    <ControlLabel>Working example with validation</ControlLabel>
                                    <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={(e)=>this.handleChange(e)}/>
                                    <FormControl.Feedback />
                                    <HelpBlock>Phone number must long than 9 number and only accept number.</HelpBlock>
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Grid>

               

                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
                        <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
                    </Row>
                </Grid>
            </div>
        );
    }


}

export default App;
