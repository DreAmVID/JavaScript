let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {

	if (count < 10) {

	count++;
	CURRENT_NUMBER.innerHTML = count;
	negativo()
					}

	else { alert("Contador limitado até 10")
		}

}

function decrement() {

	if (count > -5) {
		
	count--;
	CURRENT_NUMBER.innerHTML = count;
	negativo()
	}

	else { alert ("Contador limitado somente ir até -5")
			}
}

document.getElementById("add").addEventListener("click", increment);

document.getElementById("remove").addEventListener("click", decrement);
	
function negativo() {
	
	if (count < 0) {

		CURRENT_NUMBER.style.color="#f00";
	}

	else CURRENT_NUMBER.style.color="#000000";
}

