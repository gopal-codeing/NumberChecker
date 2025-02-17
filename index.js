 function checkNumber() {
            const input = document.getElementById('numberInput').value;
            const message = document.getElementById('message');
            const output = document.getElementById('output');
            const num = parseInt(input);
            
            if (isNaN(num)) {
                message.textContent = "";
                output.textContent = "";
                return;
            }
            
            if (num < 0) {
                message.textContent = "Enter a positive value";
                output.textContent = "";
            } else {
                message.textContent = "";
                let nextNumbers = [];
                
                for (let i = 1; i <= 3; i++) {
                    nextNumbers.push(num + (i * 2));
                }
                
                output.textContent = `Next three numbers: ${nextNumbers.join(', ')}`;
            }
        }
