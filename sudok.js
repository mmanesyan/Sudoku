let rows = [[],[],[],[],[],[],[],[],[]]
let columns =[[rows[0],[0]],[rows[0][1]],[rows[0][2]],[rows[0][3]],[rows[0][4]],[rows[0][5]],[rows[0][6]],[rows[0][7]],[rows[0][8]]]
let digits = [1,2,3,4,5,6,7,8,9]
function sort(array){

 
        array.map(num => num.sort((a) => Math.random()*a-(array.length-1)/2))

}

function findDigit (row, column, dig) {
    for(let i = 0; i<9;i++){
        let isInRow = row.find((elem)=> elem !==dig[i])
        let isInColumns = column.find((elem)=> elem !==dig[i])
        
        if(!isInColumns && !isInRow){
            return dig[i]
        } else {
            sort(digits)
            findDigit (row, column, dig)
        }
    }
}

let answer = false
function makeSudoku(){
    let digits = [1,2,3,4,5,6,7,8,9]
        sort(digits)
        rows[0] = [...digits]

    for(let i = 1; i < 9;i++){
            sort(digits)
            
            let number =rows[i]
            let column=[]
            for(let idx; idx<9;idx++){
                column[idx] = rows[idx][i]
            }
            number[i] = findDigit(rows,column,digits)
      
        
    
        }
 return rows
}
console.log(makeSudoku())