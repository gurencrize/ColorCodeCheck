let clearbutton = document.getElementById("ColorCodeCheck")
ColorCodeCheck.onclick = function () {
    let val = document.getElementById("value").value
    let regex = new RegExp("#[a-fA-f0-9]{6}", "g")
    let result = val.match(regex)

    // FIXME 現状大文字小文字を区別して重複の判定をしているけど、
    // 重複の判定で大文字小文字は判定しなくていいかな…
    // いっそのことアルファベットはすべて大文字にしても良いぐらい
    result = new Set(result)
    let resulttext = ""
    if (result) {
        result.forEach(element => {
            resulttext += element + "<span style = \"color:" + element + ";\">■</span><br>"
        });
    }
    text = document.getElementById("result")
    text.innerHTML = resulttext

}