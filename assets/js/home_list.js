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
                        <div class="progress-pie-chart" data-percent="${list.dsa}">
                            <div class="ppc-progress">
                                <div class="ppc-progress-fill"></div>
                            </div>
                            <div class="ppc-percents">
                              <div class="pcc-percents-wrapper">
                                  <span>${list.dsa}%</span>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="statChartHolder">
                      <div class="progress-pie-chart" data-percent="${list.web}">
                          <div class="ppc-progress">
                              <div class="ppc-progress-fill"></div>
                          </div>
                          <div class="ppc-percents">
                            <div class="pcc-percents-wrapper">
                                <span>${list.web}%</span>
                            </div>
                          </div>
                      </div>
                      
                  </div>
                  <div class="statChartHolder">
                    <div class="progress-pie-chart" data-percent="${list.react}">
                        <div class="ppc-progress">
                            <div class="ppc-progress-fill"></div>
                        </div>
                        <div class="ppc-percents">
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
    </div>`)


    }

    createListForm();

}