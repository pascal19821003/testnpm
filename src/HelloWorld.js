/** 测试类 */
class HelloWorld {

    /** 
     * 在页面中显示hello world
     */
    say() {
        let div = document.createElement('div')

        div.innerHTML = 'hello world'

        document.body.appendChild(div)

    }
}