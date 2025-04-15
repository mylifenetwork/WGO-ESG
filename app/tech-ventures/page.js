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
    'entry.272234028': '',
    'entry.353530242': '',
    'entry.1891090765': '',
    'entry.1408648040': '',
    'entry.1426208417': '',
    'entry.1784453667': '',
    'entry.1694484754': '',
    'entry.856495849': '',
    'entry.1096684556': '',
    'entry.1383365476': '',
    'entry.1350208563': '',
  })

  const options = [
    { label: "WGO's Social Media (e.g., Facebook, LinkedIn, Instagram)", value: 'entry.1128947227' },
    { label: 'Online Advertisements (e.g., banners, pop-ups)', value: 'entry.1128947227' },
    { label: 'Street Displays (e.g., digital billboards, posters)', value: 'entry.1128947227' },
    { label: 'Sharing from friends or colleagues', value: 'entry.1128947227' },
    { label: 'News or media coverage', value: 'entry.1128947227' },
    { label: 'Email newsletter', value: 'entry.1128947227' },
    { label: 'Others', value: 'other' },
  ];

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
      <div style={{display: 'flex', flexDirection:'row'}}>
        <img src='assets/images/techventures/10.png' style={{width: '40vw'}}/>
        <div className="contact-two__form-box" style={{width: '60vw', backgroundColor: 'white'}}>
          <form
            className="contact-form-validated contact-two__form"
            // action="https://docs.google.com/forms/d/e/1FAIpQLSdKWygX3RC-P_zrdp5j6r5KE9oSC0cDNfZJWK4Kn5Qo9zaOFg/formResponse"
            noValidate="novalidate"
          >
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-two__input-box">
                  <input
                    type="text"
                    name="entry.272234028"
                    placeholder="First Name *"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-two__input-box">
                  <input
                    type="text"
                    name="entry.272234028"
                    placeholder="Last Name *"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-xl-12 col-lg-12">
                <div className="contact-two__input-box">
                  <input
                    type="text"
                    name="entry.272234028"
                    placeholder="Email *"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </EnvensLayouts>
  );
};
export default page;
