document.addEventListener('click', () => {
    setTimeout(() => {
        console.log('hello after 3 seconds');
    }, 3000);
})

console.log("This is my practice work that i'm performing");
//adding more data from practice branch

//this data is now in main branch
//hello from practice
function counter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}
const add= counter();
add();
add();
add()
