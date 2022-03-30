
function validateDob() {
   const validate = document.getElementById('validate');
//get the date from the user
   const date = document.getElementById("dob").value;
   const regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  
//Check whether valid dd/mm/yyyy
   if (regex.test(date)) {
       const parts = date.split("/");
       const dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
       const dtCurrent = new Date();
       validate.innerHTML = "Eligibility 18 years only";

//Check the age by year of the birth
       if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
    }

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() === 18) {
 
//Check the age by the month(user still could be 17 at the moment)
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return false;
        }
        if (dtCurrent.getMonth() === dtDOB.getMonth()) {
//Check the age by the day(user still could be 17 at the moment)
            if (dtCurrent.getDate() < dtDOB.getDate()) {
                return false;
            }
        }
    }
    validate.innerHTML = "Congratulation, you can apply!";
    return true;
} else {
    validate.innerHTML = "Enter date in dd/mm/yyyy format ONLY."
    return false;
}
}









