{
    let createListForm = function(){
       
        let listForm = $('#list-form');
        listForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url : '/home/basicDetails',
                data : listForm.serialize(),
                success: function(data){
                    let newList = createListDom(data.data.lists);
                    $('#accordionFlushExample').prepend(newList)

                },
                error: function(error){
                    console.log('err', error)
                }
            })
        })


    }


    let createListDom = function(list){
        return $(`<div class="accordion-item m-3 rounded-3 ">
        <h2 class="accordion-header" id="${list.rollnbr}">
            <button class="accordion-button collapsed rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-${list._id}" aria-expanded="false" aria-controls="flush-${list._id}">
                ${list.student}
            </button>
        </h2>
        <div id="flush-${list._id}" class="accordion-collapse  collapse" aria-labelledby="${list.rollnbr}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
            <div id="details">
                <p>Batch <small>${list.batch}</small></p>
                <p>Collage name :<small> ${list.collage}</small> </p>
            </div>
            <div id="score-card">
                <p>Score card :</p>
                <div id="course">
                  <div class="progressDiv">
                    <div class="statChartHolder">
                        <div class="progress-pie-chart1" data-percent="${list.dsa}">
                            <div class="ppc-progress">
                                <div class="ppc-progress-fill1"></div>
                            </div>
                            <div class="ppc-percents1">
                              <div class="pcc-percents-wrapper">
                                  <span>${list.dsa}%</span>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="statChartHolder">
                      <div class="progress-pie-chart2" data-percent="${list.web}">
                          <div class="ppc-progress">
                              <div class="ppc-progress-fill2"></div>
                          </div>
                          <div class="ppc-percents2">
                            <div class="pcc-percents-wrapper">
                                <span>${list.web}%</span>
                            </div>
                          </div>
                      </div>
                      
                  </div>
                  <div class="statChartHolder">
                    <div class="progress-pie-chart3" data-percent="${list.react}">
                        <div class="ppc-progress">
                            <div class="ppc-progress-fill3"></div>
                        </div>
                        <div class="ppc-percents3">
                          <div class="pcc-percents-wrapper">
                              <span>${list.react}%</span>
                          </div>
                        </div>
                    </div>
                    
                </div>
                  </div>
                    
                </div>
            </div>  
            <div id="info">
                <div id="status">
                <p>Status :<small></small></p>
                </div>
                <div id="interview">
                <button type="button">Create interview</button>
                </div>
            </div>
            
            </div>
        </div>
    </div>

    <script>
    $(function(){
        console.log('hi')
        var $ppc1 = $(' .progress-pie-chart1')
        var $ppc2 = $(' .progress-pie-chart2')
        var $ppc3 = $(' .progress-pie-chart3')
      
        percent1 = parseInt($ppc1.data('percent')),
        percent2 = parseInt($ppc2.data('percent')),
        percent3 = parseInt($ppc3.data('percent')),
        
        deg1 = 360*percent1/100;
        deg2 = 360*percent2/100;
        deg3 = 360*percent3/100;
        if (percent1 > 50) {
          $ppc1.addClass('gt-50');
        }
        if (percent2 > 50) {
          $ppc2.addClass('gt-50');
        }
        if (percent3 > 50) {
          $ppc3.addClass('gt-50');
        }
        
      
        $('.ppc-progress-fill1').css('transform','rotate('+ deg1 +'deg)');
        $('.ppc-progress-fill2').css('transform','rotate('+ deg2 +'deg)');
        $('.ppc-progress-fill3').css('transform','rotate('+ deg3 +'deg)');
      
        $('.ppc-percents1 span').html(percent1+'%');
        $('.ppc-percents2 span').html(percent2+'%');
        $('.ppc-percents3 span').html(percent3+'%');
        
      });
    </script>
    
    
    `)




    }

    createListForm();

}