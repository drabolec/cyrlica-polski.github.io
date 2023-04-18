const message = document.getElementById('message');
const pole = document.getElementById('transkrypcja');
var polski = "";
var y = "";
function trans(){
    var text = message.value;
    text = text.toLowerCase();
    for(x in text){
        if (text[x] == "а"){
            y = "a";
        }
        else if (text[x] == "б"){
            y = "b";    
        }
        else if (text[x] == "в"){
            y = "w";
        }
        else if (text[x] == "г"){
            y = "g";
        }
        else if (text[x] == "д"){
            y = "d";
        }
        else if (text[x] == "е"){
            y = "je";
        }
        else if (text[x] == "ё"){
            y = "jo";
        }
        else if (text[x] == "ж"){
            y = "ż";
        }
        else if (text[x] == "з"){
            y = "z";
        }
        else if (text[x] == "и"){
            y = "i";
        }
        else if (text[x] == "й"){
            y = "j";
        }
        else if (text[x] == "к"){
            y = "k";
        }
        else if (text[x] == "л"){
            y = "l";
        }
        else if (text[x] == "м"){
            y = "m";
        }
        else if (text[x] == "н"){
            y = "n";
        }
        else if (text[x] == "о"){
            y ="o";
        }
        else if (text[x] == "п"){
            y = "p";
        }
        else if (text[x] == "р"){
            y = "r";
        }
        else if (text[x] == "с"){
            y = "s";
        }
        else if (text[x] == "т"){
            y = "t";
        }       
        else if (text[x] == "у"){
            y = "u";
        }
        else if (text[x] == "ф"){
            y = "f";
        }
        else if (text[x] == "х"){
            y = "h";
        }
        else if (text[x] == "ц"){
            y = "c";
        }
        else if (text[x] == "ч"){
            y = "cz";
        }
        else if (text[x] == "ш"){
            y = "sz";
        }
        else if (text[x] == "ы"){
            y = "y";
        }
        else if (text[x] == "щ"){
            y = "szcz";
        }
        else if (text[x] == "ъ"){
            y = "[";
        }
        else if (text[x] == "ь"){
            y = "'";
        }
        else if (text[x] == "э"){
            y = "e";
        }
        else if (text[x] == "ю"){
            y = "ju";
        }
        else if (text[x] == "я"){
            y = "ja";
        }
        else if (text[x] == " "){
            y = " ";
        }
        else if (text[x] == "."){
            y = ".";
        }
    polski = polski + y;
    }
    transkrypcja.textContent = polski;
    polski = "";
}
