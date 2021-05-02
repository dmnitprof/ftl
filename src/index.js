/*=======================================================================================*/
/*Import Styles css*/
/*=======================================================================================*/
import './styles.scss'

/*=================================================================================*/
/*Event Checkbox*/
/*=================================================================================*/
const checkbox__input = document.querySelector('#checkbox__input')
const temperature = document.querySelector('#temperature')
checkbox__input.addEventListener('click', function () {
    checkbox__input.checked
        ? temperature.style.display = 'flex'
        : temperature.style.display = 'none'
})

/*===========================================================================*/
/*Custom Select*/
/*===========================================================================*/
let x, j, selElmnt, a, b, c
x = document.getElementsByClassName("custom-select")
for (let i = 0; i < x.length; i++) {
    selElmnt = x[i].querySelectorAll("select")[0]
    a = document.createElement("DIV")
    a.setAttribute("class", "select-selected")
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
    x[i].appendChild(a)
    b = document.createElement("DIV")
    b.setAttribute("class", "select-items select-hide")
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV")
        c.innerHTML = selElmnt.options[j].innerHTML

        c.addEventListener("click", function (e) {
            let y, s, h
            s = this.parentNode.parentNode.querySelectorAll("select")[0]
            h = this.parentNode.previousSibling;
            for (let i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML === this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.querySelectorAll(".same-as-selected");
                    for (let k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class")
                    }
                    this.setAttribute("class", "same-as-selected")
                    break;
                }
            }
            h.click()
        });
        b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener("click", function (e) {
        e.stopPropagation()
        closeAllSelect(this)
        this.nextSibling.classList.toggle("select-hide")
        this.classList.toggle("select-arrow-active")
    });
}

function closeAllSelect(elmnt) {
    let arrNo = []
    let x = document.getElementsByClassName("select-items")
    let y = document.getElementsByClassName("select-selected")
    for (let i = 0; i < y.length; i++) {
        if (elmnt === y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active")
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide")
        }
    }
}

document.addEventListener("click", closeAllSelect)
