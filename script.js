
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

       if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
        return false;
    }

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() === 18) {
 
        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return false;
        }
        if (dtCurrent.getMonth() === dtDOB.getMonth()) {
            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
            if (dtCurrent.getDate() < dtDOB.getDate()) {
                return false;
            }
        }
    }
    validate.innerHTML = "Congratulation";
    return true;
} else {
    validate.innerHTML = "Enter date in dd/mm/yyyy format ONLY."
    return false;
}
}









