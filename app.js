document.querySelector('.get-jokes').addEventListener('click',generate);

function generate(e){
    
    const xhr = new XMLHttpRequest();
    let num=document.querySelector('.ip').value;
    console.log(num);

    xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`,true);

    xhr.onload=function(){
        if(this.status===200){
            let response=JSON.parse(this.responseText);
            let jokesList='';
             if(response.type=='success'){
                    response.value.forEach(function(joke){
                        jokesList +=`
                        <li>${joke.joke}</li>
                        `
                    })
             }else{
                jokesList="ERROR PLEASE TRY LATER AGAIN THANK YOU!"
             }
             document.querySelector('.allJoke').innerHTML=jokesList;
        }

    }


    xhr.send();

    e.preventDefault();
}