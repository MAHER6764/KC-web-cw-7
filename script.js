
function BMI(weight, height) {
    let result = weight / (height * height);    
    return result;
}

console.log(BMI(70, 1.8));

    function Status(BodyMass) {
    if (BodyMass < 18.5) {
        return "لديك نقص في الوزن";
    } else if (BodyMass >= 18.5 && BodyMass <= 25) {
        return "وزنك صحي";
    } else {
        return "لديك زياده في الوزن";
    }
}

function calculate() {
    let weight = document.getElementById("weight").Value;
    
    let height = document.getElementById("height").Value;
    
    let bmi_value = BMI(weight, height);
    
    let desc = Status(bmi_value);    
    let box = document.getElementById(result);

    box.innerText= bmi_value + " == " + desc;
}
