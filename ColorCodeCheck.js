let clearbutton = document.getElementById("ColorCodeCheck")
clearbutton.onclick = function () {
    let val = document.getElementById("value").value
    let result=ColorCodeCheck(val)
    let resulttext = ""
    if (result) {
        result.forEach(element => {
            resulttext += element + "<span style = \"color:" + element + ";\">■</span><br>"
        });
    }
    text = document.getElementById("result")
    text.innerHTML = resulttext
}

function ColorCodeCheck(text){
    // TODO: アルファチャンネル付きのカラーコード対応もする？
    let regex = new RegExp("#[a-fA-f0-9]{6}", "g")
    let result = text.match(regex)
    
    // 配列の中身を全て大文字にする
    result = result.map(function(value,index,array){
        return value.toUpperCase()
    })

    // 重複している要素を削除
    result = new Set(result)
    return result
}
// todo: 背景色は変えられるようにした方が良い