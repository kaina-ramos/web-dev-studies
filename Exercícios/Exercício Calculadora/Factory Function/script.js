function criaCalculadora(){
    return{
        // Atributos
        display: document.querySelector('.display'),
        clearButton: document.querySelector('.clear'),
        
        // Métodos
        inicia(){
            this.clickButtons();
        },
        
        inputDisplay(text){
            this.display.value += text;
        },

        doOperation(){
            let conta = this.display.value;
            
            try {
            // Problemático em um cenário real. Esse método permite execução de código inserido externamente no código.
                conta = eval(conta);
                this.display.value = String(conta);

            } catch(error) {
                alert('Conta inválida');
                return;
            }
        },

        clickButtons(){
            document.addEventListener('click', (event) => {
                const clicado = event.target;
                
                if(clicado.classList.contains('symbol') || clicado.classList.contains('numeric')){
                    this.inputDisplay(clicado.innerText);
                }

                if(clicado.classList.contains('clear')){
                    this.clearDisplay();
                }

                if(clicado.classList.contains('erase')){
                    this.eraseChar();
                }

                if(clicado.classList.contains('equals')){
                    this.doOperation();
                }
            });
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        eraseChar(){
            this.display.value = this.display.value.slice(0, -1);
        },

        // pressEnter(){
        //     this.display.addEventListener('keyup', (event) => {
        //         if(event.keyCode === 13){
        //             this.doOperation();
        //         };
        //     });
        // },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();