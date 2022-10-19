const item = document.querySelector(".item")
const placeholders = document.querySelectorAll('.placeholder')

const dragstart = (e) => {
    e.target.classList.add('hold')
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
}
const dragend = (e) => {
    e.target.classList.remove('hold', 'hide')
}

const dragOver = (e) => {
    e.preventDefault()
}
const dragEnter = (e) => {
    e.target.classList.add('hovered')
}
const dragLeave = (e)=> {
    e.target.classList.remove('hovered')

}
const dragDrop = (e) => {
    e.target.append(item)
    e.target.classList.remove('hovered')
}

item.addEventListener('dragstart', dragstart )
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop )
}

