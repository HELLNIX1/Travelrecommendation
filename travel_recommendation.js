
function fetchR() {
    const searchInput = document.getElementById('search').value.toLowerCase().trim();
    const results = document.getElementById('results');

    fetch('travel_recommendation_api.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for(const key in data)
                {
                    if(key.toLowerCase().includes(searchInput))
                        {
                            results.innerHTML = '';
                            const filtered = data[key];
                            if(key != 'countries'){
                            filtered.forEach(item => {
                                const resultDiv = document.createElement('div');
                                resultDiv.classList.add('result-item');
                                resultDiv.innerHTML = `
                                <div style="background-color: rgba(0, 0, 0, 0.34);color: aliceblue;">
                                    <img src="${item.imageUrl}">
                                    <h3>${item.name}</h3>
                                    <p>${item.description}</p></div>`;
                                

                                results.appendChild(resultDiv);
                            });
                            break;
                        }
                           
                            

                        else{
                            item = data[key][0]['cities'][0]
                            const resultDiv = document.createElement('div');
                            resultDiv.classList.add('result-item');
                            resultDiv.innerHTML = `
                            <div style="background-color: rgba(0, 0, 0, 0.34);color: aliceblue;">
                                <img src="${item.imageUrl}">
                                <h3>${item.name}</h3>
                                <p>${item.description}</p></div>`;
                            

                            results.appendChild(resultDiv);
                            item = data[key][1]['cities'][0]
                            const resultDiv2 = document.createElement('div');
                            resultDiv2.classList.add('result-item');
                            resultDiv2.innerHTML = `
                            <div style="background-color: rgba(0, 0, 0, 0.34);color: aliceblue;">
                                <img src="${item.imageUrl}">
                                <h3>${item.name}</h3>
                                <p>${item.description}</p></div>`;
                            

                            results.appendChild(resultDiv2);
                        };
                            
                        }
                }
            
        })
        .catch(error => {
            results.innerHTML = '<p>Error</p>';
            console.log(error);
        });

    
}
function clear2()
{
    const results = document.getElementById('results');
    results.innerHTML = '';
}