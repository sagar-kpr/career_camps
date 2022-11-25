
{
    let dsa = $('#fetch').data('dsa')
    let web = $('#fetch').data('web')
    let react = $('#fetch').data('react')
    let id = $('#fetch').data('id') 
    let jobsApi =  function(){
        let btn = $('#btn')
        btn.click(function(e){
            e.preventDefault();
            $.ajax({
                type : 'get',
                url : 'https://remotive.io/api/remote-jobs?category=software-dev',
                success : async function(data){
                    let newdata = await data.jobs
                    for(let i=0; i< 5; i++){
                        let list = await createDom(newdata[i])
                        $('#all-jobs').append(list)
                    }
                    $('#btn').prop('disabled',true);
                    $('#btn').css('opacity', '0.8')

                },
                error: function(err){
                    console.log('err',err)
                }
            })
        })

    }
    
    let createDom = function(data){
        let d = data.publication_date
        let date = d.slice(0,10)
        if(web > 50 || dsa > 50 || react > 50){
            return $(`<div class="jobs-box ">
            <div id="img-box">
                <img src="${data.company_logo}" >
            </div>
            <div id="detail-box">
                <div class="jobs-list">
                    <div class="role">
                        <div id="category">
                            <h3>${data.title}</h3>
                        </div>
                        <div id="time">
                            <small>Interview Date - ${date}</small>
                        </div>
                    </div>
                    <div class="company">
                        <span>${data.company_name}</span>
                    </div>
                    <div class="location">
                        <span><i class="fa-solid fa-location-dot">&nbsp</i>
                            ${data.candidate_required_location}
                         </span>
                         <span><i class="fa-solid fa-briefcase">&nbsp</i> 
                            ${data.job_type}
                         </span>
                    </div>
                    <div class="requirement">
                        <div id="react">
                            <span>${data.tags[5]}</span>
                        </div>
                        <div class="apply" >
                            <a href="/home/create-interview/${data.id}/${id}" id="anchor-btn">Apply</a>
                        </div>
                    </div>
                </div>
            </div>    
          </div>
          <script src="/js/create.js"></script>`)
            

        } else{
            return $(`<div class="jobs-box ">
            <div id="img-box">
                <img src="${data.company_logo}" >
    
            </div>
            <div id="detail-box">
                <div class="jobs-list">
                    <div class="role">
                        <div id="category">
                            <h3>${data.title}</h3>
                        </div>
                        <div id="time">
                            <span>Interview Date - ${date}</span>
                        </div>
                    </div>
                    <div class="company">
                        <span>${data.company_name}</span>
                    </div>
                    <div class="location">
                        <span><i class="fa-solid fa-location-dot">&nbsp</i>
                            ${data.candidate_required_location}
                         </span>
                         <span><i class="fa-solid fa-briefcase">&nbsp</i> 
                            ${data.job_type}
                         </span>
                    </div>
                    <div class="requirement">
                        <div id="react">
                            <span>${data.tags[5]}</span>
                        </div> 
                        <div id="not-eligable">
                            <span>Not Eligable</span>
                        </div>                 
                    </div>
                </div>
            </div>          
          </div>`)
            
        }
   
        
    }

    jobsApi()
}


