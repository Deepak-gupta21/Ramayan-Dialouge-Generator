let newObjData = {};

const dailougeContainer=document.querySelector(".dialouge-container");
const pTag1=document.querySelector(".dialouge");
const pTag2=document.querySelector(".says");

fetch('ramayan.json')
  .then(response => response.json())
  .then(data => {
    // GetCharecter(data);
    newObjData={...data};
  })
  .catch(error => console.error(error));

//  function GetCharecter(data){
//     Object.keys(data).forEach(function(key) {
//         console.log(key + ": " + data[key]);
//       });
//  }


 function getRandomQuote(newObjData) {
    const quoteKeys = Object.keys(newObjData); 
    //to get all the keys of the object-data.
  
    const randomKey = quoteKeys[Math.floor(Math.random() * quoteKeys.length)];
    // to select a randon key.

    return {
        quote: newObjData[randomKey],
        speaker: randomKey,
      };
    
  }
  
function displayRandomQuote(){
    
        dailougeContainer.innerHTML=" ";
        const { quote, speaker } = getRandomQuote(newObjData);

        
        const speakerHtml = `<p class="says"><span class="speaker-name">- ${speaker}</span></p>`;
        const quoteHtml = `<p class="dialouge">"${quote}"</p>`;

        dailougeContainer.innerHTML = `${quoteHtml}${speakerHtml}`;
      
}



  