console.log('aaa')

function aaa() {
    'use strict';
    const url = 'https://rvision-int.exadel.by/rms-web/services/rest/resources/getGeneralData?id=resourceId'
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json()
        .then(function (data) {
                    console.log(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

aaa();