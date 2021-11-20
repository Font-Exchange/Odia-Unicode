//Font Exchange javascript code
//function string, input string
function check_input() {
    if (document.getElementById('uInput').value == "") {
        return false;
    }
}
function gist_to_unicode() {
    //var conversion_array = new Array(
  var conversion_array = new Array(
  
   "1" , "୧" , // Numeric 1
    "2" , "୨" , // Numeric 2
    "3" , "୩" , // Numeric 3
    "4" , "୪" , // Numeric 4
    "5" , "୫" , // Numeric 5
    "6" , "୬" , // Numeric 6
    "7" , "୭" , // Numeric 7
    "8" , "୮" , // Numeric 8
    "9" , "୯" , // Numeric 9
    "0" , "୦" , // Numeric 10
	"‡×" , "ୁ" , // Numeric 10
	"‡" , "ୁ" , // Numeric 10
	"ÒÐ" , "ୋ" , // Numeric 10
	"ç" , "୍" , // link
	"Ò" , "େ" , // link
	"Ò#×" , "ୌ" , // link
	


	

	"Ñ" , "ୀ" , // Numeric 10
	"Õ" , "ଂ" , // Numeric 10
	"Ü" , "ଁ" , // Numeric 10
	"!" , "!" , // Numeric 10
	"Ó" , "ଃ" , // Numeric 10
	"ç" , "୍‍" , // Numeric 10
	"Þ" , "ି" , // Numeric 10

    "A" , "ଆ" , // aa
    "@" , "ଅ" , // a
    "B" , "ଇ" , // i
    "C" , "ଈ" , // dirgha i
    "D" , "ଉ" , // u
    "E" , "ଊ" , // dirgha u
    "F" , "ଋ" , // R
    "F" , "ୠ" , // RR
    "H" , "ଏ" , // e
    "I" , "ଐ" , // ai
    "J" , "ଓ" , // o
    "K" , "ଔ" , // au 
    "L" , "କ" , // k
    "M" , "ଖ" , // kh
    "N" , "ଗ" , // g
    "O" , "ଘ" , // gh
    "P¼" , "ଙ" ,
    "Q" , "ଚ",  // c
    "R" , "ଛ", // ch
    "S" , "ଜ", // j
    "T" , "ଝ", // jh
    "U" , "ଞ", // Nya
    "V", "ଟ" , // T
    "W", "ଠ" , // Th
    "X", "ଡ" ,  // D
    "XÏ", "ଡ଼" ,  // D with dot
    "Y", "ଢ" , // Dh
    "YÏ", "ଢ଼" , // Dha with bindu
    "Z", "ଣ" , // N
    "[" , "ତ" , // ta
    "]" , "ଦ" , // d
    "^" , "ଧ" , // dh
    "_", "ନ" , // n
    "d" , "ଯ" , // y
    "`" , "ପ", // p
    "$¼" , "ଫ", // ph
    "a" , "ବ", // b
    "b" , "ଭ", // bh
    "c" , "ମ", // m
    "¯Æ" , "ୟ" , // y
    "eþ" , "ର" , // r
    "e" , "ର" , // r
    "m" , "ଲ" , // l
    "mþ" , "ଲ" , // l
    "h" , "ଶ" , // S (talabya sa)
    "i" , "ଷ" , // sh (murdhanya sa)
    "j" , "ସ" , // s
    "k" , "ହ" , // h
    "f" , "ଳ" , // L
    
    "l" , "କ୍ଷ" , // ksh
    "s" , "ଜ୍ଞ" , // gya
    "¡þ" , "ଦ୍ଭ" , // d-bh
    "œÆ" , "କ୍ଟ" , // kT
    "œÍÆ" , "କ୍ଟ୍ର" , // kTr
    "¦Æ" , "କ୍ତ" , // kt
    "µÆ" , "କ୍ସ" , // ks
    "’Æ" , "ଗ୍ଦ" , // gd
    "‘Æ" , "ଗ୍ଧ" , // gdh
    "*¼" , "ଙ୍କ" , 
    "<¼" , "ଙ୍ଖ" ,
    "=¼" , "ଙ୍ଗ" ,
    "+¼" , "ଙ୍ଘ" ,
    "n" , "ଚ୍ଚ" ,
    "o" , "ଚ୍ଛ" ,
    "`ç]", "ପ୍ତ",
    "cè", "ମ୍ବ",
    "À¤", "ଣ୍ଣ",
    "Zà", "ର୍ଣ",    
    "c÷" , "ମ୍ଭ" , // mbh ---------
    "¬Æ", "ଣ୍ଢ" , // Ndha
    "q" , "ଞ୍ଚ" , // ncha
    "}" , "ଞ୍ଛ" , // nchha
    "t" , "ନ୍ଦ" , // nda
    "u" , "ନ୍ଧ" , // ndha
    "¨Æ" , "ଣ୍ଡ" , // Nda
    "cè" , "ମ୍ବ" , //mba
    "c÷" , "ମ୍ଭ" , // mbha
    "v" , "ବ୍ଦ" , // bda
    "w" , "ଦ୍ଧ" , // D-bdha
    "•Æ", "ବ୍ଧ" , // B-dha
    "&¼", "ଞ୍ଜ" , // B-dha
    "%¼", "ଞ୍ଝ" , // B-dha 
    "¾¤" , "ଶ୍ଚ" , //Sha ch
    "{" , "ଶ୍ଥ" , //Sha Chha    
    "ƒÆ" , "ପ୍ତ" , // pt 
    "ƒÞÆ" , "ପ୍ତି" , // pt  
	"®¤" , "ମ୍ମ" , // pt
	"Ã¤" , "ଣ୍ଟ" , // N-ta
	"…¤" , "ଣ୍ଠ" , // N-tha
	"rþ" , "ତ୍ତ" , // ta+ta
	"‰" , "ତ୍ଥ" , // ta+tha    
    "«Æ" , "ନ୍ତ" , // N ta
    "x" , "ନ୍ଥ" , // N tha
    "ªÆ" , "ସ୍ତ" , //SA ta
    "y" , "ସ୍ଥ" , //SA tha
    "􀁸" , "ଧ୍ୟ" , // D-hya
    "Ô" , "୍ୟ" , // Y-ya
    "ê" , "୍ମ" , // M-phala
    "—" , "ତ୍ସ" , // Ta+Sa
    "z" , "ବ୍ବ" , // B+b
    "§Æ" , "ନ୍ତ୍ର" , // N-tra
    "½¤" , "ଷ୍ଟ" , // SSa+ta
    "œÆ" , "କ୍ଟ" , // K+ta 
	"~" , "ଦ୍ଦ" , // D+da        
    
    "à" , "ର୍" , // reph-------------
    "õ" , "୍ର" , //ra phala
    
	"è" , "୍ୱ" , // ba phala   
    "Ð", "ା" , // aakar
    "¼¼Ð", "।" , // Purnachheda
    "£Æ", "କ୍କ" , // ka+ka
  	"kçþZ", "ହ୍‍ଣ" , // Na phala
  	"ï", "୍ନ" , // n phala
	"í", "୍ଲ" , // la Phala
	"ý", "୍ଳ" , // Laphala
	"‡Ô", "୍ୟୁ" , // y+u
	"ó", "ୃ" , // ru phala
	"Òß", "ୈ" , // ru phala

  );

  var conversion_array_length = conversion_array.length;
  var modified_substring = document.getElementById("uInput").value;  
  var text_size = modified_substring.length;
  var processed_text = '';
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000;
  while (process_queue == 1) {
    position1 = position2;
    if (position2 < (text_size - chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0;
    }
    var modified_substring = document.getElementById("uInput").value.substring(position1, position2);
    replace_symbols();
    var processed_text = processed_text + modified_substring;
    document.getElementById("Unicode").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }
  document.getElementById("Unicode").value = processed_text;
  // select_and_copy();
  function replace_symbols() {
    if (modified_substring != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;  // index of the symbol being searched for replacement
        while (index != -1) {
          modified_substring = modified_substring.replace(conversion_array[ conversion_character_index ] , conversion_array[conversion_character_index+1])
          index = modified_substring.indexOf(conversion_array[conversion_character_index])
        } // end of while-00 loop
      } // end of for loop
      // see if the following needs to include more letters than  [କସ]
      //modified_substring = modified_substring.replace(  /([କସ])([ú])/g , "ତ୍$1");
      // following statements for adjusting postion of e, ai, o and au maatraas.
     
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  replace_symbols

} // end of convert_to_unicode function

