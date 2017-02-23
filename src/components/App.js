import React from 'react';
import Navigation from './Navigation';
import { Grid, Row, Col } from 'react-bootstrap';

const App = (props) => {
  return (
    <div>
      <Navigation/>
      <Grid>
        <Row>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
            {props.children}
          </Col>
        </Row>
      </Grid>

    </div>

  )
}

export default App;
