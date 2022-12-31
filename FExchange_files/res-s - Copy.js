//Font Exchange javascript code
//function string, input string
function check_input() {
    if (document.getElementById('uInput').value == "") {
        return false;
    }
}
function sreelipi_to_unicode() {
    check_input();
  var conversion_array = new Array(
    ";ÿ" , "ନ୍ତ" ,
    "H´" , "ୱ" ,
    ">" , " ।" ,
    "ÿ" , "" , //blank
    "&" , "" , //& represents two marks combining in SL. Not necessary in Unicode (mark to mark position GPOS)
    "􀃛" , "" ,
    "ç§" , "§ç" ,
    "􀁞" , "{" ,
    "{ç " , "ç{" ,
    "{ç" , "ç{" ,
    "ôæ" , "æô" ,
    " {# " , "#{" ,
    "{#" , "#{" ,
    "¿â" , "â¿" ,
    "􀀃" , " " ,
    "  " , " " ,
    "\–ö" , "ର୍ଦ୍ଧ୍ୱ" ,
    "–" , "ଦ୍ଧ୍ୱ" ,

    "1" , "୧" ,
    "2" , "୨" ,
    "3" , "୩" ,
    "4" , "୪" ,
    "5" , "୫" ,
    "6" , "୬" ,
    "7" , "୭" ,
    "8" , "୮" ,
    "9" , "୯" ,
    "0" , "୦" ,

    "þ#" , "ତ୍ମ" ,
    "œ#" , "ତ୍ନ" ,
    "Œ", "ତ୍ପ",
    "”", "ଦ୍ଦ",

    "b" , "ଚ୍ଛ" ,
    "t" , "ଟ୍ଟ" ,
    "􀁲" , "ଦ୍ଦ" ,
    "􀁪" , "ତ୍ମ" ,
    "􀁧" , "ତ୍କ" ,
    "û" , "ତ୍ସ" ,
    "􀁩" , "ତ୍ତ୍ଵ" ,
    "½" , "୍ମ" ,
    "􀁵" , "ଦ୍ଭ" , // dbha


    "¸" , "ମ୍ପ" , //mpa
    "¹" , "ମ୍ଫ" , // mpha
    "¼" , "ମ୍ମ" , //mma


    "Ú" , "ସ୍ତ୍ର" ,
    "Í" , "ଷ୍କ" ,
    "O" , "କ୍ସ" ,
    "Ð" , "ଷ୍ଣ" ,
    "À" , "ର" ,
    "à" , "ଲ" ,
    "Ü" , "ହ" ,
    "􀁨" , "ତ୍ତ" ,

    "L" , "କ" , // ka
    "Q" , "ଖ" , // kha
    "S" , "ଗ" , // ga
    "W" , "ଘ" , // gha
    "Y" , "ଙ" , // nga
    "`" , "ଚ" , // ca
    "a" , "ଚ୍ଚ" , // cc (dwitiya)
    "d" , "ଛ" , // cha
    "f" , "ଜ" , // ja

    "l" , "ଝ" , // jha

    "s" , "ଟ" , // Ta
    "v" , "ଠ" , // Tha
    "Ý" , "ଡ଼" , // Da (bindu)
    "x" , "ଡ" , // Da
    "Þ" , "ଢ଼" , // Dha (bindu)
    "|" , "ଢ" , // Dha
    "~" , "ଣ" , // Na
    "􀁢" , "ଣ୍ଣ" , // NNa

    "􀁦" , "ତ" , // ta
    "†" , "ତ" , //ta
    "$" , "ଥ" , // tha
    "􀁰" , "ଦ" , // da
    "’" , "ଦ" , // da
    "􀁷" , "ଧ" , // dha
    "™" , "ଧ" , // dha (new)
    "􀁺" , "ନ" , // na
    "œ" , "ନ" , // na (new)
    "oe" , "ନ" , // na

    "¨" , "ପ" , // pa
    "􀂄" , "ପ" , //pa
    "ü" , "ଫ" , // pha
    "¯" ,  "ବ" , // da
    "μ" , "ଭ" , // bha
    "µ" , "ଭ" , // bha
    "þ" , "ମ" , // ma
    "􀃚" , "ମ" , // ma
    "¾" , "ଯ" , // ja (antastha)

    "Á" , "ଳ" ,

    "É" , "ଶ" , // Sa (talabya)
    "􀂥" , "ଶ" , // Sa (talabya)
    "Ì" , "ଷ" , // Sa (murdhanya)
    "Ó" , "ସ" , // Sa
    "ä" , "କ୍ଷ" , // khya
    "j" , "ଜ୍ଞ" , // Gya


    "o" , "ଞ୍ଚ" , // nca
    "p" , "ଞ୍ଛ" , // ncha
    "¢" , "ନ୍ଦ" , // nda
    "£" , "ନ୍ଦ" , // nda
    "¤" , "ନ୍ଧ" , // ndha
    "ƒ" , "ଣ୍ଡ" , // nDa
    "º" , "ମ୍ବ" , //mba
    "»" , "ମ୍ଭ" , // mbh
    "±" , "ବ୍ଦ" , // bda
    "􀁳" , "ଦ୍ଧ" , // bdha
    "²", "ବ୍ଧ" , // bdha

    "¡" , "ନ୍ଥ" , // nth
    "×" , "ସ୍ଥ" , //sth
    "􀁻" , "ନ୍ନ" , //nn

    "􀁸" , "ଧ୍ୟ" , // dhya
    "š" , "ଧ୍ୟ" , // dhya

    "ø" , "÷ë" ,
    "÷" , "୍ର" , // reph
    "¿" , "୍ୟ" , // ja phala 
    "´" , "୍ୱ" , // ba phala

    "Ô" , "ସ୍କ" , // ska
    "§" , "୍ନ" , // na phala
    "ü" , "ଫ" , // pha
    "u" , "ଫ" ,  // Ta phala
    "Û" , "୍ସ" ,

    "Ÿ" , "ନ୍ନ" , // nna
    "•" , "ଦ୍ଧ" , // ddha
    "ˆ" , "ତ୍ତ" , // tta
    //";" , "ନ୍ତ" , // nta (seems doubtful in SL 4.0 documents)
    "􀁣" , "ଣ୍ଡ" , // NDa
    //" ß" , "ୟ" , // ya
    "ß" , "ୟ" , // ya
    "Ö" , "ସ୍ତ" , // sta
    "N" , "କ୍ତ" , // kta
    "¦" , "ନ୍ତ୍ର" , // ntr
    "g" , "ଜ୍ଜ" , // jja
    "©" , "ପ୍ତ" , // pta
    "‡" , "ତ୍କ" , //tka
    "Š" , "ତ୍ମ" , //tma
    "‚" , "ଣ୍ଣ" , //NNa (dwitiya)
    "Z" , "ଙ୍କ" ,
    "\\" , "ଙ୍ଖ" , // nkha
    "\è" , "ଙ୍ଗ" , // nga
    "^" , "ଙ୍ଘ" , //ngha
    "q" , "ଞ୍ଜ" , // nja

    "+" , "ଣ୍ଟ" , // NTa
    "Î" , "ଷ୍ଟ" , // STa
    "Ê" , "ଶ୍ଚ" , // Sca
    "Ï" , "ଷ୍ଠ" , // Lpa
    "Å" , "ଳ୍ପ" , // Lpa
    "Ñ" , "ଷ୍ପ" , // Spa (murdhanya)
    "Ø" , "ସ୍ପ" , // spa
    "Ù" , "ସ୍ପ" , // spa

    //" æ" , "ା" , // aa kara
    "æ" , "ା" , // aa kara
    "􀃂" , "ା" , // aa kara
    " ା", " ।", // purnached
    " ç" , "ି" , // i kara
    "ÿ]" , "ିଁ" , // i kara
    "ç" , "ି" , // i kara
    "􀃃" , "ି" , // i kara
    //"#" , "ି" , // i kara --manoj
    "ê" , "ୀ" , // I kara
    "􀃆" , "ୀ" , // dirgha I kara

    " ë" , "ୁ" , // u kara
    "ë" , "ୁ" , // u kara
    "􀃇" , "ୁ" , // u kara
    "í" , "ୂ" , // u kara
    "õ " , "ୃ" , // u kara
    "õ" , "ୃ" , // R kara
    "ô" , "ଁ" , // Anuswara
    "􀁥" , "ଃ" , // bisarga
    "…" , "ଃ" , // bisarga
    "ú" , "୍‌" , // halanta with ZWNJ

    "ó" , "ଂ" , // chandrabindu
    "]" , "ିଁ" , // i kara
    "â" , "୍ଲ" , // la
    "È" , "୍ଳ" , // La
    "úÿ" , "୍‌" , //ka halanta zero-width non joiner

    ' ̄',"ବ",
    '̄',"ବ",
    ' ́',"୍ୱ",
    '́',"୍ୱ",
    '̈','ପ',

    "\"\"" , "“" ,//left and right dbl and single quotes
    "\'\'" , "”" ,
    "\"" , "‘" ,
    "\'" , "’" ,


    "A" , "ଅ" , // a
    "􀀤" , "ଅ" , // a
    "ଅା" , "ଆ" , // aa
    "B" , "ଇ" , // i
    "􀀥" , "ଇ" , // i
    "C" , "ଈ" , // ii
    "D" , "ଉ" , // u
    "􀀧" , "ଉ" , // u
    "E" , "ଊ" , // U
    "J" , "ଋ" , // R
    "F" , "ଏ" , // e
    "G" , "ଐ" , // ai
    "􀀪" , "ଐ" , // ai
    "H" , "ଓ" , // o
    "I" , "ଔ" , // au
    "K" , "ଔ" , // au
    "=" , "ଣ୍ଠ" , // nttha
    "—" , "ଦ୍ଭ" , // dbha
    "#" , "ି"    
  
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
      modified_substring = modified_substring.replace(  /([{])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/{ð/g  ,  "ୈ");
      modified_substring = modified_substring.replace(/{ା/g  ,  "ୋ");
      modified_substring = modified_substring.replace(/{ò/g  ,  "ୌ");
      modified_substring = modified_substring.replace(/{/g   ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ö/g , "ö$1$2");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ö/g , "ö$1$2");
      modified_substring = modified_substring.replace(/ö/g , "ର୍");
      modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
      //following three statement for adjusting position of reph and i .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)}/g , "}$1$2ି");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])}/g , "}$1$2");
      modified_substring = modified_substring.replace(/}/g , "ର୍");
      modified_substring = modified_substring.replace(/ˆ/g , "ତ୍ତ");
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  replace_symbols

} // end of convert_to_unicode function

