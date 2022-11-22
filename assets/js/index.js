

function pie(e){
  console.log('0000',e)
  var ppc1 = document.getElementById('progress-pie-chart1');
  var ppc2 = document.getElementById('progress-pie-chart2');
  var ppc3 = document.getElementById('progress-pie-chart3');

  console.log(ppc1)
  percent1 = parseInt(ppc1.getAttribute('data-percent'))
  console.log('1212',percent1)
  deg1 = 360*percent1/100;
 
  if (percent1 > 50) {
    ppc1.classList.add('gt-50');
  }/*else{
    $ppc1.addClass('gt-49');
  }*/

  percent2 = parseInt(ppc2.getAttribute('data-percent'))
  console.log(percent2)
  deg2 = 360*percent2/100;
  

  if (percent2 > 50) {
    ppc2.classList.add('gt-50');
  }/*else{
    $ppc2.addClass('gt-49');
  }*/


  percent3 = parseInt(ppc3.getAttribute('data-percent'))
  console.log(percent3)
  deg3 = 360*percent3/100;

  if (percent3 > 50) {
    ppc3.classList.add('gt-50');
  }/*else{
    $ppc3.addClass('gt-49');
  }*/
  

  $('.ppc-progress-fill1').css('transform','rotate('+ deg1 +'deg)');
  $('.ppc-progress-fill2').css('transform','rotate('+ deg2 +'deg)');
  $('.ppc-progress-fill3').css('transform','rotate('+ deg3 +'deg)');

 // $('.ppc-percents1 span').html(percent1+'%');
 // $('.ppc-percents2 span').html(percent2+'%');
 // $('.ppc-percents3 span').html(percent3+'%');
  
};


