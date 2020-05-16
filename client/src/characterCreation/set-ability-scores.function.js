import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './character-creation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    height: '100%',
    width: '100%',
  },
  abilityCard: {
    margin: 'auto',
    textAlign: 'center',
    width: '50%',
  },
  abilityName: {

  },
  gridRoot: {
    height: '100%',
  },
  abilityScoreGrid: {
    height: '30vh',
  },
  textField: {
    margin: '10%',
  },
  paper: {
    backgroundColor: '#3442d9',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  backdrop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.common.black,
    opacity: 0.8,
    transition: theme.transitions.create('opacity'),
  },
  buttonGroup: {
    margin: 'auto',
  },
}));

export default function AbilityScores(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridRoot} container spacing={3}>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Strength</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('strength', props.currAbilityScores.strength - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.strength}
                <IconButton onClick={(e) => props.onChange('strength', props.currAbilityScores.strength + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Dexterity</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('dexterity', props.currAbilityScores.dexterity - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.dexterity}
                <IconButton onClick={(e) => props.onChange('dexterity', props.currAbilityScores.dexterity + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Constitution</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('constitution', props.currAbilityScores.constitution - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.constitution}
                <IconButton onClick={(e) => props.onChange('constitution', props.currAbilityScores.constitution + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Intelligence</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('intelligence', props.currAbilityScores.intelligence - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.intelligence}
                <IconButton onClick={(e) => props.onChange('intelligence', props.currAbilityScores.intelligence + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Wisdom</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('wisdom', props.currAbilityScores.wisdom - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.wisdom}
                <IconButton onClick={(e) => props.onChange('wisdom', props.currAbilityScores.wisdom + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid className={classes.abilityScoreGrid} item xs={6}>
          <Card className={classes.abilityCard} variant="outlined">
            <CardContent>
              <Typography className={classes.abilityName} variant="h4">Charisma</Typography>
              <br />
              <Typography variant="h4">
                <IconButton onClick={(e) => props.onChange('charisma', props.currAbilityScores.charisma - 1)}>
                  <ArrowBackIosIcon />
                </IconButton>
                {props.currAbilityScores.charisma}
                <IconButton onClick={(e) => props.onChange('charisma', props.currAbilityScores.charisma + 1)}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
