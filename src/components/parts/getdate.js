function getToday() {
    var date = new Date()
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    date = `${year}/${month}/${day}`

    return date
}

function getSelectTodoDate(todayOrOtherday) {
    console.log(todayOrOtherday)
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if(!todayOrOtherday) { return date = `${year}/${month}/${day + 1}` }
    return date = `${year}/${month}/${day}`
}

export default {
    getToday,
    getSelectTodoDate,
}