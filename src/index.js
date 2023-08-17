module.exports = function check(str, bracketsConfig) {
  if (str.length < 2) {
    return false
  } else {
    let pattern = ''
    let stack = []
    for (let i of bracketsConfig) {
      for (let q of i) {
        pattern += q
      }
    }
    console.log(pattern)
    
    for (let char of str) {
              let index = pattern.indexOf(char)
              if (index % 2 === 0) {
                  if (char === pattern[index + 1] && stack[stack.length - 1] === index){
                      stack.pop();
                  } else if (char === pattern[index + 1] && stack[stack.length - 1] !== index) {
                      stack.push(index)
                  }
                  else{
                      stack.push(index)
                  }
              } 
              else {
                  if (stack.pop() !== index-1){
                      return false;
                  }
              }
          console.log(stack)
          }
          return stack.length === 0
  }
  }



// version 1 - passed 9/ failing 11
// console.log(`this is ${str} and this is ${bracketsConfig}`)
// if ((str.length != 0) && (str.length % 2 == 0)) {
//   let staging = []
//   let reverseStaging = []
//   let output = ''

//   for (let i = 0; i < bracketsConfig.length; i++) {
//     staging = staging.concat(bracketsConfig[i][0])
//     reverseStaging = reverseStaging.concat(bracketsConfig[i][1])
//     output = (staging.join('') + reverseStaging.reverse().join(''))
//   }
//   return (str == output)
// }

//v2 failed 
// function check(str, bracketsConfig) {
//   let openStack = [].join('')
//   let closeStack = [].join('')
//   let out = ''
//   // detect patterns
//   for (let i = 0; i < bracketsConfig.length; i++) {
//     openStack = openStack.concat(bracketsConfig[i][0])
//     closeStack = closeStack.concat(bracketsConfig[i][1])
    
//     }
//   console.log(openStack)
//   console.log(`${closeStack} are closers`)
//   // определяю последовательность строки и разбиваю на блоки
//   for (let itter = 0; itter < str.length; itter++){
//     if ((openStack.includes(str[itter])) && (openStack.includes(str[itter+1]))){
//       out = out + str[itter]
//       console.log(`this is out ${out} if1`)
//     } else if ((openStack.includes(str[itter])) && (!openStack.includes(str[itter+1]))) {
//       out = out + str[itter] + ','
//       console.log(`this is out ${out} if2`)
//     } else if ((closeStack.includes(str[itter])) && (closeStack.includes(str[itter+1]))){
//       out = out + str[itter]
//       console.log(`this is out ${out} if3`)
//     } else {
//       out = out + str[itter]
//       if (itter != str.length - 1) {
//         out += ','
//       }
//       console.log(`this is out ${out} if4`)
//     }
//   }
//   console.log(`OUT is here ${out}`)
//   out = out.split(',')
//   // а теперь применяем towel алгоритм из другого задания
//   let output = ''
//   // делаем проверку на пустой массив
//   if (out == undefined) {
//     return []
//   } else {
//     for (let i = 0; i < out.length; i++) {
//       // перебираем массив с массивами
//       // если у нас индексы 0,2,4,6...оставляем как есть
//       if (i % 2 === 0) {
//         // добавляем в общий массив
//         output = output.concat(out[i])
//         if (i != out.length-1) {
//           output += ','
//         }
//         // если индексы 1,3,5...
//       } else {
//         // добавляем в массив, только сделав реверс
//         output = output.concat(out[i].split('').reverse().join(''))
//         if (i != out.length-1) {
//           output += ','
//         }
//       }
//     }
//   }
//   output = output.split(',')
  
  
//   return output
//   }
  


// let x = '([{}])()'
// let y = [['(', ')'],['[',']'],['{','}']]

// console.log(check(x,y))
