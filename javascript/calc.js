function inputNumber(num){
    document.querySelector("#calc").value += num;
  }
  
function Clear(){
    var calcAreaText = document.querySelector("#calc").value;
    var afterDeleteText = calcAreaText.slice(0, -1);
    document.querySelector("#calc").value = afterDeleteText;
  }
  
  //文字更新
function update(updatenum){
    document.querySelector( "#calc" ).value = updatenum;
  }
  
  //変換
  function operatorConversion(calcAreaText){
    var multipliedConv = calcAreaText.replaceAll( "×" , "*" );
    var dividedConv = multipliedConv.replaceAll( "÷" , "/" );
    return dividedConv;
  }
  
  // 演算
  function calcFunction(calcAreaTextConv){
    const answer = new Function("return " + calcAreaTextConv);
    return answer;
  }
  
  // 「=」時
  function calc(){
    var calcAreaText = document.querySelector( "#calc" ).value;
    var calcAreaTextConv = operatorConversion(calcAreaText);
    var values1 = /[+\-\×\÷]/g;
    var branch = calcAreaText.search(values1);
    if(branch!=-1){
      try {
        const answer = calcFunction(calcAreaTextConv);
        update(answer());
      } catch(_error) {
        update(_error);
      }
    } else {
      document.querySelector( "#calc" ).value = 0;
    }
  }
  
  // 「%」時
  function percentage(){
    var calcAreaText = document.querySelector( "#calc" ).value;
    var values2 = /[+\-\×\÷]/g;
    var branch = calcAreaText.search(values2);
    if(branch!=-1){
      var operatorSearch = calcAreaText.match(values2);
      var operatorLastArray = operatorSearch.length - 1;
      var operatorLastindex = calcAreaText.lastIndexOf(operatorSearch[operatorLastArray])+1;
      var calcText1 = calcAreaText.slice(0, operatorLastindex) + "(";
      var calcText2 = calcAreaText.slice(operatorLastindex)+"÷100)";
      var calcAreaText = calcText1+calcText2;
      var calcAreaTextConv = operatorConversion(calcAreaText);
      try {
        const percentageAnswer = calcFunction(calcAreaTextConv);
        update(percentageAnswer());
      } catch(_error) {
        update(_error);
      }
    } else{
      document.querySelector("#calc").value = 0;
    }
  }