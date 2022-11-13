
 const button = document.querySelector('#button')
 button.addEventListener('click',function(){
    const heightInput = document.querySelector('#height-input').value
    const weightInput = document.querySelector('#weight-input').value
    //如果输入的是空值则需要弹窗提醒
    if (heightInput === '' || weightInput === '') {
        alert('Please put your value in');
        return;
    }
    console.log('height', heightInput);
    console.log('weight', weightInput);

    const heightValue = +heightInput
    const weightValue = +weightInput

    // const BMI = weightValue / (heightValue * heightValue)
    const BMI = weightValue/heightValue/heightValue
    const BMIString = BMI.toFixed(2)
    
    const BMIString1 = +BMIString
    console.log('BMIString1',typeof(BMIString1));
    console.log(`Your BMI is ${BMIString}`);

    //可以对结果进行判断，太轻太重或者刚好？

    
    if (BMIString1 < 18){
        print = 'Underweight: BMI is below the 5th percentile age, gender, and height.'
    } else if (BMIString1 < 24) {
        print = 'Healthy weight: BMI is equal to or greater than the 5th percentile and less than the 85th percentile for age, gender, and height.'
    } else if (BMIString1 < 34) {
        print = 'Overweight: BMI is at or above the 85th percentile but less than the 95th percentile for age, gender, and height.'
    } else {
        print = 'Obese: BMI is at or above the 95th percentile for age, gender, and height.'
    }  
    
    console.log(`${print}`);
    const caution = document.querySelector('#caution');
    const resultNode = document.querySelector('#yourResult');

    resultNode.innerHTML = `Your BMI is ${BMIString}`;
    caution.innerHTML = `${print}`;
 })

 