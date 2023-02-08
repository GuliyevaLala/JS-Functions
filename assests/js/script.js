
//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

let num = prompt("Please enter a number");

if (isNaN(num)) {
  console.log("Enter valid number");
} else {
  console.log(twentyOne(num));
}

function twentyOne(num) {
  if (num % 21 == 0) {
    return "Divided";
  }
  else {
    return "NOT Divided";
  }
}

//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

let num1 = prompt("Please enter a number");

if (isNaN(num1) || parseInt(num1) < 1) {

  console.log("Try again");

} else {

  console.log(calcFactorial(Number(num1)));

}


function calcFactorial(num) {

  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
