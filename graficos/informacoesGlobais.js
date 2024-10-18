const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graicos-container_texto')
        paragrafo.innerHTML = 'você sabia que o muno tem ${dados.total_pessoas_mundo} de pessoas e aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.'

        const container = document.getElementById('graicos-container')
        container.appendChild(paragrafo)

    }

    visualizarInformacoesGlobais()
