baseUrl = "https://picsum.photos/";
endUrl = "v2/list"

//! Finds first empty div on html
let section = document.querySelector('div');
section.setAttribute('class', 'section');


appRun=()=>{
  fetch(`${baseUrl}${endUrl}`)
  .then(function (result) {
    //* take our results and create a javascript object for us to manipulate
    return result.json()
  })
  .then(function (json) {
    //*Send our json results to the display function
    displayResults(json);
  });
  displayResults = (fetchedResults) => {
    for (each of fetchedResults) {
      console.log(fetchedResults)
      console.log(each)
      //* Create our main holding div for all the pieces to append to, and give it a class to target
      let divFrame = document.createElement('div');
      divFrame.setAttribute('class', 'divFrame');
      
      //* Make the h1 tag that will  have our href
      let authorTitle = document.createElement('h1');
      authorTitle.setAttribute('class', 'title');
      authorTitle.textContent = each.author
      //? Here is we set the h1 to open a new window on click to the author's google results. Our .replace changes all blank spaces to +
      authorTitle.onclick=function() {window.open(`http://www.google.com/search?q=${each.author.replace(" ", "+")}`)}
  
      //* need to create the img tag AND set the .src to the url we want
      let photoImage = document.createElement('img');
      photoImage.src = each.download_url;
      
      let photoUrl = document.createElement('a');
      photoUrl.textContent = each.url;
      photoUrl.setAttribute('class', 'url');
      //? We can also use href for a new window
      photoUrl.href = each.url;
      photoUrl.target = '_blank';

      //! Inspect the elements window to see how this builds out
      section.appendChild(divFrame);
      divFrame.appendChild(authorTitle);
      divFrame.appendChild(photoImage);
      divFrame.appendChild(photoUrl);
    }
  }
}

function textColor() {
  for (each of document.getElementsByClassName('title')) {
      each.style.color=document.getElementById('colorInput').value;
  }
}

function yourButton() {
  //? What should you make it do?
}