//var
var kai = [
  "今",
  "前",
  "前々",
];
var getkai= [

];
const calcs = [

];
var ak = 1;
var total = 0;
var max = 0;
var min = 0;
//点数を入力するリスト
//「一番下の行」に入力すると今回の点数として表示します

//最高点
var high_score = [
//一番下の行に入力してください。末尾に「,」を入力してください。
  600,
  700,
  600,
  700,
  600,
  700,
  600,
  500,
  400,
  200,
  100,
  700,

];

//最低点
var low_score = [
//一番下の行に入力してください。末尾に「,」を入力してください。
  900,
  300,
  600,
  600,　
  600,
  600,  
  600,　
  600,  
  600,     

];
var ave_score = [
//一番下の行に入力してください。末尾に「,」を入力してください。
  800,
  600,  
  600,  
  600,  
  600,
  600,
  600,
  600,
  456,
  200,
];
//ここまで。

//そのほか
var ctx = document.getElementById("myLineChart");

//回数の取得
function get_kai(){
  for(var i = 0; i <= 6; i++){
    if(i == 3||
       i == 4||
       i == 5||
       i == 6){
        getkai.push(i+"回前の結果");
    }else
    getkai.push(kai[i]+"回の結果");
    }
}
//呼び出し
get_kai()


//計算処理(while文を使うための処理)
function calc(){
  alert("得点を入力します。")
  ivalue = parseInt(prompt("何人分の入力を行いますか?"))+1
  while(true){
    ivalue2 = parseInt(prompt(ak+"人目の入力"));
    total += ivalue2;
    calcs.push[ivalue2];
    ak++;
    //最大値取得
    if(max < ivalue2){
      max = ivalue2;
    }
    //ブレイク時
    if(ivalue == ak){
      break;
    }
  }
  //平均点の取得
  var ak2 = ak-1
  var ave = Math.floor(total/ak2);
  //結果表示
  alert("最高点："+max+"\n平均点："+ave);
  //2回目以降を行う場合のページリロード
  location.reload();
}

//リストを逆順化
var neh = high_score.reverse();
var nel = low_score.reverse();
var nea = ave_score.reverse();
//リストを先頭から6つ分を別のリストに追加
var neh2 =[];
var nel2 =[];
var nea2 =[];
function changelist(){
  for(var ni = 0; ni <= 6; ni++){
    neh2.push(neh[ni]);
    nel2.push(nel[ni]);
    nea2.push(nea[ni]);
  }
}

changelist()
//グラフのデータ取得
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: getkai,
    datasets: [
      {
        label: "最高点",
        data: neh2,
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: "最低点",
        data: nel2,
        borderColor: "rgba(0,0,255,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: "平均点",
        data: nea2,
        borderColor: "rgba(0,255,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      }
    ],
  },
  options: {
    title: {
      display: true,
      text: "最高点と最低点の比率",
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 1200,
          suggestedMin: 0,
          stepSize: 100,
          callback: function(value, index, values){
            return  value +  "点"
          }
        }
      }]
    },
  }
});