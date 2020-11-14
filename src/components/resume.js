import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import my_photo from '../image/cvcv.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={my_photo}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Majed BANNOURI</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Creative, collaborative and courageous developer with an experience in web based technologies and UX design. Looking for the next
              challenge to improve customer experience and deepen engagement.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>9034 Medjez Elbab, Béja, Tunisie </p>
            <h5>Phone</h5>
            <p>+(216) 52 105 127</p>
            <h5>Email</h5>
            <p>Majed.bannouri12@gmail.com</p>
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={"Present"}
              schoolName="Higher Institute Of Multimedia Arts Of Manouba"
              schoolDescription="Software Engineering"
               />

               <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="Faculty Of Economic Sciences and Managment Of Nabeul"
                 schoolDescription="Licence IT Applied To Managment"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"Jul "+ 2019}
              endYear={"Aug " +2019}
              jobName="Frontend Developer"
              jobDescription="Developing a frontend of an E-learning platform"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="End Of Study Internship"
                jobDescription="Developin a mobile application for a transport company to control offenders"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />
                       <Skills
                      skill="MongoDB"
                      progress={40}
                      />
                       <Skills
                      skill="Android"
                      progress={50}
                      />
                       <Skills
                      skill="Java"
                      progress={60}
                      />
                       <Skills
                      skill="Microservices"
                      progress={10}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
