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
  //var conversion_array = new Array(" û", " ।", "ö" , " ।" ,"÷÷÷", "","£" , "୍ମ" ,"à" , "୍ମ" , "á" , "୍ମୃ" , "ã" , "୍ର" ,"ä" , "୍ଲ" , "å" , "୍ଭ" ,"æ" , "୍ଳ" , "ç" , "୍ୱ" , "è" , "୍ସ" , "ý", "୍ୟ" , "¥", "୍ୟ" ,"ó", "ିଁ" , "Iß" , "ୱ", "Wÿ" , "ଡ଼" , "Xÿ" , "ଢ଼" , "Pÿ" , "ଚ" , "[ô" , "ଥି" ,"]ô" , "ଧି" , "Lô" , "ଖି" , "cô", "ତ୍ମ" ,"û" , "ା" , "ò" , "ି" , "ú" , "ୀ" , "ê" , "ୁ" , "ë" , "ୁ" , "ì" , "ୂ" , "í" ,  "ୂ" ,"é" , "ୃ" , "ñ", "ଁ" , "õ", "ଂ" , "ü", "ଃ" , "þ", "୍" , "¨", "୍‍" ,"1" , "୧" , "2" , "୨" , "3" , "୩" ,"4" , "୪" ,"5" , "୫" ,"6" , "୬" ,"7" , "୭" ,"8" , "୮" , "9" , "୯" , "0" , "୦" , "#" , "୰" , "$" , "ଽ" , "&" , "ଌ" , "*" , "ଞ୍ଚ" , "" ,  "ଞ୍ଚ" , "î" , "୍ରୁ" , "ï" , "୍ରୂ" , "Ð" , "କ୍ଷ୍ଣ" , "Ñ" , "୍କ" ,  "Ò" , "୍ଖ" , "Ó" , "୍ଗ" , "Ô" , "୍ଚ" , "Õ" , "୍ଜ" , "Ö" , "୍ଟ" , "×" , "୍ଠ" , "Ø" , "୍ଡ" , "Ù" , "୍ଣ" , "Ú" , "୍ଥ" , "Û" , "୍ଧ" , "Ü" , "୍ନ" , "Ý" , "୍ପ" , "Þ" , "୍ଫ" , "ß" , "୍ୱ" , "<" , "ଣ୍ଟ" , "" , "ଣ୍ଟ" , "…" , "ଟ୍ଟ" , "μ" , "ମ୍ପ" , "µ" , "ମ୍ପ" , "¶" , "ମ୍ଫ" , "‰" , "ଣ୍ଣ" , "Š" , "ଣ୍ଡ" , "Œ" , "ଣ୍ଠ" , "™" , "ତ୍ମ" , "š" , "ତ୍ପ" , "›" , "ତ୍ସ" , "œ" , "ତ୍ସ୍ନ" , "Ÿ" , "ଦ୍ଧ" , "{" , "ଜ୍ଜ" , "|" , "ଜ୍ଝ" , "}" , "କ୍ର" , "¡" , "ଦ୍ଧ" , "¢" , "ଦ୍ଘ" , "¤" , "ଧ୍ୟ" ,"¦" , "ନ୍ଦ" ,"§" , "ନ୍ଧ" ,"©" , "ତ୍ତ" , "" , "ତ୍ତ" , "ª" , "ନ୍ତ୍ର" , "«" , "ନ୍ତ" , "¬" , "ଞ୍ଜ" , "ƒ" , "ଞ୍ଝ" ,"®" , "ପ୍ପ" , "¯" , "ପ୍ତ" ,"°", "ପ୍ସ" ,"±" , "ବ୍ଦ" , "²" , "ବ୍ଧ" ,"´" , "ମ୍ବ" , "¸" , "ମ୍ଭ" , " ̧" , "ମ୍ଭ", "̧" , "ମ୍ଭ", "¹" , "ମ୍ମ" ,"º" , "ଲ୍କ" ,"»" , "ଲ୍ଗ" ,"¼" , "ଶ୍ଛ" , "½" , "ଶ୍ଚ" , "¾" , "ଷ୍ଣ" , "¿" , "ଷ୍ପ" , "À" , "ଷ୍ଫ" , "Á" , "ଷ୍ଟ" , "Ã" , "ଷ୍କ" , "Ä" , "ସ୍କ" , "Å" , "ସ୍ଖ" , "Æ" , "ସ୍ପ" , "Ç" , "ସ୍ଫ" , "È" , "ସ୍ତ୍ର" , "É" , "ସ୍ତ" ,"Ê" , "ସ୍ୱ" , "Ë" , "ଳ୍କ" , "Ì" , "ଳ୍ପ" , "Í" , "ଳ୍ଫ" , "Î" , "ତ୍ଥ" , "" , "ତ୍ଥ" , "Ï" , "ଳ୍ଳ" , "@ା" , "ଆ" ,"@" , "ଅ" , "A" , "ଇ" ,"B" , "ଈ" ,"C" , "ଉ" ,"D" , "ଊ" , "E" , "ଋ" , "F" , "ୠ" , "G" , "ଏ" , "H" , "ଐ" ,"I" , "ଓ" , "J" , "ଔ" , "K" , "କ" , "L" , "ଖ" , "M" , "ଗ" ,"N" , "ଘ" , "O" , "ଙ" ,"P" , "ଚ", "Q" , "ଛ", "R" , "ଜ", "S" , "ଝ","T" , "ଞ", "U", "ଟ" ,"V", "ଠ" , "W", "ଡ" , "X", "ଢ" ,"Y", "ଣ" ,"Z" , "ତ" , "[" , "ଥ" , "\\" , "ଦ" , "]" , "ଧ" , "^", "ନ" , "~" , "ଯ" , "_" , "ପ","`" , "ଫ", "a" , "ବ", "b" , "ଭ", "c" , "ମ","d" , "ୟ" , "e" , "ର" ,"f" , "ଲ" , "g" , "ଶ" , "h" , "ଷ" , "i" , "ସ" , "j" , "ହ" , "k" , "ଳ" ,"l" , "କ୍ଷ" , "m" , "ଜ୍ଞ" , "n" , "ଦ୍ଭ" , "o" , "କ୍ଟ" , "p" , "କ୍ଟ୍ର" , "q" , "କ୍ତ" , "s" , "ଗ୍ଦ" , "t" , "ଗ୍ଧ" , "u" , "ଙ୍କ" , "v" , "ଙ୍ଖ" ,"w" , "ଙ୍ଗ" ,"x" , "ଙ୍ଘ" ,"y" , "ଚ୍ଚ" ,"z" , "ଚ୍ଛ" ," ̄", "ପ୍ତ"," ́", "ମ୍ବ","‹", "ଣ୍ଢ" , "ଏø", " ଐ", "୍ଯ" , "୍ୟ", " ̈", "୍‍", "ଅା", "ଆ") 
  var conversion_array = new Array(
    "ûû", "।।",
    " û", "।", // purnacheda
    "ö" , "।" , // purnacheda
    "÷÷÷", "", //
    // double accented - AkrutiOriSarala
    "£" , "୍ମ" , // ma phala
    "à" , "୍ମ" , // ma phala
    "á" , "୍ମୃ" , // (halanta)m-Rû
    "â" , "୍ର" , // ra
    "ã" , "୍ର" , // reph
    "ä" , "୍ଲ" , // la phala
    "å" , "୍ଭ" , // halanta- bha
    "æ" , "୍ଳ" , // halanta-La
    "ç" , "୍ୱ" , // ba phala
    "è" , "୍ସ" , // halanta-sa
    "ý", "୍ୟ" , // ja phala
    "¥", "୍ୟ" , // ja phala
    "ó", "ିଁ" , // i kara

    "Iß" , "ୱ", //wa
    "Wÿ" , "ଡ଼" , // Da with bindu
    "Xÿ" , "ଢ଼" , // Dha with bindu
    "Pÿ" , "ଚ" , // c
    "[ô" , "ଥି" , // thi
    "]ô" , "ଧି" , // dhi
    "Lô" , "ଖି" , // khi
    "cô", "ତ୍ମ" , // tma
    "_ô" , "ତ୍ପ" , // tpa
    "}" , "ତ୍କ" , // tka
    "Kô" , "ତ୍କ" , // tka
    "^ô" , "ତ୍ନ" , // tna
    "iô" , "ତ୍ସ" , // tsa

    "û" , "ା" , // aa kara
    "ò" , "ି" , // i kara
    "ú" , "ୀ" , // dirgha i kara
    "ê" , "ୁ" , // u kara
    "ë" , "ୁ" , // u kara
    "ì" , "ୂ" , // dirgha i kara
    "í" ,  "ୂ" , // dirgha u kara
    "é" , "ୃ" , // ru kara
    "ୁ୍ୟ" , "୍ୟୁ" ,//yya phalaa + ukaar
    "ୂ୍ୟ" , "୍ୟୂ" ,//yya phalaa + uukaar
 
    "ñ", "ଁ" , // chandrabindu
    "õ", "ଂ" , // anuswara
    " ü", "ଃ" , // bisarga
    "ü", "ଃ" , // bisarga
    "þ", "୍" , //halanta
    "¨", "୍‌‌" , // halanta with zero width non joiner

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
    "#" , "୰" , // late
    "$" , "ଽ" , 
    "&" , "ଌ" , // lu
    "*" , "ଞ୍ଚ" , // nc
    "" ,  "ଞ୍ଚ" , // nc
    "î" , "୍ରୁ" , // halanta-r-u
    "ï" , "୍ରୂ" , // halanta-r-dirgha u

    "Ð" , "କ୍ଷ୍ଣ" , // khya-N
    "Ñ" , "୍କ" ,  // halanta-k
    "Ò" , "୍ଖ" , // halanta-kh
    "Ó" , "୍ଗ" , // halanta-g
    "Ô" , "୍ଚ" , // halanta-c
    "Õ" , "୍ଜ" , // halanta-j
    "Ö" , "୍ଟ" , // halanta-T
    "×" , "୍ଠ" , // halanta-Th
    "Ø" , "୍ଡ" , // halanta-D
    "Ù" , "୍ଣ" , // halanta-N
    "Ú" , "୍ଥ" , // halanta-th
    "Û" , "୍ଧ" , // halanta-dh
    "Ü" , "୍ନ" , // halanta-n
    "Ý" , "୍ପ" , // halanta-p
    "Þ" , "୍ଫ" , // halanta-ph
    "ß" , "୍ୱ" , // halanta-b

    "<" , "ଣ୍ଟ" , // NT
    "" , "ଣ୍ଟ" , // NT
    "…" , "ଟ୍ଟ" , // TT
    "μ" , "ମ୍ପ" , // mp
    "µ" , "ମ୍ପ" , // mp
    "¶" , "ମ୍ଫ" , // mph
    "‰" , "ଣ୍ଣ" , // NN
    "Š" , "ଣ୍ଡ" , // ND

    "Œ" , "ଣ୍ଠ" , // NTh
    "™" , "ତ୍ମ" , // tm
    "š" , "ତ୍ପ" , // tp
    "›" , "ତ୍ସ" , // ts
    "œ" , "ତ୍ସ୍ନ" , // t-s-n
    "Ÿ" , "ଦ୍ଦ" , // d-d
    "¡" , "ଦ୍ଧ" , // d-dh

    "{" , "ଜ୍ଜ" , // jj
    "|" , "ଜ୍ଝ" , // j-jh
    "}" , "କ୍ର" , // kr

    "¡" , "ଦ୍ଧ" , // d-dh
    "¢" , "ଦ୍ଘ" , // d-gh
    "¤" , "ଧ୍ୟ" , // dhya
    "¦" , "ନ୍ଦ" , // nd
    "§" , "ନ୍ଧ" , // ndh
    "©" , "ତ୍ତ" , // tt
    "" , "ତ୍ତ" , // tt
    "ª" , "ନ୍ତ୍ର" , // ntr (jantra)
    "«" , "ନ୍ତ" , // nt
    "¬" , "ଞ୍ଜ" , // nj
    "ƒ" , "ଞ୍ଝ" , // njh
    "®" , "ପ୍ପ" , // pp
    "¯" , "ପ୍ତ" , // pt

    "°", "ପ୍ସ" , // ps
    "±" , "ବ୍ଦ" , // bd
    "²" , "ବ୍ଧ" , // bdh
    "´" , "ମ୍ବ" , // mb
    "¸" , "ମ୍ଭ" , // mbh
    " ̧" , "ମ୍ଭ", // ***mbha
    "̧" , "ମ୍ଭ", // mbha
    "¹" , "ମ୍ମ" , // mm
    "º" , "ଲ୍କ" , // lk
    "»" , "ଲ୍ଗ" , // lg
    "¼" , "ଶ୍ଛ" , // Nch
    "½" , "ଶ୍ଚ" , // S-ch (talabya sa - ca)
    "¾" , "ଷ୍ଣ" , // sh-N (murdhanya sa - Na)
    "¿" , "ଷ୍ପ" , // sh-p (murdhanya sa - pa)

    "À" , "ଷ୍ଫ" , // sh-ph (murdhanya sa - pha)
    "Á" , "ଷ୍ଟ" , // sh-T (murdhanya sa - Ta)
    "Â" , "ଷ୍ଠ" , // sh-Th (murdhanya sa - Tha)
    "Ã" , "ଷ୍କ" , // sh-k (murdhanya sa - ka)
    "Ä" , "ସ୍କ" , // s-k
    "Å" , "ସ୍ଖ" , // sh-kh
    "Æ" , "ସ୍ପ" , // sp
    "Ç" , "ସ୍ଫ" , // sph
    "È" , "ସ୍ତ୍ର" , // str
    "É" , "ସ୍ତ" , // st
    "Ê" , "ସ୍ୱ" , // sb
    "Ë" , "ଳ୍କ" , // lk
    "Ì" , "ଳ୍ପ" , // Lp
    "Í" , "ଳ୍ଫ" , // Lph
    "Î" , "ତ୍ଥ" , // t-th
    "" , "ତ୍ଥ" , // t-th
    "Ï" , "ଳ୍ଳ" , // L-L

    "@ା" , "ଆ" , // aa
    "@" , "ଅ" , // a
    "A" , "ଇ" , // i
    "B" , "ଈ" , // dirgha i
    "C" , "ଉ" , // u
    "D" , "ଊ" , // dirgha u
    "E" , "ଋ" , // R
    "F" , "ୠ" , // RR
    "G" , "ଏ" , // e
    "H" , "ଐ" , // ai
    "I" , "ଓ" , // o
    "J" , "ଔ" , // au 

    "K" , "କ" , // k
    "L" , "ଖ" , // kh
    "M" , "ଗ" , // g
    "N" , "ଘ" , // gh
    "O" , "ଙ" ,

    "P" , "ଚ",  // c
    "Q" , "ଛ", // ch
    "R" , "ଜ", // j
    "S" , "ଝ", // jh
    "T" , "ଞ", // Nya

    "U", "ଟ" , // T
    "V", "ଠ" , // Th
    "W", "ଡ" , // D
    "X", "ଢ" , // Dh
    "Y", "ଣ" , // N
    "Z" , "ତ" , // t
    "[" , "ଥ" , // th
    "\\" , "ଦ" , // d
    "]" , "ଧ" , // dh
    "^", "ନ" , // n
    "~" , "ଯ" , // y
    "_" , "ପ", // p
    "`" , "ଫ", // ph
    "a" , "ବ", // b
    "b" , "ଭ", // bh
    "c" , "ମ", // m
    "d" , "ୟ" , // y
    "e" , "ର" , // r
    "f" , "ଲ" , // l
    "g" , "ଶ" , // S (talabya sa)
    "h" , "ଷ" , // sh (murdhanya sa)
    "i" , "ସ" , // s
    "j" , "ହ" , // h
    "k" , "ଳ" , // L
    "l" , "କ୍ଷ" , // ksh
    "m" , "ଜ୍ଞ" , // gya
    "n" , "ଦ୍ଭ" , // d-bh
    "o" , "କ୍ଟ" , // kT
    "p" , "କ୍ଟ୍ର" , // kTr
    "q" , "କ୍ତ" , // kt
    "r" , "କ୍ସ" , // ks
    "s" , "ଗ୍ଦ" , // gd
    "t" , "ଗ୍ଧ" , // gdh
    "u" , "ଙ୍କ" , 
    "v" , "ଙ୍ଖ" ,
    "w" , "ଙ୍ଗ" ,
    "x" , "ଙ୍ଘ" ,
    "y" , "ଚ୍ଚ" ,
    "z" , "ଚ୍ଛ" ,
    " ̄", "ପ୍ତ",
    " ́", "ମ୍ବ",
    "‹", "ଣ୍ଢ" , // ndha
    "\u008F" , "ତ୍ତ",
    "\u0090" , "ତ୍ତ୍ୱ",
    "ଏø", " ଐ", // ai
    "୍ଯ" , "୍ୟ", // ja phala
    " ̈", "୍‍", // halanta with ZWJ
    "‚" , "ଞ୍ଛ" ,
    "ÿ" , "଼" ,
    "ଅା", "ଆ"  // aa
    
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
      // following statements for adjusting position of e, ai, o and au maatraas.
      input_string = input_string.replace(/([ù])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯୟରଲବୱଶଷସହକ୍ଷଡ଼ଳଦ୍ଦଦ୍ଦ])/g , "$2$1");
      //ଟଠଡଡ଼ଢଢ଼ଣତଥ
      input_string = input_string.replace(/([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳଦ୍ଦଦ୍ଦ])/g , "$2$3$1");
      input_string = input_string.replace(/ùø/g  ,  "ୌ");
      input_string = input_string.replace(/ùା/g  ,  "ୋ");
      input_string = input_string.replace(/ù÷/g  ,  "ୈ");
      input_string = input_string.replace(/ù/g  ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ð/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ð/g , "ð$1$2");
      input_string = input_string.replace(/ð/g , "ର୍");
      // ys phala like bidyut issue
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ])([୍])([ୟ])/g , "$1$3$4$2");
      //d+d
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([େ])([୍])([ର])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$4$3$1$5$6$2");
      // patni
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ô])/g , "$2$1");
      //ra phala 
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ])([୍])([ର])/g , "$1$3$4$2");

      input_string = input_string.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
    } // end of IF  statement  meant to  suppress processing of  blank  string.

  } // end of the function  replace_symbols
} // end of convert_to_unicode function
