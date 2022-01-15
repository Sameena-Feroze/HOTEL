function validName(tagN) {

    let ph = /^[A-za-z]*$/g;
    let p = document.getElementById(tagN).value;
    console.log(p);
    let result = ph.test(p);
    console.log(result);
    document.getElementById(tagN).classList.remove('invalid');
    if(!result){
      document.getElementById(tagN).classList.add('invalid');
    }
  
  }

  function validemail(tagN) {

    let ph = /^[A-za-z]+[0-9]+@+gmail|yahoo+.+com*$/g;
    let p = document.getElementById(tagN).value;
    console.log(p);
    let result = ph.test(p);
    console.log(result);
    document.getElementById(tagN).classList.remove('invalid');
    if(!result){
      document.getElementById(tagN).classList.add('invalid');
    }
  
  }
  


  
  
  function validPhn(tagN) {
  
    let ph = /^[0-9]{10}$/g;
    let p = document.getElementById(tagN).value;
    let result = ph.test(p);
    console.log(result);
    document.getElementById(tagN).classList.remove('invalid');
    if(!result)
      document.getElementById(tagN).classList.add('invalid');
  
  }
  
  function validNum(tagN) {
  
    let ph = /[^0-9]/g;
    let p = document.getElementById(tagN).value;
    let result = p.match(ph);
    document.getElementById(tagN).classList.remove('invalid');
    if(result != null){
      document.getElementById(tagN).classList.add('invalid');
    }
  
  }
  
  function isNull(tagN) {
  
    let p = document.getElementById(tagN).value;
    document.getElementById(tagN).classList.remove('invalid');
    if(p==""){
    document.getElementById(tagN).classList.add('invalid');
    }
  
  }