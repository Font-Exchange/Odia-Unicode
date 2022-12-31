//Font Exchange javascript code
//function string, input string
function check_input() {
    if (document.getElementById('uInput').value == "") {
        return false;
    }
}
function akruti_to_unicode()
{
    check_input();

  var conversion_array = new Array(
   
	
    "ଅ" , "@" , // aa
    "ଆ" , "@û" , // a
    "ଇ" , "A" , // i
    "ଈ" , "B" , // dirgha i
    "ଉ" , "C" , // u
    "ଊ" , "D" , // dirgha u
    "ଋ" , "E" , // R
    "ଏ" , "G" , // RR
    "ଐ" , "H" , // e
    "ଓ" , "I" , // ai
    "ଔ" , "J" , // o
    "କ" , "K" , // au 
    "ଖ" , "L" , // k
    "ଗ" , "M" , // k 
    "ଘ" , "N" , // g
    "ଙ" , "O" , // gh
    "ଚ" , "P" ,
    "ଛ" , "Q",  // c
    "ଜ" , "R", // ch
    "ଝ" , "S", // j
    "ଞ" , "T", // jh
    "ଟ" , "U", // Nya
    "ଠ", "V" , // T
    "ଡ", "W" , // Th
    "ଡ଼", "Wÿ" , // D
    "ଢ", "X" , // Dh
    "ଢ଼", "Xÿ" , // N
    "ଣ" , "Y" , // t
    "ତ" , "Z" , // th
    "ଥ" , "[" , // d
 
    "ଧ", "]" , // n
    "ନ" , "^" , // y
    "ପ" , "_", // p
    "ଫ" , "`", // ph
    "ବ" , "a", // b
    "ଭ­" , "b", // bha
    "ମ" , "c", // m
    "ଯ" , "~" , // y
    "ର" , "e" , // r
    "ଳ" , "k" , // l
    "ୱ" , "Iß" , // Wa
    "ଶ" , "g" , // S (talabya sa)
    "ଷ" , "h" , // sh (murdhanya sa)
    "ସ" , "i" , // s
    "ହ" , "j" , // h 
    "କ୍ଷ" , "l" , // ksha
    "ୟ" , "d" , // ya
    "ଲ" , "f" , // La

	"୤" , "ö" , // aa kara
	"୤" , "ö" , // aa kara
    "ା" , "û" , // aa kara
    "ି" , "ò" , // i kara
    "ୀ" , "ú" , // dirgha i kara
    "ୁ" , "ê" , // u kara
    "ୁ" , "ë" , // u kara
    "ୂ" , "ì" , // dirgha i kara
    "ୂ" ,  "í" , // dirgha u kara
    "ୃ" , "é" , // ru kara
    "ୟ" , "¥ê" ,//yya phalaa + ukaar
    "ୂ୍ୟ" , "୍ୟୂ" ,//yya phalaa + uukaar
	"୍‌", "¨" , //halanta
	"୰" , "#" , // late
    "ଽ" , "$" ,
    "ଌ" , "&" , // lu 
    "ଁ", "ñ" , // chandrabindu
	"ଂ", "õ" , // anuswara
   "ଃ", "ü" , // bisarga  
   "୍ଲ", "ä" , // bisarga   

	"୧" , "1" , // Numeric 1
    "୨" , "2" , // Numeric 2
    "୩" , "3" , // Numeric 3
    "୪" , "4" , // Numeric 4
    "୫" , "5" , // Numeric 5
    "୬" , "6" , // Numeric 6
    "୭" , "7" , // Numeric 7
    "୮" , "8" , // Numeric 8
    "୯" , "9" , // Numeric 9
    "୦" , "0" , // Numeric 10  
	"‌େ​‌ା", "ùû" , //O kara
	"‌୍ବ", " " , //O kara
	"ୌ", "ùø" , //O kara
	     
  );

   var conversion_array_length = conversion_array.length;
  var input_string = document.getElementById("uInput").value;  
  //break the text to small chunks
  var text_size = input_string.length;
  var unicode_text = ''; 
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000; // this character long text will be processed in one go.
  while (process_queue == 1) {
    //to start from where left
    position1 = position2;
    //if the input character long then process the queue else set it as last queue
    if (position2 < (text_size-chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0 
    }
    var input_string = document.getElementById("uInput").value.substring(position1, position2);
    replace_symbols();
    var unicode_text = unicode_text + input_string;
    document.getElementById("Unicode").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }                                                                                                                   
  document.getElementById("Unicode").value = unicode_text;
  // select_and_copy()  
  function replace_symbols() {
    //substitute array_two elements in place of corresponding conversion_array elements
    // if string to be converted is non-blank then no need of any processing.
    if (input_string != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;
        while (index != -1)
        {
          input_string = input_string.replace(conversion_array[conversion_character_index] , conversion_array[conversion_character_index+1])
          index = input_string.indexOf(conversion_array[conversion_character_index])
        } 
      }
      
    } // end of IF  statement  meant to  suppress processing of  blank  string.

  } // end of the function  replace_symbols
} // end of convert_to_unicode function
