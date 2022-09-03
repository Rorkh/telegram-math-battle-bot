function calculate() {
    let x = Number(document.getElementById("task_x").textContent);
    let op = String(document.getElementById("task_op").textContent);
    let y = Number(document.getElementById("task_y").textContent);

    // i can use eval but i will not

    if (op == "×") {
        return x * y;
    } else if (op == "+") {
        return x + y;
    } else if (op == "–") {
        return x - y;
    } else if (op == "/") {
        return x / y;
    }

    return false;
}

function answer() {
    let result = calculate()

    if (result == Number(document.getElementById("task_res").textContent)) {
        document.getElementById("button_correct").click();
        console.log("correct")
    } else {
        document.getElementById("button_wrong").click();
        console.log("uncorrect")
    }
}

setInterval(answer, 1000);
