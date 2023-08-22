// EXEMPLO DE FLUXO DE 

function fn1(){
    console.log('Fn01');
}
function fn2(){
    setTimeout(()=>{console.log('Fn02')},1000);
}
function fn3(){
    console.log('Fn03');
}

fn1() // primeiro a ser impresso
fn2() // terceiro a ser impresso
fn3() // segundo a ser impresso