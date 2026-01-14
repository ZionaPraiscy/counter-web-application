let counter = document.getElementById("counterValue");

function onIncrement() {

    let prevCounter = counter.textContent;
    let updatedCounter = parseInt(prevCounter) + 1;
    counter.textContent = updatedCounter;
    counter.style.color = "green";
}

function onDecrement() {

    let prevCounter = counter.textContent;
    let updatedCounter = parseInt(prevCounter) - 1;
    counter.textContent = updatedCounter;
    if (updatedCounter > 0) {

        counter.style.color = "#77d968";
    } else if (updatedCounter === 0) {

        counter.style.color = "#0d754c";

    } else {

        counter.style.color = "#cfeb54";
    }


}

function onReset() {

    counter.textContent = 0;
    counter.style.color = "#0d754c";
}