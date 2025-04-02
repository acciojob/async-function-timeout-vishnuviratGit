//your JS code here. If required.
const textInput=document.getElementById("text");
const numberInput=document.getElementById("delay");
const btn=document.getElementById("btn");
const outputDiv=document.getElementById("output");
btn.addEventListener("click", display);
async function display() {
	  try{
		 let delay=parseInt(numberInput.value);
		  await new Promise(resolve=>{
			  setTimeout(resolve,delay);
		  });
		  dataDisplay(textInput.value);
	  }
	  catch(error){
		  console.log("Error occured", error);
	  }
}
function dataDisplay(data) {
	 outputDiv.innerHTML=`${data}`;
}