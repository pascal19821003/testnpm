/** 测试类 */
// class HelloWorld {

//     /** 
//      * 在页面中显示hello world dddd
//      */
//     say() {
//         let div = document.createElement('div')

//         div.innerHTML = 'hello world'

//         document.body.appendChild(div)

//     }

//     myDo(){
//         return "hahaha"
//     }
// }
// let hw = new HelloWorld()
// console.log("hw", hw.myDo())

export function hello(){
    return "hello world!"
}

export function max(num1, numb2){
    if(num1>numb2){
        return num1
    }else{
        return numb2
    }
}