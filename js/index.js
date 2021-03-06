
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
        $('.result-text').text(values);
    }
}

// Handling Operator Clicks
$('.operator').on('click',function () {
    switch($(this).attr('name')){
        case 'C':
            setHistory("");
            setResult("");
            break;
        case 'CE':
            var result=getResult();
            setResult(result.substr(0,result.length-1));
            break;
        default:
            var history=getHistory();
            var result=getResult();
            var char=$(this).attr('name');
            if(result!=""){
                history+=result;
                if(char=="="){
                    result=eval(history);
                    setResult(result);
                    setHistory("");
                }
                else{
                    history+=char;
                    setHistory(history);        
                    setResult("");
                }
            }else{
                if(history!=""){
                    history=history.substr(0,history.length-1)+char;
                    setHistory(history);        
                    setResult("");
                }else if(char=="-"){
                    setResult("-");
                }
            }
    }
});

// Handling Number Clicks
$('.number').on('click',function () {
    var result = getResult();
    if(result!=NaN){
        if(!($(this).attr('name')=='.' && result.includes('.'))){
            result+=$(this).attr('name');
            setResult(result);
        }
    }
});

// Handling Dark Mode
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    $('body').toggleClass("dark");
    $('.footer').toggleClass("dark");
    $('.calculator-body').toggleClass("dark");
    $('.calculator-body').toggleClass("darkShadow");
    $('.screen-area').toggleClass("darkScreenShadow");
    $('.button').toggleClass("dark");
    $('.button').toggleClass("darkShadow");
    $('.text').toggleClass("dark-text");
});
