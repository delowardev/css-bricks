const Bricks = function (blocks = {}) {
    this.blocks = blocks
    this.display = document.querySelector('.main-display-inner')
    this.rows = this.display.querySelectorAll('.block-row')
    this.activeClass = 'active-block'
}

Bricks.prototype.run = function (blocks = {}) {
    this.blocks = blocks
    this.makeFill()
}

Bricks.prototype.makeEmpty = function () {
    const activeBlocks = this.display.querySelectorAll('span.active-block')
    for (let i = 0; i < activeBlocks.length; i++) {
        activeBlocks[i].classList.remove(this.activeClass)
    }
}

Bricks.prototype.makeFill = function () {
    this.makeEmpty()
    const keys = Object.keys(this.blocks)
    for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i]
        if (currentKey < 0 || currentKey > 19) {
            return false
        }
        const currentRow = this.rows[currentKey]
        const currentBlocks = this.blocks[currentKey]
        const currentItems = currentRow.querySelectorAll('span')

        if (Array.isArray(currentBlocks) && currentBlocks.length > 0) {
            for (let j = 0; j < currentBlocks.length; j++) {
                const currentBlock = currentBlocks[j]
                if (currentBlock < 0 || currentBlock > 9) {
                    return
                }
                currentItems[currentBlock].classList.add(this.activeClass)
            }
        } else if (currentBlocks === true) {
            for (let j = 0; j < currentItems.length; j++) {
                currentItems[j].classList.add(this.activeClass)
            }
        }
    }
}


const bricks = new Bricks()

let item = 0
setInterval(() => {
    if(item + 2 > 19) {
        item = 0;
    }
    let first = item
    let second = item + 1
    let third = item + 2
    bricks.run({
        [first]: [3],
        [second]: [3],
        [third]: [3]
    })
    item++

}, 300)

