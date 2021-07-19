let clearbutton = document.getElementById("ColorCodeCheck")
ColorCodeCheck.onclick = function () {
    let val = document.getElementById("value").value
    // TODO: アルファチャンネル付きのカラーコード対応もする？
    // TODO: 背景色は変えられるようにした方が良い
    let regex = new RegExp("#[a-fA-f0-9]{6}", "g")
    let result = val.match(regex)
    
    // 配列の中身を全て大文字にする
    result=result.map(function(value,index,array){
        return value.toUpperCase()
    })

    // 重複している要素を削除
    result = new Set(result)

    // この辺で関数を分ける
    let resulttext = ""
    if (result) {
        result.forEach(element => {
            resulttext += element + "<span style = \"color:" + element + ";\">■</span><br>"
        });
    }
    text = document.getElementById("result")
    text.innerHTML = resulttext

}