/*function pie(e){
  console.log(e)
  var fill = document.querySelectorAll(' .ppc-progress-fill1')
  var chart = document.querySelectorAll(' .progress-pie-chart1');
  for (let ppc1 of chart){
    let val1 = ppc1.getAttribute('id')
    if(val1 == e){
      let percent1 = parseInt(ppc1.getAttribute('data-percent'))
      let deg1 = (360*percent1/100);
      let i = 0
      if (percent1 > 50) {
        ppc1.classList.add('gt-50');
      }
      for(let bar of fill){
        let val2 = bar.getAttribute('id')
        if(val2 == e){
          let test = document.getElementsByTagName('section')[i]
          test.style.transform = 'rotate('+ deg1 +'deg)'
          test.style.color= "red"
        }
        i++
      }
       
      //console.log(ppc1.getAttribute('id'))
      //console.log(ppc1.children[0].children[0].getAttribute('id'))
    }
    
  }
}
/*$(function(){
  console.log('hi',$(' .progress-pie-chart1') )
  var $ppc1 = $(' .progress-pie-chart1')
  var $ppc2 = $(' .progress-pie-chart2')
  var $ppc3 = $(' .progress-pie-chart3')
  percent1 = parseInt($ppc1.data('percent'))
  deg1 = 360*percent1/100;
 
  if (percent1 > 50) {
    $ppc1.addClass('gt-50');
  }else{
    $ppc1.addClass('gt-49');
  }
  percent2 = parseInt($ppc2.data('percent'))
  deg2 = 360*percent2/100;
  
  if (percent2 > 50) {
    $ppc2.addClass('gt-50');
  }else{
    $ppc2.addClass('gt-49');
  }
  percent3 = parseInt($ppc3.data('percent'))
  deg3 = 360*percent3/100;
  if (percent3 > 50) {
    $ppc3.addClass('gt-50');
  }else{
    $ppc3.addClass('gt-49');
  }
  
  $('.ppc-progress-fill1').css('transform','rotate('+ deg1 +'deg)');
  $('.ppc-progress-fill2').css('transform','rotate('+ deg2 +'deg)');
  $('.ppc-progress-fill3').css('transform','rotate('+ deg3 +'deg)');
 // $('.ppc-percents1 span').html(percent1+'%');
 // $('.ppc-percents2 span').html(percent2+'%');
 // $('.ppc-percents3 span').html(percent3+'%');
  
});*/



var skillprogress = document.querySelectorAll(".skill-progress > div");
var done = false;


function initializebar(){
    for(var bar of skillprogress){
        bar.style.width = 0 + '%';
        bar.setAttribute("done",false);
    }
    
}



function fillbar(bar){
    let width = 0;
    let target = bar.getAttribute('data-bar-width');

    let interval = setInterval(function(){
        if(width > target){
            clearInterval(interval);
        }
        width++;
        bar.style.width = width + "%";
    } ,6);
}

function check(){
    for(var bar of skillprogress){
      initializebar();
      //var coordinates = bar.getBoundingClientRect();
      //verify(coordinates);
      if (bar.getAttribute("done") == "false"){
			    bar.setAttribute("done",true);	
          fillbar(bar);
      }else {
          bar.setAttribute("done",false);
          initializebar();
      }
    }
}