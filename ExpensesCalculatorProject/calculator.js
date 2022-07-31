function add(){
    var addNum1 = document.getElementById("addNum1").value;
    var addNum2 = document.getElementById("addNum2").value;  
    var result = parseInt(addNum1) + parseInt(addNum2);
    document.getElementById("addresult").innerHTML = result;

};

function sub(){
    var subNum1 = document.getElementById("subNum1").value;
    var subNum2 = document.getElementById("subNum2").value;  
    var result = parseInt(subNum1) - parseInt(subNum2);
    document.getElementById("subresult").innerHTML = result;
};

function mul(){
    var mulNum1 = document.getElementById("mulNum1").value;
    var mulNum2 = document.getElementById("mulNum2").value;
    var result = parseInt(mulNum1) * parseInt(mulNum2);
    document.getElementById("mulresult").innerHTML = result;
};

function div()
{
    var divNum1 = document.getElementById("divNum1").value;
    var divNum2 = document.getElementById("divNum2").value;   
    var result = parseInt(divNum1) / parseInt(divNum2);
    if((parseInt(divNum1) % parseInt(divNum2) ) == 0){
        document.getElementById("divresult").innerHTML = result;
    }
    else{
        document.getElementById("divresult").innerHTML = result.toFixed(3);
    }
};

