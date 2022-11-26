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
                  var newList = createListDom(data.data.lists);
                  notySuccess('Student added successfully')
                  $('#accordionFlushExample').prepend(newList)
                  $('#myname').val('');
                  $('#myroll').val('');
                  $('#mycollage').val('');
                  $('#myweb').val('');
                  $('#mydsa').val('');
                  $('#myreact').val('');
                },
                error: function(error){
                    console.log('err', error)
                }
            })
        })


    }

    let notySuccess = function(text){
      new Noty({
          theme: 'semanticui',
          text : text,
          type: 'success',
          timeout : 300,
          layout : 'topRight'
      }).show();
  }

  let notyError = function(text){
    new Noty({
        theme: 'semanticui',
        text : text,
        type: 'error',
        timeout : 300,
        layout : 'topRight'
    }).show();
}




    let createListDom = function(list){

      if(list.dsa > 50 && list.web > 50 && list.react > 50){
        return $(`<div class="accordion-item m-3 rounded-3 ">
        <h2 class="accordion-header" id="${list.rollnbr}">
            <button class="accordion-button collapsed rounded-3" type="button" onclick='check()' data-bs-toggle="collapse" data-bs-target="#flush-${list._id}" aria-expanded="false" aria-controls="flush-${list._id}">
             ${list.student}
            </button>
        </h2>
        <div id="flush-${list._id}" class="accordion-collapse  collapse" aria-labelledby="${list.rollnbr}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
            <div id="details">
                <p>Batch <small>${list.batch}</small></p>
                <p>Collage name :<small>${list.collage}</small> </p>
            </div>
            <div id="score-card">
                <div id="score-text">
                  <p>Score card :</p>
                </div>
                <div id="course">
                  <div id="dsa">
                      <div class="text">
                        <h5>DSA</h5>
                      </div>
                      <div class="skills-display">
                        <div class="skill-progress" >
                          <div class="fifty-percent mb-blue"  data-bar-width='${list.dsa}'>
                            <div class="skill-name">
                              <span>${list.dsa}% </span>
                            </div>
                          </div>
                        </div>
                      </div> 
                  </div>
                  <div id="web">
                    <div class="text">
                      <h5>Web</h5>
                    </div>
                    <div class="skills-display">
                      <div class="skill-progress" >
                        <div class="fifty-percent  mb-orange"  data-bar-width="${list.web}">
                          <div class="skill-name">
                            <span>${list.web} % </span>
                          </div>
                        </div>
                      </div>
                    </div> 
 
                  </div>
                  <div id="react">
                      <div class="text">
                        <h5>React</h5>
                      </div>
                      <div class="skills-display">
                        <div class="skill-progress" >
                          <div class="fifty-percent mb-teal"  data-bar-width='${list.react}'>
                            <div class="skill-name">
                              <span>${list.react} % </span>
                            </div>
                          </div>
                        </div>
                      </div> 
                  </div>                             
                </div> 
            </div>  
            <div id="info">
                <div id="status">
                  <p id="text1">
                    Status :
                  </p>  
                  <p id="text2">Passed</p>
                  
                </div>
                <div id="interview">
                  <form action="/home/interview/${list._id}" method="get">
                    <button type="submit">View/Create interview</button>
                  </form>
                  
                  
                </div>
            </div>
            
            </div>
        </div>
      </div>`)

      }else{
        return $(`<div class="accordion-item m-3 rounded-3 ">
        <h2 class="accordion-header" id="${list.rollnbr}">
            <button class="accordion-button collapsed rounded-3" type="button" onclick='check()' data-bs-toggle="collapse" data-bs-target="#flush-${list._id}" aria-expanded="false" aria-controls="flush-${list._id}">
             ${list.student}
            </button>
        </h2>
        <div id="flush-${list._id}" class="accordion-collapse  collapse" aria-labelledby="${list.rollnbr}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body ">
            <div id="details">
                <p>Batch <small>${list.batch}</small></p>
                <p>Collage name :<small>${list.collage}</small> </p>
            </div>
            <div id="score-card">
                <div id="score-text">
                  <p>Score card :</p>
                </div>
                <div id="course">
                  <div id="dsa">
                      <div class="text">
                        <h5>DSA</h5>
                      </div>
                      <div class="skills-display">
                        <div class="skill-progress" >
                          <div class="fifty-percent mb-blue"  data-bar-width='${list.dsa}'>
                            <div class="skill-name">
                              <span>${list.dsa}% </span>
                            </div>
                          </div>
                        </div>
                      </div> 
                  </div>
                  <div id="web">
                    <div class="text">
                      <h5>Web</h5>
                    </div>
                    <div class="skills-display">
                      <div class="skill-progress" >
                        <div class="fifty-percent  mb-orange"  data-bar-width="${list.web}">
                          <div class="skill-name">
                            <span>${list.web} % </span>
                          </div>
                        </div>
                      </div>
                    </div> 
 
                  </div>
                  <div id="react">
                      <div class="text">
                        <h5>React</h5>
                      </div>
                      <div class="skills-display">
                        <div class="skill-progress" >
                          <div class="fifty-percent mb-teal"  data-bar-width='${list.react}'>
                            <div class="skill-name">
                              <span>${list.react} % </span>
                            </div>
                          </div>
                        </div>
                      </div> 
                  </div>                             
                </div> 
            </div>  
            <div id="info">
                <div id="status">
                  <p id="text1">
                    Status :
                  </p>  
                  <p  id="text3">Failed</p>
                  
                </div>
                <div id="interview">
                  <form action="/home/interview/${list._id}" method="get">
                    <button type="submit">View/Create interview</button>
                  </form>
                  
                </div>
            </div>
            
            </div>
        </div>
      </div>`)

      }
       

    }

    createListForm();

}