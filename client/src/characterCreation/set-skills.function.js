import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import './character-creation.css';

const _ = require('lodash');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    height: '100%',
    width: '100%',
  },
  skillGrid: {
    height: '15vh',
  },
  skillCard: {
    margin: 'auto',
    width: '50%',
  }
}));

function skillSelected(skills, skill) {
  return _.indexOf(skills, skill) > -1;
}

export default function Skills(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    acrobatics: skillSelected(props.currSkills, 'acrobatics'),
    animalHandling: skillSelected(props.currSkills, 'animalHandling'),
    arcana: skillSelected(props.currSkills, 'arcana'),
    athletics: skillSelected(props.currSkills, 'athletics'),
    deception: skillSelected(props.currSkills, 'deception'),
    history: skillSelected(props.currSkills, 'history'),
    insight: skillSelected(props.currSkills, 'insight'),
    intimidation: skillSelected(props.currSkills, 'intimidation'),
    investigation: skillSelected(props.currSkills, 'investigation'),
    medicine: skillSelected(props.currSkills, 'medicine'),
    nature: skillSelected(props.currSkills, 'nature'),
    perception: skillSelected(props.currSkills, 'perception'),
    performance: skillSelected(props.currSkills, 'performance'),
    persuation: skillSelected(props.currSkills, 'persuation'),
    religion: skillSelected(props.currSkills, 'religion'),
    slightOfHand: skillSelected(props.currSkills, 'slightOfHand'),
    stealth: skillSelected(props.currSkills, 'stealth'),
    survival: skillSelected(props.currSkills, 'survival'),
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    props.onChange(event.target.name, event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <Grid container spacing={3}>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.acrobatics}
                      onChange={handleChange}
                      name="acrobatics"
                      color="primary"
                    />
                  }
                  label="Acrobatics"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.animalHandling}
                      onChange={handleChange}
                      name="animalHandling"
                      color="primary"
                    />
                  }
                  label="Animal Handling"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.arcana}
                      onChange={handleChange}
                      name="arcana"
                      color="primary"
                    />
                  }
                  label="Arcana"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.athletics}
                      onChange={handleChange}
                      name="athletics"
                      color="primary"
                    />
                  }
                  label="Athletics"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.deception}
                      onChange={handleChange}
                      name="deception"
                      color="primary"
                    />
                  }
                  label="Deception"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.history}
                      onChange={handleChange}
                      name="history"
                      color="primary"
                    />
                  }
                  label="History"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.insight}
                      onChange={handleChange}
                      name="insight"
                      color="primary"
                    />
                  }
                  label="Insight"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.intimidation}
                      onChange={handleChange}
                      name="intimidation"
                      color="primary"
                    />
                  }
                  label="Intimidation"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.investigation}
                      onChange={handleChange}
                      name="investigation"
                      color="primary"
                    />
                  }
                  label="Investigation"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.medicine}
                      onChange={handleChange}
                      name="medicine"
                      color="primary"
                    />
                  }
                  label="Medicine"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.nature}
                      onChange={handleChange}
                      name="nature"
                      color="primary"
                    />
                  }
                  label="Nature"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.perception}
                      onChange={handleChange}
                      name="perception"
                      color="primary"
                    />
                  }
                  label="Perception"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.performance}
                      onChange={handleChange}
                      name="performance"
                      color="primary"
                    />
                  }
                  label="Performance"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.persuation}
                      onChange={handleChange}
                      name="persuation"
                      color="primary"
                    />
                  }
                  label="Persuation"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.religion}
                      onChange={handleChange}
                      name="religion"
                      color="primary"
                    />
                  }
                  label="Religion"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.slightOfHand}
                      onChange={handleChange}
                      name="slightOfHand"
                      color="primary"
                    />
                  }
                  label="Slight of Hand"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.stealth}
                      onChange={handleChange}
                      name="stealth"
                      color="primary"
                    />
                  }
                  label="Stealth"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid className={classes.skillGrid} item xs={4}>
            <Card className={classes.skillCard} variant="outlined">
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.survival}
                      onChange={handleChange}
                      name="survival"
                      color="primary"
                    />
                  }
                  label="Survival"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );

  // return (
  //   <FormGroup row>
  //     <FormGroup>
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.acrobatics}
  //             onChange={handleChange}
  //             name="acrobatics"
  //             color="primary"
  //           />
  //         }
  //         label="Acrobatics"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.animalHandling}
  //             onChange={handleChange}
  //             name="animalHandling"
  //             color="primary"
  //           />
  //         }
  //         label="Animal Handling"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.arcana}
  //             onChange={handleChange}
  //             name="arcana"
  //             color="primary"
  //           />
  //         }
  //         label="Arcana"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.athletics}
  //             onChange={handleChange}
  //             name="athletics"
  //             color="primary"
  //           />
  //         }
  //         label="Athletics"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.deception}
  //             onChange={handleChange}
  //             name="deception"
  //             color="primary"
  //           />
  //         }
  //         label="Deception"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.history}
  //             onChange={handleChange}
  //             name="history"
  //             color="primary"
  //           />
  //         }
  //         label="History"
  //       />
  //     </FormGroup>
  //     <FormGroup>
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.insight}
  //             onChange={handleChange}
  //             name="insight"
  //             color="primary"
  //           />
  //         }
  //         label="Insight"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.intimidation}
  //             onChange={handleChange}
  //             name="intimidation"
  //             color="primary"
  //           />
  //         }
  //         label="Intimidation"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.investigation}
  //             onChange={handleChange}
  //             name="investigation"
  //             color="primary"
  //           />
  //         }
  //         label="Investigation"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.medicine}
  //             onChange={handleChange}
  //             name="medicine"
  //             color="primary"
  //           />
  //         }
  //         label="Medicine"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.nature}
  //             onChange={handleChange}
  //             name="nature"
  //             color="primary"
  //           />
  //         }
  //         label="Nature"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.perception}
  //             onChange={handleChange}
  //             name="perception"
  //             color="primary"
  //           />
  //         }
  //         label="Perception"
  //       />
  //     </FormGroup>
  //     <FormGroup>
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.performance}
  //             onChange={handleChange}
  //             name="performance"
  //             color="primary"
  //           />
  //         }
  //         label="Performance"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.persuation}
  //             onChange={handleChange}
  //             name="persuation"
  //             color="primary"
  //           />
  //         }
  //         label="Persuation"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.religion}
  //             onChange={handleChange}
  //             name="religion"
  //             color="primary"
  //           />
  //         }
  //         label="Religion"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.slightOfHand}
  //             onChange={handleChange}
  //             name="slightOfHand"
  //             color="primary"
  //           />
  //         }
  //         label="Slight of Hand"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.stealth}
  //             onChange={handleChange}
  //             name="stealth"
  //             color="primary"
  //           />
  //         }
  //         label="Stealth"
  //       />
  //       <FormControlLabel
  //         control={
  //           <Checkbox
  //             checked={state.survival}
  //             onChange={handleChange}
  //             name="survival"
  //             color="primary"
  //           />
  //         }
  //         label="Survival"
  //       />
  //     </FormGroup>
  //   </FormGroup>
  // );
}
