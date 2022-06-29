<svelte:head>
    <link rel="stylesheet" href="/styles/jogo.css">
</svelte:head>
<script>

    let PrimeiroCard = false
    let SegundoCard = false

    let images = [
        {Class: 'card-frente', Src:'./images/alce-frente.png', Id:'alce'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/coruja-frente.png', Id:'coruja'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
        {Class: 'card-frente', Src:'./images/leao-frente.png', Id:'leao'},
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'},
        {Class: 'card-frente', Src:'./images/alce-frente.png', Id:'alce'},
        {Class: 'card-frente', Src:'./images/caveira-frente.png', Id:'caveira'},
        {Class: 'card-frente', Src:'./images/coruja-frente.png', Id:'coruja'},
        {Class: 'card-frente', Src:'./images/triangulo-frente.png', Id:'triangulo'},
        {Class: 'card-frente', Src:'./images/leao-frente.png', Id:'leao'},
        {Class: 'card-frente', Src:'./images/raposa-frente.png', Id:'raposa'}
        
        
    ];
    let MostrarFundo = false
    function MudarFundo(card){
        MostrarFundo = !MostrarFundo
        if(!PrimeiroCard){
            PrimeiroCard = this
            console.log("primeiro")
            console.log(PrimeiroCard.dataset.identificacao)
        }
        else{
            SegundoCard = this
            console.log("segundo")
            console.log(SegundoCard.dataset.identificacao)

            Verificar()
        }


        
    }
    function Verificar(){
        if (PrimeiroCard.dataset.identificacao === SegundoCard.dataset.identificacao) {
            console.log("iguais")
            console.log("----------------------------------")
            PrimeiroCard = false
            SegundoCard = false

            
        }else{
            console.log("não são iguais")
            console.log("----------------------------------")
            PrimeiroCard = false
            SegundoCard = false
        }
    }
 
    
    
    function misturarCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * 12);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
misturarCards(images)

</script>



<div class="game-display">

  {#each images as {Src,Id} }
        
    <div class="flip-card">
        <div on:click={MudarFundo} class="flip-card-inner" class:flip={MostrarFundo} data-identificacao={Id}>
            <div class="flip-card-front">
                <img src="./images/carta-costa.png" alt="card-costa">
            </div>
            <div class="flip-card-back">
                <img src={Src} alt={Id}>
            </div>
        </div>
    </div>
    {/each}
</div>