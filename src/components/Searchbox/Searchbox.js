import "typeface-roboto";
import React from 'react';
// Component for the radio buttons section
const RadioButtons = () => {
  return (
    <div style={sectionStyle}>
      <label style={labelStyle}>
        I'm looking for:
      </label>
      <div style={selectStyle}>
        <input type="radio" name="gender" value="bride" id="bride" style={radioStyle}/>
        <label style={brideStyle}>Bride</label>
      </div>
      <div style={selectStyle}>
        <input type="radio" name="gender" value="groom" id="groom" style={radioStyle}/>
        <label style={groomStyle}>Groom</label>
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
      <div style={ageStyle}>
        <input type="number" placeholder="18" style={ageContainer} />
        <span style= {ageTo}>To</span>
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
    <div style={languageStyle}>
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
  marginTop: '30px',
  boxShadow: '0px 3px 1px rgba(0, 0, 0, 0.06)',
  border: '0px solid #ccc',
  borderRadius: '3px',
  textAlign: 'center',
  display: 'inline-block',
  padding: '0 20px 0 20px',
};

const sectionStyle = {
  display: 'inline-block',
  alignItems: 'left',
  marginBottom: '20px',
  marginTop: '40px',
  textAlign: 'left',
  padding: '0 60px 0 0px',
};

const languageStyle = {
  display: 'inline-block',
  alignItems: 'left',
  marginBottom: '20px',
  marginTop: '40px',
  textAlign: 'left',
  padding: '0 30px 0 0px',
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
  textAlign: 'center',
  borderRadius: '4px',
};

const ageStyle = {
  display: 'inline-block',
  alignItems: 'center',
  fontSize: '14px',
};

const ageTo = {
  display: 'inline-block',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: '300',
  padding: '0 20px 0 20px',
  color: '#23273A',
};

const religionDropdown = {
  fontFamily: 'Roboto, sans-serif',
  width: '200px',
  height: '40px',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  border: '1px solid #EDEDED',
  borderRadius: '4px',
  background: 'transparent',
};

const languageDropdown = {
  fontFamily: 'Roboto, sans-serif',
  width: '230px',
  height: '40px',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  border: '1px solid #EDEDED',
  borderRadius: '4px',
  background: 'none',
  padding: '0 0px 0 0',
};

const selectStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  display: 'inline',
  alignContent: 'center',
};

const brideStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  display: 'inline',
  padding: '0 10px 0 10px'
};

const groomStyle = {
  fontFamily: 'Roboto, sans-serif',
  color: '#23273A',
  fontWeight: '300',
  fontSize: '14px',
  display: 'inline',
};

const radioStyle = {
  display: 'inline-block',
  border: '10px solid #FFFFFF',
  borderColor: 'blue',
  accentColor: '#EB5757',
  color: 'blue',
  alignContent: 'center',
  marginTop: '10px',
  marginRight: '10px',
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
