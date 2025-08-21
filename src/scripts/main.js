AOS.init(); // Inicializa AOS (Animate On Scroll)

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() { // Atualiza a contagem a cada segundo
    const agora = new Date(); // Data atual
    const timeStampAtual = agora.getTime(); // Timestamp atual

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // Diferença entre a data do evento e a data atual

    //Variavéis de substituição
    const diasEmMs = 1000 * 60 * 60 * 24; // Milissegundos em um dia
    const horasEmMs = 1000 * 60 * 60; // Milissegundos em uma hora
    const minutosEmMs = 1000 * 60; // Milissegundos em um minuto
    const segEmMs = 1000; // Milissegundos em um segundo

    // Cálculos para dias, horas, minutos e segundos restantes
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs); // Calcula os dias restantes
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diasEmMs / horasEmMs); // Calcula as horas restantes //a % retorna o resto da divisão
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasEmMs / minutosEmMs); // Calcula os minutos restantes
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / segEmMs); // Calcula os segundos restantes

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; // Atualiza o contador no HTML

    if (distanciaAteOEvento < 0) { // Verifica se o evento já ocorreu
        clearInterval(contaAsHoras); // Para o contador
        document.getElementById('contador').innerHTML = "!!!O evento já ocorreu!!!"; // Mensagem de evento ocorrido
    }
}, 1000);