import React, { Component } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const CharacterClass = props => (
  <div>
    <Card className={styles.card}>
      <CardContent>
        <Typography className={styles.title}>
          {props.characterClass.name}
        </Typography>
      </CardContent>
    </Card>
  </div>
)

export default class ChooseClass extends Component {

  constructor(props) {
    super(props)

    this.state = { characterClasses: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/class')
      .then(response => {
        this.setState({ characterClasses: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  getClasses() {
    return this.state.characterClasses.map((currentClass, i) => {
      console.log(currentClass);
      return <CharacterClass characterClass={currentClass} key={i} />
    })
  }

  render() {
    return (
      <div className='chooseClass'>
        { this.getClasses() }
      </div>
    );
  }

}
