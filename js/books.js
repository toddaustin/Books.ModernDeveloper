
var sb = document.getElementById('searchBooks');

sb.addEventListener("click", searchText);

var titleSearch = {};

function searchText() {
    var sbt = document.getElementById('searchBooksTerm').value;
    if (!validator.isEmpty(sbt)) {
        titleSearch["search"] = sbt;
       console.log(sbt);
   }
}  


var si = document.getElementsByClassName('searchInside');

for (var i = 0; i < si.length; i++) {
    si[i].addEventListener("change", searchInside);
}

var insideSearch = {};

function searchInside() {
    var sbi = this.value;
    if (!validator.isEmpty(sbi)) {
        insideSearch["search"] = sbi;
       console.log(sbi);
   }
}  