
 const button = document.querySelector('#button')
 button.addEventListener('click',function(){
    const heightInput = document.querySelector('#height-input').value
    const weightInput = document.querySelector('#weight-input').value
    //如果输入的是空值则需要弹窗提醒
    if (height === '' || weightInput === '') {
        alert('Please put your value in');
        return;
    }
    // console.log('height', heightInput);
    // console.log('weight', weightInput);

    const heightValue = Number.parseInt(heightInput)
    const weightValue = Number.parseInt(weightInput)

    const BMI = weightValue / (heightValue * heightValue)
    const BMIString = BMI.toFixed(2)

    console.log(`Your BMI is ${BMIString}`);

    //可以对结果进行判断，太轻太重或者刚好？

    const resultNode = document.querySelector('#result');
    resultNode.innerHTML = `Your BMI is ${BMIString}`;
 })

