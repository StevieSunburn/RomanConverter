function convertToRoman(num) {
    num = num.toString();
    let zeros = []
    for (let i = num.length; i < 4; i++){
      zeros.unshift(0);
    }
    num = Number(num);
    zeros.push(num);
    
    let arr = zeros.join("");
     console.log(arr.charAt());
    let roman = [["","M","MM","MMM"],
                 ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                   ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
                     ["","I","II","III","IV","V","VI","VII","VIII","IX"]];
    let answerarr = [];
    for (let j = 0; j < 4; j++){
      answerarr.push(roman[j][arr.charAt(j)]);
      };
     console.log(answerarr.join(""))
     return answerarr.join("");
   }
   