let search = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector(".result");

searchBtn.addEventListener("click", () => {
  let searchVal = search.value;
  if (searchVal !== "") {
    let wikiUrl = ` https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchVal}`;
    fetch(wikiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = ``;
        data.query.search.forEach((items) => {
          let finalUrl = `
            https://en.wikipedia.org/?curid=${items.pageid}`;
          result.insertAdjacentHTML(
            `afterbegin`,
            `<div class="search-content">
          <a href="#" target="_blank" class="title">${items.title}</a>
          <a href="#" target="_blank" class="link">${finalUrl}</a>
          <p>${items.snippet}</p>
        </div>
        <hr />`
          );
        });
      });
  } else {
    alert("Type something");
  }
});
