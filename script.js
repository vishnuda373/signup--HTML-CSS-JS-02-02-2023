// alert("Java Script is Working Buddy !");

//..................User Name Validation.................
const usernames= ["vishnu","vishnuda","vishnuda373"];

const spinner = document.getElementById("spinner");
const alert = document.getElementById("alert");

const updateUi = (value) =>{
    console.log("value",value);
    spinner.classList.remove("visible");

    const usernameExists = usernames.some((u) => u === value);

    console.log("usernames",usernames);
    console.log("usernameExists",usernameExists);
    
    if(usernameExists){
        alert.classList.add("visible");
    }
    else{
        alert.classList.remove("visible");
    }
};

const debounce = (callback, time) => {
    let interval;
    return (...args) => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        callback.apply(null, args);
      }, time);
    };
  };
  
const handleStartTyping = () =>{
    spinner.classList.add("visible");
};

const handleChange = debounce((input) =>{
    const {value} = input.target;

    updateUi(value);
},500);

//..................Password Validation.................

const bars = document.querySelector("#bars"),
  strengthDiv = document.querySelector("#strength"),
  passwordInput = document.querySelector("#password");

const strength = {
  1: "weak",
  2: "medium",
  3: "strong",
};

const getIndicator = (password, strengthValue) => {
  for (let index = 0; index < password.length; index++) {
    let char = password.charCodeAt(index);
    if (!strengthValue.upper && char >= 65 && char <= 90) {
      strengthValue.upper = true;
    } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
      strengthValue.numbers = true;
    } else if (!strengthValue.lower && char >= 97 && char <= 122) {
      strengthValue.lower = true;
    }
  }

  let strengthIndicator = 0;

  for (let metric in strengthValue) {
    if (strengthValue[metric] === true) {
      strengthIndicator++;
    }
  }

  return strength[strengthIndicator] ?? "";
};

const getStrength = (password) => {
  let strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getIndicator(password, strengthValue);
};

const handlePassChange = () => {
  let { value: password } = passwordInput;

  console.log(password);

  const strengthText = getStrength(password);

  bars.classList = "";

  if (strengthText) {
    strengthDiv.innerText = `${strengthText} Password`;
    bars.classList.add(strengthText);
  } else {
    strengthDiv.innerText = "";
  }
};

 




