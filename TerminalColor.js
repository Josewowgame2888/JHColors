
/*
   __          ___   ___  __    ___  __  __    
   \ \  /\  /\/ __\ /___\/ /   /___\/__\/ _\   
    \ \/ /_/ / /   //  // /   //  // \//\ \    
 /\_/ / __  / /___/ \_// /___/ \_// _  \_\ \   
 \___/\/ /_/\____/\___/\____/\___/\/ \_/\__/   


GitHub: https://github.com/Josewowgame2888
Twitter: https://twitter.com/Josewowgame
*/


const TerminalColor = {};
TerminalColor.ESCAPE        = "\u001b";
TerminalColor.BLACK         = TerminalColor.ESCAPE + "[30m";
TerminalColor.DARK_BLUE     = TerminalColor.ESCAPE + "[34m";
TerminalColor.DARK_GREEN    = TerminalColor.ESCAPE + "[32m";
TerminalColor.DARK_AQUA     = TerminalColor.ESCAPE + "[36m";
TerminalColor.DARK_RED      = TerminalColor.ESCAPE + "[31m";
TerminalColor.DARK_PURPLE   = TerminalColor.ESCAPE + "[35m";
TerminalColor.GOLD          = TerminalColor.ESCAPE + "[33m";
TerminalColor.GRAY          = TerminalColor.ESCAPE + "[37m";
TerminalColor.DARK_GRAY     = TerminalColor.ESCAPE + "[30;1m";
TerminalColor.BLUE          = TerminalColor.ESCAPE + "[34;1m";
TerminalColor.GREEN         = TerminalColor.ESCAPE + "[32;1m";
TerminalColor.AQUA          = TerminalColor.ESCAPE + "[36;1m";
TerminalColor.RED           = TerminalColor.ESCAPE + "[31;1m";
TerminalColor.LIGHT_PURPLE  = TerminalColor.ESCAPE + "[35;1m";
TerminalColor.YELLOW        = TerminalColor.ESCAPE + "[33;1m";
TerminalColor.WHITE         = TerminalColor.ESCAPE + "[37;1m";
TerminalColor.OBFUSCATED    = TerminalColor.ESCAPE + "[47m";
TerminalColor.BOLD          = TerminalColor.ESCAPE + "[1m";
TerminalColor.UNDERLINE     = TerminalColor.ESCAPE + "[4m";
TerminalColor.ITALIC        = TerminalColor.ESCAPE + "[3m";
TerminalColor.RESET         = TerminalColor.ESCAPE + "[0m";

module.exports = TerminalColor;
