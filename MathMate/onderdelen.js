
function myFunction1() {
    let y = document.getElementById("txt1").value;
    let z = document.getElementById("txt2").value;
    let x = +y + +z;
    document.getElementById("demo0").innerHTML = x;
  }

  function myFunction2() {
    let y = document.getElementById("txt3").value;
    let z = document.getElementById("txt4").value;
    let x = y - z;
    document.getElementById("demo1").innerHTML = x;
  }

  function myFunction3() {
    let y = document.getElementById("txt5").value;
    let z = document.getElementById("txt6").value;
    let x = y * z;
    document.getElementById("demo2").innerHTML = x;
  }

  function myFunction4() {
    let y = document.getElementById("txt7").value;
    let z = document.getElementById("txt8").value;
    let x = y / z;
    document.getElementById("demo3").innerHTML = x;
  }

  function myFunction5() {
    let y = document.getElementById("txt9").value;
    let z = document.getElementById("txt10").value;
    let x = y ** z;
    document.getElementById("demo4").innerHTML = x;
  }

  function myFunction6() {
    let y = document.getElementById("txt11").value;
    let z = document.getElementById("txt12").value;
    let x = (y / 100) * z;
    document.getElementById("demo5").innerHTML = x;
  }

  function myFunction7() {
    let y = document.getElementById("txt13").value;
    let z = document.getElementById("txt14").value;
    let x = y % z;
    document.getElementById("demo6").innerHTML = x;
  }

  function VindEven(){
    
    let num = document.getElementById('num').value;

    
    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is een Even nummer';
    }else{
        document.getElementById('result').innerHTML = num + ' is een Oneven nummmer';
    }
}     
   
  function multiply() {
    let n = document.getElementById('num').value;
    let l = document.getElementById('limit').value;
    let out = "";
    for (let i = 1; i <= l; i++) {
        out = out + i + " * " + n + " = " + (i * n )+ "<br/>";
    }
    document.getElementById("result").innerHTML = out;
}

function Machten() {
  let g = document.getElementById('grond').value;
  let e = document.getElementById('expo').value;
  
  for (let i = 0; i <= e; i++) {
    document.getElementById("result2").innerHTML += g ** i + "<br>" ;
  }
  
}

function Breuken() {
  let g = document.getElementById('num1').value;
  
  
  for (let i = 1; i <= g; i++) {
    document.getElementById("result3").innerHTML += "<br>" + "1/" + i + "=" +1 /i;
  }
  
}

function Kwadraten() {
  let g = document.getElementById('num2').value;
  
  
  for (let i = 1; i <= g; i++) {
    document.getElementById("result4").innerHTML += "<br>" + Math.pow(i,2);
  }
  
}

function Fibonacci() {  
  let num = parseInt(document.getElementById('num-fib').value);

  let n1 = 1;

  let n2 = 0;

  nextTerm=0;



  while (num >=  0){

      nextTerm= n1;

      n1 = n1+n2;

      n2 = nextTerm;

      document.getElementById('result5').innerHTML += (n2)+"<br>";

      num--;

  }
}

function Priemgetallen(){

  let num = document.getElementById('num-priem').value;



  for(let i = 2; i <= num; i++){

      flag = true;

      for(let j = 2; j <= i-1; j++){

          if(i % j == 0){

              flag = false;

              break;

          }  

      }

      if(flag) {

          let answer = i + "<br>";

          document.getElementById('result6').innerHTML += answer;

          console.log(answer);

      }

  }

}

function Collatz(){

  let num = parseInt(document.getElementById('num-col').value);





  while(num != 1){

      if(num % 2 == 0){  

          let answer = num / 2;

          document.getElementById('result7').innerHTML += num+"/2="+answer+"<br>";

          num = parseInt(num/2);

      }else{

          let answer1 = num * 3 + 1 ;

          document.getElementById('result7').innerHTML += num+"*3+1="+answer1+"<br>";

          num = (num * 3) + 1;

      }        

  }

}

function Perfect(){



  let number = parseInt(document.getElementById('num-per').value);

  var temp = 0;

  var divisors = [];



  for(var i = 1; i <= number / 2; i++){

       if(number % i === 0){

          temp += i;

          divisors.push(" " + i);

        }

  }



   if(temp === number && temp !== 0){

          document.getElementById("result8").innerHTML = divisors + " = " + number;

      }



   else{

          document.getElementById('result8').innerHTML = "Het is geen perfecte nummer.";

      }  

}



 