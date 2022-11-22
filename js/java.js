let mySearch=document.querySelector('.my-search');
let myInput=document.querySelector('.my-input');
let myBageHolder=document.querySelector('.bage-holder');

let myh=`<h1 class="text-light lh-base text-center">The Latest Added Movies</h1>`
myBageHolder.innerHTML=myh;

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bd551351d613eae72b5219e295facfeb&page1')
.then(res=>res.json())
.then((data)=>{
    let mydata=data.results;
// console.log(mydata);
mydata.map((m)=>{
 
  let color;
if(m.vote_average>=8){color="success"}else if(m.vote_average>=5){color="warning"}else{color="danger"}
    let mycards=`
    <div class="card bg-dark text-light m-1 rounded the-card position-relative caros" style="width: 10rem;" id="${m.id}">
      <img src="https://image.tmdb.org/t/p/original/${m.poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
      <div class="row justify-content-between">
        <p class="card-text f-size col-10">${m.title}</p><span class="f-size col-2 text-${color}">${m.vote_average}</span>
      </div>
        </div>

      <div class="position-absolute bottom-0 start-0 bg-dark bg-gradient text-white p-1 hide card-dis caros" style="width: 10rem;">
      <p class="p-size"><span class="fw-bolder">title: ${m.title}<br>
      language: ${m.original_language}</span><br>
      overview: ${m.overview}</p>
      </div>
   
    `
     
    myBageHolder.innerHTML+=mycards;


  })
  


  let thecard=document.querySelectorAll('.the-card')
  let cardDis=document.querySelectorAll('.card-dis')
  //  console.log(thecard[0])
  //  console.log(cardDis[0])
  for(let i=0;i<mydata.length;i++){
    thecard[i].addEventListener('mouseover',()=>{cardDis[i].style.display='block'})
    thecard[i].addEventListener('mouseout',()=>{cardDis[i].style.display='none'})
  }

})



mySearch.addEventListener('submit',(e)=>{
  e.preventDefault();  
    myBageHolder.innerHTML=""
    if(myInput.value!==""){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=bd551351d613eae72b5219e295facfeb&query=${myInput.value}`)
    .then(res=>res.json())
    .then((data)=>{
        let mydata=data.results;
    // console.log(mydata);
    if(mydata.length==0){myBageHolder.innerHTML=`<h1 class="text-white lh-base text-center hig">Resault Not Found</h1>`}else{
    mydata.map((m)=>{
        let color;
    if(m.vote_average>=8){color="success"}else if(m.vote_average>=5){color="warning"}else{color="danger"}
        let mycards=`
        <div class="card bg-dark text-light m-1 rounded the-card caros" style="width: 10rem;">
          <img src="https://image.tmdb.org/t/p/original/${m.poster_path}" class="card-img-top" alt="...">
          <div class="card-body">
          <div class="row justify-content-between">
            <p class="card-text f-size col-10">${m.title}</p><span class="f-size col-2 text-${color}">${m.vote_average}</span>
          </div>
          </div>

      <div class="position-absolute bottom-0 start-0 bg-dark bg-gradient text-white p-1 hide card-dis caros" style="width: 10rem;">
      <p class="p-size"><span class="fw-bolder">title: ${m.title}<br>
      language: ${m.original_language}</span><br>
      overview: ${m.overview}</p>
 </div>
        `
        myBageHolder.innerHTML+=mycards;
    
    })
    let thecard=document.querySelectorAll('.the-card')
    let cardDis=document.querySelectorAll('.card-dis')
    //  console.log(thecard[0])
    //  console.log(cardDis[0])
    for(let i=0;i<mydata.length;i++){
      thecard[i].addEventListener('mouseover',()=>{cardDis[i].style.display='block'})
      thecard[i].addEventListener('mouseout',()=>{cardDis[i].style.display='none'})
    }
  }
    })
    } 
    myInput.value=""; 
  })


