import React from 'react';
import {Container,Row} from 'react-bootstrap'

function Project () {
    return (
        <Container className='project-section'>
            <Container>
                <h1 className='p-heading'>
                    My Projects 
                </h1>
                <Row style = {{justifyContent: 'center', paddingBottom: '10px'}}></Row>
            </Container>
        </Container>
    );
}


export default  Project;