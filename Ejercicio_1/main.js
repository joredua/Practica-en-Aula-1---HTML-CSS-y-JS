
function solution(number) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    for (let i = 1; i <= number; i++) {
        let output = '';

        if (i % 3 === 0) {
            output += 'Fizz ';
        }

        if (i % 5 === 0) {
            output += 'Buzz ';
        }

      
        if (output === '') {
            output = i;
        }

       
        const p = document.createElement('p');
        p.textContent = output;
        resultDiv.appendChild(p);
    }
}

function eventHandler(event) {
    event.preventDefault();
    let number = document.getElementById("number").value;
    solution(number);
}

