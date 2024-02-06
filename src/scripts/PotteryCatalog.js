const potteryToSell = []

export const toSellOrNotToSell = (piece) => {
    if (piece.cracked === false) {
        if (piece.weight >= 6) {
            piece.price = 40
        } else {
            piece.price = 20
        }
        potteryToSell.push(piece)
    }
    return piece
}

export const usePottery = () => {
    let potteryArr = [...potteryToSell]
    return potteryArr
}