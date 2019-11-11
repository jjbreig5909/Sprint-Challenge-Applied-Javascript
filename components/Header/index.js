// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const siteHeader = document.createElement('div');
    const siteDate = document.createElement('span');
    const siteTitle=document.createElement('h1');
    const siteTemp=document.createElement('span');

    siteDate.textContent="MARCH 28, 2019";
    siteTitle.textContent='Lambda Times';
    siteTemp.textContent ='98°';

    siteHeader.classList.add('header');
    siteDate.classList.add('date');
    siteTemp.classList.add('temp');

    siteHeader.appendChild(siteDate);
    siteHeader.appendChild(siteTitle);
    siteHeader.appendChild(siteTemp);

    return siteHeader;
}

headerLocation=document.querySelector(".header-container");

headerLocation.appendChild(Header());