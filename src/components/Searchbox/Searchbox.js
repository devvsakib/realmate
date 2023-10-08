import "typeface-roboto";
import React from 'react';
import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
// Component for the radio buttons section
const RadioButtons = () => {
  return (
    <div style={sectionStyle}>
      <label style={labelStyle}>
        I'm looking for:
      </label>
      <div style={selectStyle}>
        <input type="radio" name="gender" value="bride" id="bride" style={radioStyle}/>
        <label style={selectStyle}>Bride</label>
      </div>
      <div style={selectStyle}>
        <input type="radio" name="gender" value="groom" id="groom" style={radioStyle}/>
        <label style={selectStyle}>Groom</label>
      </div>
    </div>
  );
};

// Component for the age input section
const AgeInputs = () => {
  return (
    <div style={sectionStyle}>
      <label style={labelStyle}>
        Age:
      </label>
      <div style={ageTo}>
        <input type="number" placeholder="18" style={ageContainer} />
        <span style= {ageTo}>to</span>
        <input type="number" placeholder="40" style={ageContainer} />
      </div>
    </div>
  );
};

// Component for the Religion/Caste dropdown section
const ReligionDropdown = () => {
  return (
    <div style={sectionStyle}>
      <label style={labelStyle}>
        Religion/Caste:
      </label>
      <select style={religionDropdown}>
        <option value="option1">A</option>
        <option value="option2">B</option>
        <option value="option3">C</option>
      </select>
    </div>
  );
};

// Component for the Mother Tongue dropdown section
const MotherTongueDropdown = () => {
  return (
    <div style={sectionStyle}>
      <label style={labelStyle}>
        Mother Tongue:
      </label>
      <select style={languageDropdown}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

const Searchbox = () => {
  return (
    <div style={searchboxStyle}>
      <form>
        <RadioButtons />
        <AgeInputs />
        <ReligionDropdown />
        <MotherTongueDropdown />
        <button style={buttonStyle}>
          Search
        </button>
      </form>
    </div>
  );
};

// Styles
const searchboxStyle = {
  width: '1096px',
  height: '168px',
  backgroundColor: 'white',
  margin: '0 auto',
  marginTop: '30px',
  boxShadow: '0px 3px 1px rgba(0, 0, 0, 0.06)',
  border: '0px solid #ccc',
  borderRadius: '3px',
  textAlign: 'center',
  display: 'inline-block',
};

const sectionStyle = {
  display: 'inline-block',
  alignItems: 'left',
  marginBottom: '20px',
  marginTop: '40px',
  padding: '0 18px',
  textAlign: 'left',
};

const labelStyle = {
  textAlign: 'left',
  fontFamily: 'Roboto, sans-serif',
  display: 'block',
  color: '#23273A',
  opacity: '0.7',
  fontWeight: '700',
  fontSize: '14px',
  marginBottom: '10px'
};


const ageContainer = {
  display: 'inline-block',
  alignItems: 'center',
  border: '1px solid #EDEDED',
  width: '48px',
  height: '40px',
  fontSize: '14px',
  fontWeight: '300',
  margin: '0px 20px 0px 0px',
  textAlign: 'center',
  borderRadius: '4px',
};

const ageTo = {
  display: 'inline-block',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: '300',
  marginRight: '20px',
};


const religionDropdown = {
  // marginLeft: '10px',
  fontFamily: 'Roboto, sans-serif',
  width: '200px',
  height: '40px',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  border: '1px solid #EDEDED',
  borderRadius: '4px',
};

const languageDropdown = {
  // marginLeft: '10px',
  fontFamily: 'Roboto, sans-serif',
  width: '230px',
  height: '40px',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  border: '1px solid #EDEDED',
  borderRadius: '4px',
};

const selectStyle = {
  marginRight: '5px',
  marginLeft: '5px',
  fontFamily: 'Roboto, sans-serif',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  display: 'inline',
  alignContent: 'center',
};


const radioStyle = {
  marginRight: '5px',
  display: 'inline-block',
  border: '10px solid #FFFFFF',
  // background: 'transparent',
  borderColor: 'blue',
  accentColor: '#EB5757',
  color: 'blue',
  alignContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#FA4A6F',
  color: '#FFFFFF',
  borderRadius: '5px',
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',
  width: '94.03px',
  height: '40px',
  fontWeight: '200',
  fontSize: '16px',
};
export default Searchbox;
