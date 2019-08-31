
/*
   __          ___   ___  __    ___  __  __    
   \ \  /\  /\/ __\ /___\/ /   /___\/__\/ _\   
    \ \/ /_/ / /   //  // /   //  // \//\ \    
 /\_/ / __  / /___/ \_// /___/ \_// _  \_\ \   
 \___/\/ /_/\____/\___/\____/\___/\/ \_/\__/   


GitHub: https://github.com/Josewowgame2888
Twitter: https://twitter.com/Josewowgame
*/


const ConsoleColors = {};
ConsoleColors.ESCAPE        = "\u001b";
ConsoleColors.BLACK         = ConsoleColors.ESCAPE + "[30m";
ConsoleColors.DARK_BLUE     = ConsoleColors.ESCAPE + "[34m";
ConsoleColors.DARK_GREEN    = ConsoleColors.ESCAPE + "[32m";
ConsoleColors.DARK_AQUA     = ConsoleColors.ESCAPE + "[36m";
ConsoleColors.DARK_RED      = ConsoleColors.ESCAPE + "[31m";
ConsoleColors.DARK_PURPLE   = ConsoleColors.ESCAPE + "[35m";
ConsoleColors.GOLD          = ConsoleColors.ESCAPE + "[33m";
ConsoleColors.GRAY          = ConsoleColors.ESCAPE + "[37m";
ConsoleColors.DARK_GRAY     = ConsoleColors.ESCAPE + "[30;1m";
ConsoleColors.BLUE          = ConsoleColors.ESCAPE + "[34;1m";
ConsoleColors.GREEN         = ConsoleColors.ESCAPE + "[32;1m";
ConsoleColors.AQUA          = ConsoleColors.ESCAPE + "[36;1m";
ConsoleColors.RED           = ConsoleColors.ESCAPE + "[31;1m";
ConsoleColors.LIGHT_PURPLE  = ConsoleColors.ESCAPE + "[35;1m";
ConsoleColors.YELLOW        = ConsoleColors.ESCAPE + "[33;1m";
ConsoleColors.WHITE         = ConsoleColors.ESCAPE + "[37;1m";
ConsoleColors.OBFUSCATED    = ConsoleColors.ESCAPE + "[47m";
ConsoleColors.BOLD          = ConsoleColors.ESCAPE + "[1m";
ConsoleColors.UNDERLINE     = ConsoleColors.ESCAPE + "[4m";
ConsoleColors.ITALIC        = ConsoleColors.ESCAPE + "[3m";
ConsoleColors.RESET         = ConsoleColors.ESCAPE + "[0m";

module.exports = ConsoleColors;
