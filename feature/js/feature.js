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

function applySectionNavActiveClass() {
    var pageName = fetchPageName();
    if (!pageName) return;

    var item = document.getElementById(pageName);
    if (item == null || item == undefined) return;

    item.classList.add("list-group-item-warning");
    
}

function applyFormValidationOnSubmit(formClass) {
    if (formClass == undefined || formClass == null)
        return;
    
    var forms = document.querySelectorAll(formClass);
    if (forms == null || forms == undefined || forms.length <= 0) {
        alert(`No forms available with class ${formClass}`);
        return;
    }

    Array.prototype.slice(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
          
                form.classList.add('was-validated');
            }, false)
        });
}
