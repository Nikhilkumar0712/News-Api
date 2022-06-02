
let news = document.getElementById("news")
const xhr = new XMLHttpRequest()
xhr.open("GET", 'text.json', true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        let newsHtml=''
       articles.forEach(element => {
            let news = 
            `<div class="card" id="news">
            <h4>${element['title']}</h4>
            <img src="${element['urlToImage']}" alt="Avatar">
            <div class="container">
              <h4><b>${element['description']}</b></h4>
              <p>${element['content']}</p>
              <br>
              View Full Story here:<a target="_blank" href="${element['url']}">${element['url']}</a>    
            </div>
          </div>`
            
        
            newsHtml += news
        });  
        news.innerHTML = newsHtml
    }
    else {
        console.log("some error ");
    }
}

xhr.send();



