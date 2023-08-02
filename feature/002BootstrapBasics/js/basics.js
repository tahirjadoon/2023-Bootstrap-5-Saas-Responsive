function getLastPartUrl(url) {
    const parts = url.split('/');
    return parts.at(-1);
}
  
function fetchPageName() {
    var pageName = getLastPartUrl(window.location.href);
    if (pageName)
        pageName = pageName.replace(".html", "");
    return pageName;
}

function applyFormsNavActiveClass() {
    var pageName = fetchPageName();
    if (!pageName) return;

    var item = document.getElementById(pageName);
    if (item == null || item == undefined) return;

    item.classList.add("list-group-item-warning");
    
}
