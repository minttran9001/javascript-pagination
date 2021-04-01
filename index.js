const ulTag = document.querySelector("ul");
let totalPages = 20;
function element(totalPages, page) {
  let liTag = "";
  let beforePages = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    //if page value is greater than 1  then show preview button
    liTag += `<li class="btn prev" onclick="element(totalPages,${page - 1})">
        <span>
          <i class="fas fa-angle-left"></i>
          Prev
        </span>
      </li>`;
  }
  if (page > 2) {
    liTag += `<li onclick="element(totalPages,1)" class="numb">
    <span>1</span>
  </li>`;
    if (page > 3) {
      liTag += `<li class="dots">
      <span>....</span>
    </li>`;
    }
  }
  //how many pages or li show before the current li tag
  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }
  //how many pages or li show after the current li tag
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }
  for (let pageLength = beforePages; pageLength <= afterPage; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    liTag += `<li onclick="element(totalPages,${pageLength})"  class="${
      page === pageLength ? "numb active" : "numb"
    }" >
    <span>${pageLength}</span>
  </li>`;
  }
  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li  class="dots">
      <span>....</span>
    </li>`;
    }
    liTag += `<li onclick="element(totalPages,totalPages - 1)" class="numb">
    <span>${totalPages}</span>
  </li>`;
  }
  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages,${page + 1})">
      <span>
        Next
        <i class="fas fa-angle-right"></i>
      </span>
    </li>`;
  }
  ulTag.innerHTML = liTag;
}
element(totalPages, 2); //calling above function passing values
