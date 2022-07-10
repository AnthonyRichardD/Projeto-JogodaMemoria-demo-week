<svelte:head>
    <link rel="stylesheet" href="./styles/sobre.css">
</svelte:head>
<script>
    import MenuBotao from './Botoes/MenuBotao.svelte';
    function flip1() {
        if(!aluno1){
            aluno1 = this
            aluno1.classList.add('flipar')
        }
        else if(!aluno2){
            aluno1 = this
            aluno1.classList.add('flipar')
        }        
        else if(!aluno3){
            aluno1 = this
            aluno1.classList.add('flipar')
        }        
        else if(!aluno4){
            aluno1 = this
            aluno1.classList.add('flipar')
        }
    }
    let aluno1
    let aluno2
    let aluno3
    let aluno4
</script>

<div class="SobreCont">
    <div class="titulo">
        <MenuBotao />
        <h1 >ESTUDANTES</h1>
    </div>
    <div class="alunos">
        <div on:click={flip1} class="alunocard">
            <div class="alunofrente">
                <h2 class="social">Social</h2>
                <div class="info">
                    <img src="/images/git.png" alt="github-logo"><a href="https://github.com/aR1ch4rdz" target="_blank">aR1ch4rdz</a>
                </div>
                <div class="nome">
                    <h1>Anthony</h1>
                </div>
            </div>
            <div class="AlunoFundo">Anthony Richard</div>
            
        </div>
        <div on:click={flip1} class="alunocard">
            <div class="alunofrente">
                <h2 class="social">Social</h2>
                <div class="info">
                    <img src="/images/git.png" alt="github-logo"><a href="https://github.com/Arluzss" target="_blank">Arluzss</a>
                </div>
                <din class="nome">
                    <h1>Arley</h1>
                </din>
            </div>
            <div class="AlunoFundo">Arley Nunes</div>
            
        </div>
        <div on:click={flip1} class="alunocard">
            <div class="alunofrente">
                <h2 class="social">Social</h2>
                <div class="info">
                    <img src="/images/git.png" alt="github-logo"><a href="https://github.com/Eri123silva2" target="_blank">Eri123silva2</a>
                </div>
                <div class="nome">
                    <h1>Erick</h1>
                </div>
            </div>
            <div class="AlunoFundo">Erick Silva</div>
            
        </div>
        <div on:click={flip1} class="alunocard">
            <div class="alunofrente">
                <h2 class="social">Social</h2>
                <div class="info">
                    ??????????????????????
                </div>
                <din class="nome">
                    <h1>Fabio</h1>
                </din>
                
            </div>
            <div class="AlunoFundo">Fabio Rodrigues</div>

        </div>

    </div>
</div>
