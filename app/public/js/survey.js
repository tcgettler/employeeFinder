$(function(){

    // const renderMatch = function(){

    // };
    const getSurvey = function(){
        let results = [];
        for (let i = 0; i < 10; i++){
            results.push(parseInt($(`input[name=inlineRadioOptions${i}]:checked`).val()));
        }
        return results;
    }
    const findMatch = function(surveys){
        const results = getSurvey();
        let winner = 50;
        let match = {};
        for (let h = 0; h < surveys.length; h ++){
            let total = 0;
            for (let i = 0; i < surveys[h].scores.length; i ++){
                total = Math.abs(results[i] - surveys[h].scores[i]);
            }
            if (total < winner){
                match = surveys[h];
                winner = total;
            }
        };
        return match;
    };

    const renderMatch = function(match){
        $('#matchResults').modal('toggle');
        $('.modal-body').html(`<h4 class="text-center">${match.name}</h4><br><img src=${match.photo} class="col-12"/>`);
    };

    const runSurveyQuery = function(){
        $.ajax({url: '/api/employees', method: 'GET'})
        .then(function(surveys){
            renderMatch(findMatch(surveys));
        })
    }
        
    $('#submit').click(function(){
        runSurveyQuery();
    });
});