$(function(){


    //obtain the survey results
    const getSurvey = function(){
        let results = [];
        for (let i = 0; i < 10; i++){
            results.push(parseInt($(`input[name=inlineRadioOptions${i}]:checked`).val()));
        }
        return results;
    }

    //find match based on survey data
    const findMatch = function(surveys){
        //assign survey results to result
        const results = getSurvey();
        let winner = 50;
        let match = {};
        for (let h = 0; h < surveys.length; h ++){
            let total = 0;
            //compare each answer and take the difference to add to a total
            for (let i = 0; i < surveys[h].scores.length; i ++){
                total = Math.abs(results[i] - surveys[h].scores[i]);
            }
            //if the total is less than the current winner, make a new winner
            if (total < winner){
                match = surveys[h];
                winner = total;
            }
        };
        //return the winner
        return match;
    };

    //render the winner in a modal
    const renderMatch = function(match){
        $('#matchResults').modal('toggle');
        $('.modal-header').html('<h5 class="modal-title" id="exampleModalCenterTitle">Best Match</h5>');
        $('.modal-body').html(`<h4 class="text-center">${match.name}</h4><br><img src=${match.photo} class="col-12"/>`);
    };

    //obtain the employee data from api.
    const runSurveyQuery = function(){
        $.ajax({url: '/api/employees', method: 'GET'})
        .then(function(surveys){
            renderMatch(findMatch(surveys));
        })
    }
        
    //When clicking submit, start the process to get match as long as username and portrait is entered
    $('#submit').click(function(){
        if($('#name').val().trim() && $('#photo').val().trim()){
          runSurveyQuery();
        } else {
            $('#matchResults').modal('toggle');
            $('.modal-header').html('<h5 class="modal-title" id="exampleModalCenterTitle">Error</h5>');
            $('.modal-body').html('<h5>Make sure to enter a name a link to a photo!</h5>');
        };
    });
});