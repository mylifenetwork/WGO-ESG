"use client"
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const page = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherOption, setOtherOption] = useState('');
  const [form, setForm] = useState({
    'entry.1882068186': '',
    'entry.176518820': '',
    'entry.1168119921': '',
    'entry.775233256': '',
    'entry.1468162259': '',
    'entry.23277139': '',
    'entry.471369365': '',
    'entry.1216584176': '',
    'entry.754896926': '',
    'entry.1073186179': '',
    'entry.1484903520': '',
  })

  const handleSelectChange = (event) => {
    const value = event.target.value;

    if (value === 'other') {
      if (selectedOptions.includes(value)) {
        setSelectedOptions(prev => prev.filter(option => option !== value));
        setOtherOption(''); // Clear the other input if unchecked
      } else {
        setSelectedOptions(prev => [...prev, value]);
      }
    } else {
      setSelectedOptions((prev) => 
        prev.includes(value) 
          ? prev.filter((option) => option !== value) 
          : [...prev, value]
      );
      console.log(selectedOptions)
    }
  };

  const handleOtherChange = (event) => {
    setOtherOption(event.target.value);
  };


  useEffect(() => {
    console.log('Form data updated:', form);
    // Check if all fields are filled
    const allFieldsFilled = Object.values(form).every((value) => value.trim() !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log('Form data updated:', name, ': ', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    // You can also send the data to an API or perform other actions here
  };

/*
  const [seniority, setSeniority] = useState('');
  useEffect(() => {setSeniority(seniority)}, [seniority])
  const ChangeSen = (event) => {
    setSeniority(event.target.value);
  };

  const [country, setCountry] = useState('');
  useEffect(() => {setCountry(country)}, [country])
  const ChangeCount = (event) => {
    setCountry(event.target.value);
  };

  const [dis, setDis] = useState('');
  useEffect(() => {setDis(dis)}, [dis])
  const ChangeDis = (event) => {
    setDis(event.target.value);
  };

  const [org, setOrg] = useState('');
  useEffect(() => {setOrg(org)}, [org])
  const ChangeOrg = (event) => {
    setOrg(event.target.value);
  };
  */

  return (
    <EnvensLayouts>
      {/*Quick Contact Start
      
      <PageBanner pageName={"Registration"} />
      */}
      <img src='assets/images/techventures/1.png' style={{width: '100vw', paddingTop: '100px'}}/>
      <img src='assets/images/techventures/2.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/3.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/4.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/5.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/6.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/7.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/8.png' style={{width: '100vw'}}/>
      <img src='assets/images/techventures/9.png' style={{width: '100vw'}}/>
        <div style={{width: '100vw', backgroundColor: 'white'}}>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSfFQQsySsjK29WXzEt33jc3rAlQpU9Rusg0DsHE2UZdUSKQiA/formResponse"
            noValidate="novalidate"
          >
            <div className="row" style={{padding: '0% 20%'}}>
                <h2 className="section-title__title col-xl-12 col-lg-12" style={{padding: '5% 0%'}}>
                  <span>Apply</span> Now
                </h2>
              <div className="col-xl-6 col-lg-6">
                <div>
                  <input
                    type="text"
                    name="entry.1882068186"
                    placeholder="First Name *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.176518820"
                    placeholder="Last Name *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.1168119921"
                    placeholder="Business Email *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.775233256"
                    placeholder="Phone Number *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.1468162259"
                    placeholder="Company Name *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.23277139"
                    placeholder="Job Title *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.471369365"
                    placeholder="Year of Establishment *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.1216584176"
                    placeholder="Team/ Organisation Size *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.754896926"
                    placeholder="URL of Website *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div >
                  <input
                    type="text"
                    name="entry.1484903520"
                    placeholder="URL to Company Profile Deck (Drive/Dropbox) *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'2.5% 1.25%', padding: '2.5%'}}
                  />
                </div>
              </div>
              <div className="col-xl-12 col-lg-12">
                <div >
                  <textarea
                    rows="4"
                    name="entry.1073186179"
                    placeholder="Brief Overview of Product/Service (Max. 500 words) *"
                    onChange={handleChange}
                    required
                    style={{width: '100%', margin:'1.25% 0.625%', padding: '1.25%'}}
                  />
                </div>
              </div>
              <div className="contact-two__btn-box" style={{textAlign: 'center'}}>
                <button
                  type="submit"
                  className="thm-btn contact-two__btn"
                  disabled={isButtonDisabled}
                  style={{width: '100%', margin:'2.5% 1.25%', textAlign: 'center'}}
                >
                  Apply
                </button>
                { isButtonDisabled ? <div style={{padding: '1%'}}> (Complete all fields to apply) </div> : <p></p>}
              </div>
            </div>
          </form>
        </div>
    </EnvensLayouts>
  );
};
export default page;
