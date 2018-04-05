document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  //Create an XHR Object
  const xhr = new XMLHttpRequest();
  // console.log('ReadyState:', xhr.readyState);

  //Open
  xhr.open('GET','data.txt',true);
  // console.log('ReadyState:', xhr.readyState);

  //Optional-Used for spinners/loaders
  xhr.onprogress=function(){
    console.log('ReadyState:', xhr.readyState);//3
  }

  //Newer
  xhr.onload=function(){
    console.log('ReadyState:', xhr.readyState); //Already at 4 
    if(this.status===200){
      // console.log(this.responseText);
      document.getElementById('output').innerHTML=`<h1>${this.responseText}</h2>`;
    }
  }

  //If Something Goes Wrong
  xhr.onerror=function(){
    console.log('Request Error');
  }

  //Older
  // xhr.onreadystatechange = function(){
  //   console.log('ReadyState:', xhr.readyState); //Goes through 2,3 and4
  //   if (this.status===200 && this.readyState===4){
  //     console.log(this.responseText);
  //   } 
  // }
  

  xhr.send();

  //readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  //   200:"OK"
  //   403:"Forbidden"
  //   404:"Not Found"
}