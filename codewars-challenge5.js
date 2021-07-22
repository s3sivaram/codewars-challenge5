// ------------solved by s3sivaram----on 21-Jul-21
// new string is "(" if that character appears only once in the original string, or ")"
// "din"      =>  "((("
// "recede"   =>  "()()()"

function replaceChar(str1) {
  let str = String(str1).toLowerCase();
  let tempobj = Array.from(str).reduce((acc, e) => {
    return { ...acc, [e]: acc[e] + 1 || 1 };
  }, {});
  let result = Array.from(str);
  for (let i = 0; i <= str.length - 1; i++) {
    if (tempobj[str[i]] > 1) {
      result[i] = ")";
    } else {
      result[i] = "(";
    }
  }
  return result.join("");
}

console.log(replaceChar('((@"'));
