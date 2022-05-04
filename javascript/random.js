//入力するもの
    var input_name = [
      ];

    //リスト入力
    function input_list(){
      while(true){
      var input_names = prompt("入力をしてください。0を入力で終了します。")
      if(input_names == 0){
        break
      }
      input_name.push(input_names)
    }
  }
      // ボタンを押した際の動作
      $('#startButton').on('click', function() {
        var random = Math.floor( Math.random() * input_name.length );
        var result =  input_name[random];
        $('#result').html(result);
      });