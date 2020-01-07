"use strict"

/**
 * 
 * @param {*} blocks 
 */

const activeClass = 'active-block'

const makeBlockEmpty = function() {
    const blocks = document.querySelectorAll('.main-display-inner span.active-block')
    for(let i = 0; i < blocks.length; i++){
        blocks[i].classList.remove(activeClass)
    }
}

const makeBlockFill = function(blocks = {}) {
    const keys = Object.keys(blocks)
    if (typeof blocks !== 'object' && blocks === null) {
        return false
    }
    makeBlockEmpty()
    const display = document.querySelector('.main-display-inner')
    const rows = display.querySelectorAll('.block-row')
    
    for(let i = 0; i < keys.length; i++){
        const currentKey = keys[i]
        if (currentKey < 0 || currentKey > 19) {
            return false
        }
        const currentRow = rows[currentKey]
        const currentBlocks = blocks[currentKey]
        const currentItems = currentRow.querySelectorAll('span')

        if (Array.isArray(currentBlocks) && currentBlocks.length > 0){
            for(let j = 0; j < currentBlocks.length; j++) {
                const currentBlock = currentBlocks[j]
                if (currentBlock < 0 || currentBlock > 9) {
                    return
                }
                currentItems[currentBlock].classList.add(activeClass)
            }
        }else if (currentBlocks === true){
            for (let j = 0; j < currentItems.length; j++){
                currentItems[j].classList.add(activeClass)
            }
        }
    }
}

const makeGameOverAnimation = function() {

}

const makePlane = function(move = [2, 3]) {

}

const fill1 = {
    0: [0, 9],
    1: [0, 9],
    3: [0, 9],
    4: [0, 9],
    6: [0, 9],
    7: [0, 9],
    9: [0, 9],
    10: [0, 9],
    12: [0, 9],
    13: [0, 9],
    15: [0, 9],
    16: [0, 9],
    18: [0, 9],
    19: [0, 9],
}
const fill2 = {
    1: [0, 9],
    2: [0, 9],
    4: [0, 9],
    5: [0, 9],
    7: [0, 9],
    8: [0, 9],
    10: [0, 9],
    11: [0, 9],
    13: [0, 9],
    14: [0, 9],
    16: [0, 9],
    17: [0, 9],
    19: [0, 9]
}


let item = 1
setInterval(() => {
    if (item === 1) {
        makeBlockFill(fill1)
        item = 2
    } else {
        makeBlockFill(fill2)
        item = 1
    }
}, 300)