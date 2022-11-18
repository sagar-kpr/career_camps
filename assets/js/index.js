$(function(){
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
  
});


