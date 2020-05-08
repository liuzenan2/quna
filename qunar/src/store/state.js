let defaultCily = '上海'
try {
    if(localStorage.city) {
        defaultCily= localStorage.city
    }
} catch (e){

}

export default {
    city: defaultCily
}