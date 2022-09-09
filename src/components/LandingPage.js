import React, { useState } from "react";
import '../css/custom.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const fontSizeCommon = {
    fontSize: "20px",
    color: "#6D0FB6",
  };
  const commonColor = {
    color: "#6D0FB6",
    border: "1px solid #6D0FB6",
  };
  const persons = [
    {
      nikname: "Rob",
      mobile_number: "1234567891",
    },
    {
      nikname: "John",
      mobile_number: "1987654321",
    },
    {
      nikname: "Ganesh",
      mobile_number: "8074725033",
    },
    {
      nikname: "Warnar",
      mobile_number: "8294023287",
    },
    {
      nikname: "Dhoni",
      mobile_number: "9912634288",
    },
  ];

  const [inputmobile, setInputMobile] = useState('');
  const [inputotp, setInputOtp] = useState('');
  const [nameis, setNameIs] = useState('');
  const [mobileis, setMobileIs] = useState('');
  const [otpis, setOtpIs] = useState('');
  const [otpsent, setOtpSent] = useState(false);

  localStorage.clear();

  const getMeIn = (e) => {
    e.preventDefault();
    if(inputmobile === '' || inputmobile === null || inputmobile.length < 10)
    {
        alert('Invalid Mobile Number');
    }
    else
    {

        const newOtp = Math.floor(100000 + Math.random() * 999999);
        setOtpIs(newOtp);

        const personIs = persons.find((b) => {
            return b.mobile_number === inputmobile;
        })

        if(personIs === '' || personIs === undefined || personIs === null)
        {
            setNameIs(inputmobile);
            setMobileIs(inputmobile);
            setOtpSent(true);
        }
        else
        {
            setNameIs(personIs.nikname);
            setMobileIs(personIs.mobile_number);
            setOtpSent(true);
        }
    }
  };

  const validateGetMeIn = (e) => {
    e.preventDefault();

    if(parseInt(inputotp) === otpis)
    {
        console.log('Valid OTP');
        localStorage.setItem('nameis',nameis);
        localStorage.setItem('mobileis',mobileis);
        localStorage.setItem('isLoggedIn','yes');
        navigate('/dashboard');
    }
    else
    {
        console.log('Invalid OTP');
        alert('Invalid OTP');
        navigate('/');
    }
  }

  return (
    <>
      <div className="p-4 container-fluid">
        <div
          className="p-3 d-flex align-items-center border border-white rounded shadow p-2 pageStylesHere"
        >
          <div className="container">
            <div className="row p-2 my-auto">
              <div className="col-lg-2 col-md-2 my-auto"></div>
              <div className="col-lg-4 col-md-4 my-auto">
                <h2 className="mb-3">Welcome To AGR V2</h2>
                <p style={fontSizeCommon}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p style={fontSizeCommon}>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 my-auto">
                {
                    otpsent ?
                    <>
                        <input
                            type="text"
                            className="form-control mb-2"
                            style={commonColor}
                            id="mobileNumber"
                            defaultValue={inputmobile}
                            placeholder="Enter Mobile Number"
                        />
                        <input
                            type="number"
                            className="form-control"
                            style={commonColor}
                            id="otpinput"
                            onChange={(e) => setInputOtp(e.target.value)}
                            placeholder="Enter OTP"
                        />
                        {
                            otpsent ? 
                            <>
                            OTP sent success, Your OTP is : {otpis}
                            </>
                            :
                            <>
                            </>
                        }
                        <div className="mt-2 text-right">
                        <button
                            onClick={validateGetMeIn}
                            className="btn btn-sm"
                            style={commonColor}
                        >
                            Validate, Get Me In
                        </button>
                        </div>
                    </>
                    :
                    <>
                        <input
                            type="text"
                            className="form-control"
                            style={commonColor}
                            id="mobileNumber"
                            onChange={(e) => setInputMobile(e.target.value)}
                            placeholder="Enter Mobile Number"
                        />
                        <div className="mt-2 text-right">
                        <button
                            onClick={getMeIn}
                            className="btn btn-sm"
                            style={commonColor}
                        >
                            Get Me In
                        </button>
                        </div>
                    </>
                }
              </div>
              <div className="col-lg-2 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
