let numbers = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]
let newNumbers = []

function sort(array){

 
    array.map(num => num.sort((a) => Math.random()*a-(array.length-1)/2))

}

let answer = false

function makeSudoku(){
    
    sort(numbers)
   as: while(answer){
        sort(numbers)
    switch (numbers[0][0]){
        
        case numbers[1][0]:
            
            continue as
            case numbers[2][0]:
       
            continue as
            case numbers[3][0]:
             
            continue as
            case numbers[4][0]:
             
            continue as
            case numbers[5][0]:
             
            continue as
            case numbers[6][0]:
             
            continue as
            case numbers[7][0]:
             
            continue as
            case numbers[8][0]:
             
            continue as
    }

    switch (numbers[0][1]){
        case numbers[1][1]:
             
            continue as
            case numbers[2][1]:
             
            continue as
            case numbers[3][1]:
             
            continue as
            case numbers[4][1]:
             
            continue as
            case numbers[5][1]:
             
            continue as
            case numbers[6][1]:
             
            continue as
            case numbers[7][1]:
             
            continue as
            case numbers[8][1]:
             
            continue as
    }

    switch (numbers[0][2]){
        case numbers[1][2]:
             
            continue as
            case numbers[2][2]:
             
            continue as
            case numbers[3][2]:
             
            continue as
            case numbers[4][2]:
             
            continue as
            case numbers[5][2]:
             
            continue as
            case numbers[6][2]:
             
            continue as
            case numbers[7][2]:
             
            continue as
            case numbers[8][2]:
             
            continue as
    }

    switch (numbers[0][3]){
        case numbers[1][3]:
             
            continue as
            case numbers[2][3]:
             
            continue as
            case numbers[3][3]:
             
            continue as
            case numbers[4][3]:
             
            continue as
            case numbers[5][3]:
             
            continue as
            case numbers[6][3]:
             
            continue as
            case numbers[7][3]:
             
            continue as
            case numbers[8][3]:
             
            continue as
    }

    switch (numbers[0][4]){
        case numbers[1][4]:
             
            continue as
            case numbers[2][4]:
             
            continue as
            case numbers[3][4]:
             
            continue as
            case numbers[4][4]:
             
            continue as
            case numbers[5][4]:
             
            continue as
            case numbers[6][4]:
             
            continue as
            case numbers[7][4]:
             
            continue as
            case numbers[8][4]:
             
            continue as
    }

    switch (numbers[0][5]){
        case numbers[1][0]:
             
            continue as
            case numbers[2][5]:
             
            continue as
            case numbers[3][5]:
             
            continue as
            case numbers[4][5]:
             
            continue as
            case numbers[5][5]:
             
            continue as
            case numbers[6][5]:
             
            continue as
            case numbers[7][5]:
             
            continue as
            case numbers[8][5]:
             
            continue as
    }

    switch (numbers[0][6]){
        case numbers[1][6]:
             
            continue as
            case numbers[2][6]:
             
            continue as
            case numbers[3][6]:
             
            continue as
            case numbers[4][6]:
             
            continue as
            case numbers[5][6]:
             
            continue as
            case numbers[6][6]:
             
            continue as
            case numbers[7][6]:
             
            continue as
            case numbers[8][6]:
             
            continue as
    }

    switch (numbers[0][7]){
        case numbers[1][7]:
             
            continue as
            case numbers[2][7]:
             
            continue as
            case numbers[3][7]:
             
            continue as
            case numbers[4][7]:
             
            continue as
            case numbers[5][7]:
             
            continue as
            case numbers[6][7]:
             
            continue as
            case numbers[7][7]:
             
            continue as
            case numbers[8][7]:
             
            continue as
    }

   
     answer = true

    }

    return numbers
}

console.log(makeSudoku())