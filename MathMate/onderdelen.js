
function myFunction() {
    let y = document.getElementById("txt1").value;
    let z = document.getElementById("txt2").value;
    let x = +y + +z;
    document.getElementById("demo").innerHTML = x;
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
  let res = "";
  for (let i = 1; i <= e; i++) {
      res = res + i + " * " + g + " = " + (i ** n )+ "<br/>";
  }
  document.getElementById("result2").innerHTML = res;
}


 function VindEven(){
    
    let num = document.getElementById('num').value;

    
    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = num + ' is een Even nummer';
    }else{
        document.getElementById('result').innerHTML = num + ' is een Oneven nummmer';
    }
}     