// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./form.css";


// function Form() {
//   const [formdata, setFormdata] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//     phoneNo: "",
//     countryCode: "",
//     country: "",
//     city: "",
//     panNo: "",
//     aadharNo: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [countryCodes, setCountryCodes] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();


  
//   useEffect(() => {
//     const fetchCountryCodes = async () => {
//       try {
//         const response = await fetch("https://restcountries.com/v3.1/all");
//         const data = await response.json();
//         const countryCodes = data.map((country) => ({
//           name: country.name.common,
//           code: country.idd.root
//             ? country.idd.root +
//               (country.idd.suffixes ? country.idd.suffixes[0] : "")
//             : "",
//         }));
//         setCountryCodes(countryCodes);
//       } catch (error) {
//         console.error("Error fetching country codes:", error);
//       }
//     };

//     fetchCountryCodes();
//   }, []);
  
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const countryNames = data.map((country) => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const fetchCities = async (country) => {
//     try {
//       const response = await fetch(
//         "https://countriesnow.space/api/v0.1/countries/cities",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ country }),
//         }
//       );
//       const data = await response.json();
//       setCities(data.data);
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };



//   const validate = () => {
//     const newErrors = {};
//     if (!formdata.firstName) newErrors.firstName = "First Name is required";
//     if (!formdata.lastName) newErrors.lastName = "Last Name is required";
//     if (!formdata.username) newErrors.username = "Username is required";
//     if (!formdata.email) newErrors.email = "Email is required";
//     if (!formdata.countryCode)
//       newErrors.countryCode = "Country Code is required";
//     if (!formdata.password) newErrors.password = "Password is required";
//     if (!formdata.countryCode)
//       newErrors.countryCode = "Country Code is required";
//     if (!formdata.phoneNo) {
//       newErrors.phoneNo = "Phone No is required";
//     } else if (!/^\d{10}$/.test(formdata.phoneNo)) {
//       newErrors.phoneNo = "Phone No must be 10 digits";
//     }
//     if (!formdata.country) newErrors.country = "Country is required";
//     if (!formdata.city) newErrors.city = "City is required";
//     if (!formdata.panNo) {
//       newErrors.panNo = "PAN No is required";
//     } else if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(formdata.panNo)) {
//       newErrors.panNo =
//         "PAN No must follow the format: 5 letters, 4 numbers, 1 letter";
//     }
//     if (!formdata.aadharNo) {
//       newErrors.aadharNo = "Aadhar No is required";
//     } else if (!/^\d{12}$/.test(formdata.aadharNo)) {
//       newErrors.aadharNo = "Aadhar No must be 12 digits";
//     }
//     return newErrors;
//   };

//   useEffect(() => {
//     if (isSubmitted) {
//       const noErrors = Object.keys(errors).length === 0;
//       if (noErrors) {
//         navigate("/success", { state: formdata });
//       }
//     }
//   }, [errors, isSubmitted, formdata, navigate]);

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormdata((prevState) => ({ ...prevState, [name]: value }));
//     if (name === "country") {
//       fetchCities(value);
//       setFormdata((prevState) => ({ ...prevState, city: "" }));
//     }
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
     
//       setFormdata({
//         firstName: "",
//         lastName: "",
//         username: "",
//         email: "",
//         password: "",
//         phoneNo: "",
//         country: "",
//         city: "",
//         panNo: "",
//         aadharNo: "",
//       });
     
//       navigate("/success", { state: formdata });
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    countryCode: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryCodes = data.map((country) => ({
          name: country.name.common,
          code: country.idd.root
            ? country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : "")
            : "",
        }));
        setCountryCodes(countryCodes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const fetchCities = async (country) => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ country }),
        }
      );
      const data = await response.json();
      setCities(data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formdata.firstName) newErrors.firstName = "First Name is required";
    if (!formdata.lastName) newErrors.lastName = "Last Name is required";
    if (!formdata.username) newErrors.username = "Username is required";
    if (!formdata.email) newErrors.email = "Email is required";
    if (!formdata.password) newErrors.password = "Password is required";
    if (!formdata.countryCode)
      newErrors.countryCode = "Country Code is required";
    if (!formdata.phoneNo) {
      newErrors.phoneNo = "Phone No is required";
    } else if (!/^\d{10}$/.test(formdata.phoneNo)) {
      newErrors.phoneNo = "Phone No must be 10 digits";
    }
    if (!formdata.country) newErrors.country = "Country is required";
    if (!formdata.city) newErrors.city = "City is required";
    if (!formdata.panNo) {
      newErrors.panNo = "PAN No is required";
    } else if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(formdata.panNo)) {
      newErrors.panNo =
        "PAN No must follow the format: 5 letters, 4 numbers, 1 letter";
    }
    if (!formdata.aadharNo) {
      newErrors.aadharNo = "Aadhar No is required";
    } else if (!/^\d{12}$/.test(formdata.aadharNo)) {
      newErrors.aadharNo = "Aadhar No must be 12 digits";
    }
    return newErrors;
  };

  useEffect(() => {
    if (isSubmitted) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        navigate("/success", { state: formdata });
      }
    }
  }, [errors, isSubmitted, formdata, navigate]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({ ...prevState, [name]: value }));
    if (name === "country") {
      fetchCities(value);
      setFormdata((prevState) => ({ ...prevState, city: "" }));
    }
  };

const onSubmitHandler = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    setIsSubmitted(true); // Set isSubmitted to true when form is submitted
    navigate("/success", { state: formdata });
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isSubmitDisabled = Object.keys(errors).length > 0;
  return (
    <div className="app">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="title-div">
          <p className="title1">Welcome to Celebal's Week 1 Assignment!</p>
          <p className="title2">
            Please fill out the form below to get started. We're excited to have
            you here!
          </p>
        </div>
        <div className="wrap">
          <div className="leftside">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formdata.firstName}
              onChange={onChangeHandler}
              className="input"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formdata.lastName}
              className="input"
              onChange={onChangeHandler}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formdata.username}
              className="input"
              onChange={onChangeHandler}
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formdata.email}
              className="input"
              onChange={onChangeHandler}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formdata.password}
                onChange={onChangeHandler}
                className="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="hide-button"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="rightside">
            <div className="phone-field">
              <select
                type="text"
                placeholder="Country Code"
                name="countryCode"
                value={formdata.countryCode}
                onChange={onChangeHandler}
                className="code"
              >
                <option value="">Code</option>
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              {errors.countryCode && (
                <p className="error">{errors.countryCode}</p>
              )}
              <input
                type="text"
                placeholder="Phone No"
                name="phoneNo"
                className="input"
                value={formdata.phoneNo}
                onChange={onChangeHandler}
              />

              {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
            </div>

            <select
              name="country"
              onChange={onChangeHandler}
              className="input1"
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <p className="error">{errors.country}</p>}

            <select
              name="city"
              value={formdata.city}
              onChange={onChangeHandler}
              className="input1"
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p className="error">{errors.city}</p>}

            <input
              type="text"
              placeholder="PAN No"
              name="panNo"
              value={formdata.panNo}
              className="input"
              onChange={onChangeHandler}
            />
            {errors.panNo && <p className="error">{errors.panNo}</p>}

            <input
              type="text"
              placeholder="Aadhar No"
              name="aadharNo"
              value={formdata.aadharNo}
              className="input"
              onChange={onChangeHandler}
            />
            {errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
          </div>
        </div>

        <button className="submit" type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
