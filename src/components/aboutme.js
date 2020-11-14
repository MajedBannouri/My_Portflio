import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
    <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Creative, collaborative and courageous developer with an experience in web based technologies and UX design. Looking for the next
                challenge to improve customer experience and deepen engagement.
            </p>

          </Cell>
        </Grid>
     
    </div>
    )
  }
}

export default About;
