let myLeads=[];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn")
const ulEl=document.querySelector("#ul-el");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        listItems+=`
        <li>
            <a target="_blank" href="https://${leads[i]}">
            ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML=listItems;
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})


//COMMENTS SECTION
// function clicked(){
//     console.log("Button clicked from onclick attribute.");
// }

//listItems+="<li><a target='_blank' href='https://"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
// let li=document.createElement("li");
// li.textContent=myLeads[i];
// ulEl.append(li);

//tabBtn.addEventListener("click",function(){
//     let newUrl = window.location.host + "/" + window.location.pathname + window.location.search;
//     myLeads.push(newUrl);
//     inputEl.value="";
//     localStorage.setItem("myLeads",JSON.stringify(myLeads));
//     render(myLeads);
// })