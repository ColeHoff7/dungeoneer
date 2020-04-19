import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default class ChooseSkills extends Component {

  render() {
    return (
      <div>
        <SkillCheckboxes />
      </div>
    );
    // return (
    //   <div className='chooseSkills'>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="acrobatics"
    //             value="acrobatics"
    //             />
    //     <label className="form-check-label">Acrobatics</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="animalHandling"
    //             value="animalHandling"
    //             />
    //     <label className="form-check-label">Animal Handling</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="arcana"
    //             value="arcana"
    //             />
    //     <label className="form-check-label">Arcana</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="athletics"
    //             value="athletics"
    //             />
    //     <label className="form-check-label">Athletics</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="deception"
    //             value="deception"
    //             />
    //     <label className="form-check-label">Deception</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="history"
    //             value="history"
    //             />
    //     <label className="form-check-label">History</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="insight"
    //             value="insight"
    //             />
    //     <label className="form-check-label">Insight</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="intimidation"
    //             value="intimidation"
    //             />
    //     <label className="form-check-label">Intimidation</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="investigation"
    //             value="investigation"
    //             />
    //     <label className="form-check-label">Investigation</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="medicine"
    //             value="medicine"
    //             />
    //     <label className="form-check-label">Medicine</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="nature"
    //             value="nature"
    //             />
    //     <label className="form-check-label">Nature</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="perception"
    //             value="perception"
    //             />
    //     <label className="form-check-label">Perception</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="performance"
    //             value="performance"
    //             />
    //     <label className="form-check-label">Performance</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="persuation"
    //             value="persuation"
    //             />
    //     <label className="form-check-label">Persuation</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="religion"
    //             value="religion"
    //             />
    //     <label className="form-check-label">Religion</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="sleightOfHand"
    //             value="sleightOfHand"
    //             />
    //     <label className="form-check-label">Sleight of Hand</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="stealth"
    //             value="stealth"
    //             />
    //     <label className="form-check-label">Stealth</label><br/>
    //     <input  className="form-check-input"
    //             type="checkbox"
    //             id="survival"
    //             value="survival"
    //             />
    //     <label className="form-check-label">Survival</label><br/>
    //   </div>
    // );
  }

}

function SkillCheckboxes() {
  const [state, setState] = React.useState({
    checkedAcrobatics: false,
    checkedAnimalHandling: false,
    checkedArcana: false,
    checkedAthletics: false,
    checkedDeception: false,
    checkedHistory: false,
    checkedInsight: false,
    checkedIntimidation: false,
    checkedInvestigation: false,
    checkedMedicine: false,
    checkedNature: false,
    checkedPerception: false,
    checkedPerformance: false,
    checkedPersuation: false,
    checkedReligion: false,
    checkedSlightOfHand: false,
    checkedStealth: false,
    checkedSurvival: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAcrobatics}
              onChange={handleChange}
              name="checkedAcrobatics"
              color="primary"
            />
          }
          label="Acrobatics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAnimalHandling}
              onChange={handleChange}
              name="checkedAnimalHandling"
              color="primary"
            />
          }
          label="Animal Handling"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedArcana}
              onChange={handleChange}
              name="checkedArcana"
              color="primary"
            />
          }
          label="Arcana"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedAthletics}
              onChange={handleChange}
              name="checkedAthletics"
              color="primary"
            />
          }
          label="Athletics"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedDeception}
              onChange={handleChange}
              name="checkedDeception"
              color="primary"
            />
          }
          label="Deception"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedHistory}
              onChange={handleChange}
              name="checkedHistory"
              color="primary"
            />
          }
          label="History"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedInsight}
              onChange={handleChange}
              name="checkedInsight"
              color="primary"
            />
          }
          label="Insight"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedIntimidation}
              onChange={handleChange}
              name="checkedIntimidation"
              color="primary"
            />
          }
          label="Intimidation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedInvestigation}
              onChange={handleChange}
              name="checkedInvestigation"
              color="primary"
            />
          }
          label="Investigation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedMedicine}
              onChange={handleChange}
              name="checkedMedicine"
              color="primary"
            />
          }
          label="Medicine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedNature}
              onChange={handleChange}
              name="checkedNature"
              color="primary"
            />
          }
          label="Nature"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPerception}
              onChange={handleChange}
              name="checkedPerception"
              color="primary"
            />
          }
          label="Perception"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPerformance}
              onChange={handleChange}
              name="checkedPerformance"
              color="primary"
            />
          }
          label="Performance"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedPersuation}
              onChange={handleChange}
              name="checkedPersuation"
              color="primary"
            />
          }
          label="Persuation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedReligion}
              onChange={handleChange}
              name="checkedReligion"
              color="primary"
            />
          }
          label="Religion"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedSlightOfHand}
              onChange={handleChange}
              name="checkedSlightOfHand"
              color="primary"
            />
          }
          label="Slight of Hand"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedStealth}
              onChange={handleChange}
              name="checkedStealth"
              color="primary"
            />
          }
          label="Stealth"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedSurvival}
              onChange={handleChange}
              name="checkedSurvival"
              color="primary"
            />
          }
          label="Survival"
        />
      </FormGroup>
    </FormGroup>
  );
}
