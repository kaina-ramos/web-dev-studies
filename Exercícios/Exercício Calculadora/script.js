function criaCalculadora(){
    return{
        // Atributos
        display: document.querySelector('.display'),
        clearButton: document.querySelector('.clear'),
        
        // Métodos
        inicia(){
            this.clickBotoes();
        },
        
        inputDisplay(text){
            this.display.value += text;
        },

        clickBotoes(){
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
            });
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        eraseChar(){
            this.display.value = this.display.value.slice(0, -1);
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();