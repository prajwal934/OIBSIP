
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp)

    const tempSelect = document.getElementById('temp_diff');
    const valueTemp  = temp_diff.options[tempSelect.selectedIndex].value;
    // console.log(valueTemp);

    const celToFah = (celsius) =>{
        let fahrenheit = Math.round((celsius * 9/5) + 32);
        return fahrenheit; 
    }

    const fehToCel = (fehr) => {
        let celsius = Math.round((fehr-32) * 5/9 );
        return celsius; 
    }

    let result;
    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°F`;
    }
    else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°C`;
    }
}