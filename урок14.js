/*
let n1='Ivan'
let n2='Max'
const  names = ['Oleg','Vlad','Dima','Pavel','Victor']
console.log(names.length)
console.log(names)
console.log(names[1])

$('#add').click(f1)
$('#search').click(f2)
$('#del').click(f3)

function f1() {
    let  name = $('#in1').val()
    names.push(name)
    $('#out').text(names)
}
function f2() {
    let  name = $('#in1').val()
    let index = names.indexOf(name)
    if (index==-1){
       $('#out').text('не найден')
    }
    else {
       $('#out').text(name+'под номером'+index)
    }
}
function f3() {
    let  name = $('#in1').val()
    names.pop()//удаляет последний элемент//shift удаляет первый элемент/
    $('#out').text(names)

function f3() {
    let  name = $('#in1').val()
    let index = names.indexOf(name)
    if (index==-1) {
        $('#out').text('не найден')
    }
    else {
        names.splice(index,1)
        $('#out').text(names)

 */
const array = []
console.log(array)
console.log(array.length)

$('#add').click(f1)
$('#delLast').click(f2)
$('#delFirst').click(f3)
$('#delReplay').click(f4)

function f1() {
    let but = +$('#in1').val()
    array.push(but)
    $('#out').text(array)
    $('#in1').val('')
}
function f2() {
    let but = +$('#in1').val()
    array.pop()
    $('#out').text(array)}

function f3() {
    let but = +$('#in1').val()
    array.shift()
    $('#out').text(array)}

function f4() {
    let but = +$('#in1').val()
    const uniqArray = array.filter((but,index)=>index===array.indexOf(but));
    $('#out').text(uniqArray)
    }


