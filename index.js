let requested = []

const menuBtn = document.querySelectorAll('.menu button')
const listContainer = document.querySelector('.task .list-container')
const total = document.querySelector('.total .right span')
const sendBtn = document.querySelector('.send-btn')

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        requested.push(btn.value)
        updateArray(btn)
    })
});

sendBtn.addEventListener('click', () => {
    requested.splice(0, requested.length)
    updateArray()
})

function updateArray() {
    let listsDom = ''
    let price = 0
    let sum = 0
    const filterArray = uniq(requested)

    for(let i = 0; i < filterArray.length; i++) {

        if(filterArray[i] == 'Wash Car') {
            price = 10
        } else if(filterArray[i] == 'Mow Lawn') {
            price = 20
        } else {
            price = 30
        }

        sum += price

        listsDom += `
            <div class="list">
                <div class="left">
                    <h1>${filterArray[i]}</h1>
                    <button class="remove-btn">remove</button>
                </div>
                <p><span>$</span>${price}</p>
            </div>
        `
    }
    total.textContent = sum
    listContainer.innerHTML = listsDom

    const removeBtn = document.querySelectorAll('.remove-btn')
    removeBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            const value = e.currentTarget.previousSibling.previousSibling.textContent
            requested = requested.filter(item => item !== value)
            updateArray()
        })
    })
}

function uniq(requested) {
    return Array.from(new Set(requested));
}


