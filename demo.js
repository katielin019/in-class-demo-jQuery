$(document).ready(() => {

    let currentColor = 'white';

    $("#btnDemo").click(() => {
        if (currentColor === 'white') {
            currentColor = 'blue'
        } else {
            currentColor = 'white'
        }
    })

    $("#header").css('background-color', currentColor);
    // $('#header').text('Class Demo - ' + currentColor);
})

function test() {
    console.log("button works!")
}