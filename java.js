// let state = ['Alabama', `Alaska`, `Arizona`, `Arkansas`, `California`, `Colorado`, `Connecticut`, `Delaware`, `Florida`, `Georgia`, `Hawaii`, `Idaho`, `Illinois`, `Indiana`, `Iowa`, `Kansas`, `Kentucky`, `Louisiana`, `Maine`, `Maryland`, `Massachusetts`, `Michigan`, `Mississippi`, `Missouri`, `Montana`, `Nebraska`, `Nevada`, `New Hampshire`, `New Jersey`, `New Mexico`, `New York`, `North Carolina`, `North Dakota`, `Ohio`, `Oklahoma`, `Oregon`, `Pennsylvania`, `Rhode Island`, `South Carolina`, `South Dakota`, `Tennessee`, `Texas`, `Utah`, `Vermont`, `Virginia`, `Washington`, `West Virginia`, `Wisconsin`, `Wyoming`]
// let stateShort = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `FL`, `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, `MD`, `MA`, `MI`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VT`, `VA`, `WA`, `WV`, `WI`, `WY`]
// let taxRate = ['0.04', `0.057`, `0.025`, `0.065`, `0.07`]


let fifty;
let thirty;
let twenty;
let tax;
let type;
let income;

function taxes() {
    let state1 = document.getElementById("tax").value;
    income = document.getElementById("monthlyIncome").value;
    if (state.indexOf(state1) !== -1) {
        stateIndex = state.indexOf(state1)
        tax = taxRate[stateIndex]
    } else if (stateShort.indexOf(state1) !== -1) {
      stateIndex = stateShort.indexOf(state1)
      tax = taxRate[stateIndex]
    } else {
        const percentToDecimal = (percentStr) => {
            return parseFloat(percentStr) / 100;  
          };
         tax = percentToDecimal(state1);
        
    }

    // console.log(tax)

    mathIt(tax);

    location.href = './StepTwo.html'
}


function mathIt(tax){
    console.log()
    taxedIncome = income - (income * tax)
    fifty = taxedIncome * 0.5;
    thirty = taxedIncome * 0.3;
    twenty = taxedIncome * 0.2;
    localStorage.setItem('fifty', fifty);
    localStorage.setItem('twenty', twenty);
    localStorage.setItem('thirty', thirty);

    console.log()

}

