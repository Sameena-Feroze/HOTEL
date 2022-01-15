function validName(t1) {

    let ph = /^[A-za-z]*$/g;
    let p = document.getElementById(t1).value;
    console.log(p);
    let result = ph.test(p);
    console.log(result);
    document.getElementById(t1).classList.remove('notValid');
    if(!result){
      document.getElementById(t1).classList.add('notValid');
    }
  
  }


  function validemail(t1) {

    let ph = /^[A-za-z]+[0-9]+@+(gmail|yahoo)+.+[(com|in)]*$/g;
    let p = document.getElementById(t1).value;
    console.log(p);
    let result = ph.test(p);
    console.log(result);
    document.getElementById(t1).classList.remove('notValid');
    if(!result){
      document.getElementById(t1).classList.add('notValid');
    }
  
  }
  

  function validPhn(t1) {
  
    let ph = /^[0-9]{10}$/g;
    let p = document.getElementById(t1).value;
    let result = ph.test(p);
    console.log(result);
    document.getElementById(t1).classList.remove('invalid');
    if(!result)
      document.getElementById(t1).classList.add('invalid');
  
  }
  
  function validNum(t1) {
  
    let ph = /[^0-9]/g;
    let p = document.getElementById(t1).value;
    let result = p.match(ph);
    document.getElementById(t1).classList.remove('invalid');
    if(result != null){
      document.getElementById(t1).classList.add('invalid');
    }
  
  }
  
  function isNull(t1) {
  
    let p = document.getElementById(t1).value;
    document.getElementById(t1).classList.remove('invalid');
    if(p==""){
    document.getElementById(t1).classList.add('invalid');
    }
  
  }