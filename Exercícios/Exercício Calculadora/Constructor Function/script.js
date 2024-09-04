function Calculadora() {
    // Variáveis
    this.display = document.querySelector('.display');
    
    // Métodos
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.capturaTeclado();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('numeric')) this.addDisplay(el);
            if (el.classList.contains('symbol')) this.addDisplay(el);
            if (el.classList.contains('clear')) this.clearDisplay();
            if (el.classList.contains('erase')) this.eraseDisplay();
            if (el.classList.contains('equals')) this.doOperation();
        });
    };

    this.capturaEnter = () => {
        document.addEventListener('keydown', event => {
            this.enterInput(event);
        })
    };

    this.capturaTeclado = () => {
        document.addEventListener('keydown', event => {
            let keyCode = event.key;            
            this.verifyKey(keyCode);
        })
    };

    this.doOperation = () => {
        let operation = this.display.value;
        try{
            operation = eval(operation);
            this.display.value = String(operation);
        }catch(error){
            alert('Conta inválida');
            return;
        }
    };

    this.verifyKey = keyPressed => {
        const symbols = ['(', ')', '/', '*', '.', '+', '-'];
        let mustPrint = false;
            for (let x in symbols) {
                if (keyPressed === symbols[x] || Number(keyPressed) <= 9) mustPrint = true;
            }
            if (mustPrint === true) this.display.value += keyPressed;
            if (keyPressed === 'Escape') this.clearDisplay();
            if (keyPressed === 'Backspace') this.eraseDisplay();
    };

    this.enterInput = elmnt => {
        if (elmnt.keyCode === 13) {
            elmnt.preventDefault();
            this.doOperation();
        }
    };
    
    this.addDisplay = elmnt => {
        this.display.value += elmnt.innerText;
    };

    this.eraseDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };
    
}

const calculadora = new Calculadora();
calculadora.inicia();