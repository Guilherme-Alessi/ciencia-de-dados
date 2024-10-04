const url = 'https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/tree/Aula01/esportes'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);

    }

    visualizarInformacoesGlobais()
