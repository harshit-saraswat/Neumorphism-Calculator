// $('.button').on('click', function () {
//     console.log($(this).attr('name'));
// });

function getHistory(){
    return $('.history-text').text();
}

function setHistory(values){
    $('.history-text').text(values);
}

function getResult(){
    return $('.result-text').text();
}

function setResult(values){
    if(values==""){
        $('.result-text').text(values);    
    }else{
        $('.result-text').text(getFormattedNumber(values));
    }
}

function getFormattedNumber(numString){
    var num=Number(numString);
    var value=num.toLocaleString("en");
    return value;
}

function getReverseFormattedNumber(numString){
    return Number(numString.replace(/,/g,''));
}

// Handling Operator Clicks
$('.operator').on('click',function () {
    console.log($(this).attr('name'));    
});

// Handling Number Clicks
$('.number').on('click',function () {
    
    var result = getReverseFormattedNumber(getResult());
    if(result!=NaN){
        result+=$(this).attr('name');
        setResult(result);
    }
});