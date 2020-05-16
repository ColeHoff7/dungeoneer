import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CharacterRaces from './set-character-race.function';
import CharacterClasses from './set-character-class.function';
import Skills from './set-skills.function';
import AbilityScores from './set-ability-scores.function';
import Equipment from './set-equipment.function';
import BackgroundInfo from './set-background-info.function';
import ReviewCharacter from './review-character.function';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '90vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: '100%',
    width: '15%',
  },
  tabPanel: {
    width: '85%',
    overflowY: 'scroll',
  },
}));

export default function CreationTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >

        <Tab label="Race" {...a11yProps(0)} />
        <Tab label="Class" {...a11yProps(1)} />
        <Tab label="Ability Scores" {...a11yProps(2)} />
        <Tab label="Skills" {...a11yProps(3)} />
        <Tab label="Equipment" {...a11yProps(4)} />
        <Tab label="Background" {...a11yProps(5)} />
        <Tab label="Review & Complete" {...a11yProps(6)} />

      </Tabs>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <CharacterRaces
          currRace={props.currRace}
          characterRaces={props.characterRaces}
          onChange={props.onRaceChange}
        />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <CharacterClasses
          currClass={props.currClass}
          characterClasses={props.characterClasses}
          onChange={props.onClassChange}
        />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <AbilityScores
          currAbilityScores={props.currAbilityScores}
          onAbilityScoresChange={props.onAbilityScoresChange} />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        <Skills
          currSkills={props.currSkills}
          onChange={props.onSkillsChange}
        />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        <Equipment />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        <BackgroundInfo />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={6}>
        <ReviewCharacter
          currClass={props.currClass}
          currRace={props.currRace}
          currAbilityScores={props.currAbilityScores}
          currSkills={props.currSkills}
        />
      </TabPanel>
    </div>
  );
}
