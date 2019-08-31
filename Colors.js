const ConsoleColor = require('./ConsoleColors');
const Colors = {};

Colors.ESCAPE        = "\u00A7";
Colors.BLACK         = Colors.ESCAPE + "0";
Colors.DARK_BLUE     = Colors.ESCAPE + "1";
Colors.DARK_GREEN    = Colors.ESCAPE + "2";
Colors.DARK_AQUA     = Colors.ESCAPE + "3";
Colors.DARK_RED      = Colors.ESCAPE + "4";
Colors.DARK_PURPLE   = Colors.ESCAPE + "5";
Colors.GOLD          = Colors.ESCAPE + "6";
Colors.GRAY          = Colors.ESCAPE + "7";
Colors.DARK_GRAY     = Colors.ESCAPE + "8";
Colors.BLUE          = Colors.ESCAPE + "9";
Colors.GREEN         = Colors.ESCAPE + "a";
Colors.AQUA          = Colors.ESCAPE + "b";
Colors.RED           = Colors.ESCAPE + "c";
Colors.LIGHT_PURPLE  = Colors.ESCAPE + "d";
Colors.YELLOW        = Colors.ESCAPE + "e";
Colors.WHITE         = Colors.ESCAPE + "f";
Colors.OBFUSCATED    = Colors.ESCAPE + "k";
Colors.BOLD          = Colors.ESCAPE + "l";
Colors.UNDERLINE     = Colors.ESCAPE + "n";
Colors.ITALIC        = Colors.ESCAPE + "o";
Colors.RESET         = Colors.ESCAPE + "r";

Colors.tokenize = function(str){
    return str.split(new RegExp("(" + Colors.ESCAPE + "[0123456789abcdefklmnor])")).filter(v => v !== "");
};

Colors.clean = function(str, removeFormat = true){
    if(removeFormat){
        return str.replace(new RegExp(Colors.ESCAPE + "[0123456789abcdefklmnor]", "g"), "").replace(/\x1b[\\(\\][[0-9;\\[\\(]+[Bm]/g, "").replace(new RegExp(Colors.ESCAPE, "g"), "");
    }
  return str.replace(/\x1b[\\(\\][[0-9;\\[\\(]+[Bm]/g, "").replace(/\x1b/g, "");
}

Colors.toTerminal = function(str){ 
    str = Colors.tokenize(str);
    str.forEach((v, k) => {
        switch(v){
            case Colors.BLACK:
                str[k] = ConsoleColor.BLACK;
                break;
            case Colors.DARK_BLUE:
                str[k] = ConsoleColor.DARK_BLUE;
                break;
            case Colors.DARK_GREEN:
                str[k] = ConsoleColor.DARK_GREEN;
                break;
            case Colors.DARK_AQUA:
                str[k] = ConsoleColor.DARK_AQUA;
                break;
            case Colors.DARK_RED:
                str[k] = ConsoleColor.DARK_RED;
                break;
            case Colors.DARK_PURPLE:
                str[k] = ConsoleColor.DARK_PURPLE;
                break;
            case Colors.GOLD:
                str[k] = ConsoleColor.GOLD;
                break;
            case Colors.GRAY:
                str[k] = ConsoleColor.GRAY;
                break;
            case Colors.DARK_GRAY:
                str[k] = ConsoleColor.DARK_GRAY;
                break;
            case Colors.BLUE:
                str[k] = ConsoleColor.BLUE;
                break;
            case Colors.GREEN:
                str[k] = ConsoleColor.GREEN;
                break;
            case Colors.AQUA:
                str[k] = ConsoleColor.AQUA;
                break;
            case Colors.RED:
                str[k] = ConsoleColor.RED;
                break;
            case Colors.LIGHT_PURPLE:
                str[k] = ConsoleColor.LIGHT_PURPLE;
                break;
            case Colors.YELLOW:
                str[k] = ConsoleColor.YELLOW;
                break;
            case Colors.WHITE:
                str[k] = ConsoleColor.WHITE;
                break;
            case Colors.BOLD:
                str[k] = ConsoleColor.BOLD;
                break;
            case Colors.OBFUSCATED:
                str[k] = ConsoleColor.OBFUSCATED;
                break;
            case Colors.ITALIC:
                str[k] = ConsoleColor.ITALIC;
                break;
            case Colors.UNDERLINE:
                str[k] = ConsoleColor.UNDERLINE;
                break;
            case Colors.RESET:
                str[k] = ConsoleColor.RESET;
                break;
        }
    });
    return str.join("");
};
module.exports = Colors;