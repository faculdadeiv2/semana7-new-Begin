const nome = document.querySelector('#name');
const monsterType = document.querySelector('#monster');
const protType = document.querySelector('#esp');
const armamento = document.querySelector('#arma');
const local = document.querySelector('#local');
const acidente = document.querySelector('#acidente');
var backImages = []

function makeHistory() {
    var valueNome = nome.value;
    var valueMonsterType = monsterType.value;
    var valueProtType = protType.value;
    var valueArmamento = armamento.value;
    var valueLocal = local.value;
    var valueAcidente = acidente.value;
   

    var randomMoves = ['dançar break', 'passear no parque', 'jogar videogame', 'comer feijoada']
    var random = Math.floor(Math.random() * randomMoves.length);
    if(random == 0){
        random = 1;
    }

    var monsterTypeCase;
    var protTypeCase;
    var armaCase;
    var localCase;
    var subLocalCase;
    var acidenteCase;
    var randomMovesCase;
    backImages = []
    var endingPhrase;
    const data = new Date();
    const ano = data.getFullYear();

    switch (valueMonsterType) {
        case 'zumbis':
            monsterTypeCase = 'Zumbis'
            randomMovesCase = randomMoves[random];
            backImages.push('https://i.pinimg.com/originals/66/b7/b5/66b7b54bc106aa6f64a436b99121a877.jpg')
            backImages.push('https://s1.1zoom.me/b5050/117/342078-blackangel_1920x1080.jpg');
            backImages.push('https://i.pinimg.com/originals/eb/21/37/eb213700250bfa06ffecc1adc782ae50.jpg');
            backImages.push('https://acrediteounao.com/wp-content/uploads/2017/01/resident-evil-wallpaper-zombie-images-1920x1080.jpg');
            break;
        case 'dragon':
            monsterTypeCase = 'Dragões'
            randomMovesCase = randomMoves[random];
            backImages.push('https://wallpapercave.com/wp/oUm9o3o.jpg');
            backImages.push('https://wallpaperaccess.com/full/143033.jpg');
            backImages.push('https://images7.alphacoders.com/441/thumb-1920-441584.jpg');
            backImages.push('https://i.redd.it/h3c3mc7kit751.jpg');
            break;
        case 'minotauros':
            monsterTypeCase = 'Minotauros'
            randomMovesCase = randomMoves[random];
            backImages.push('https://wallpaperaccess.com/full/2470828.jpg');
            backImages.push('https://images.alphacoders.com/269/thumb-1920-269473.jpg');
            backImages.push('https://wallpaperaccess.com/full/2471058.jpg');
            backImages.push('https://static.wikia.nocookie.net/assassinscreed/images/a/aa/ACOD_Minotaur.png/revision/latest?cb=20190202052336');
            break;
        case 'bruxas':
            monsterTypeCase = 'Zumbis'
            randomMovesCase = randomMoves[random];
            backImages.push('https://images.hdqwalls.com/download/raven-witch-4k-vy-1920x1080.jpg');
            backImages.push('https://www.tomswallpapers.com/pic/201503/1920x1080/tomswallpapers.com-23474.jpg');
            backImages.push('http://www.fundoswiki.com/Uploads/fundoswiki.com/Resolucoes/3060-1920x1080.jpg');
            backImages.push('https://images3.alphacoders.com/164/thumb-1920-164217.jpg');
            break;
    }
    switch (valueProtType) {
        case 'golf':
            protTypeCase = 'golfinho'
            break;
        case 'ogro':
            protTypeCase = 'ogro'
            break;

        case 'dino':
            protTypeCase = 'dinossauro'
            break;

        case 'human':
            protTypeCase = 'humano'
            break;

    }
    switch (valueArmamento) {
        case 'varinha':
            armaCase = 'Varinha'
            endingPhrase = `ferramenta que utilizou por décadas no combate destes ${monsterTypeCase}, até que um dia aprendeu uma magia capaz de trazer os ${monsterTypeCase} de volta a sanidade mental, esses por sua vez não esqueceram como ${randomMovesCase}`
            break;
        case 'motossserra':
            armaCase = 'motosserra'
            endingPhrase = `ferramenta que utilizou por décadas no combate destes ${monsterTypeCase}, até que em determinado momento conseguiu cortar todos eles, desta maneira eles nunca mais foram capaz de ${randomMovesCase}`;
            break

        case 'chicote':
            armaCase = 'chicote';
            endingPhrase = `ferramenta que utilizou por décadas no combate destes ${monsterTypeCase}, até que um dia conseguiu chicoteá-los até um precipício, após isso ficou totalmente proibido ${randomMovesCase}`;
            break
        case 'ball':
            armaCase = 'bola de futebol'
            endingPhrase = `ferramenta que utilizou por décadas no combate deste ${monsterTypeCase}, até que um dia conseguiu driblar todos eles, dando fim ao reinado deste ${monsterTypeCase} e ficando livre de ${randomMovesCase}`;
            break
    }

    switch (valueLocal) {
        case 'dw':
            localCase = 'Disney World';
            subLocalCase = `submundo da ${localCase} uma ${armaCase}`;
            break;

        case 'jundiai':
            localCase = 'Jundiaí';
            subLocalCase = `São Camilo, onde nenhum jundiaiense se propõe a chegar uma ${armaCase}`
            break;

        case 'lua':
            localCase = 'Lua'
            subLocalCase = `lado escuro da ${localCase} uma ${armaCase}`
            break;
        case 'konoha':
            localCase = 'Konoha'
            subLocalCase = `esconderijo da Akatsuki uma ${armaCase}`
            break;

    }
    switch (valueAcidente) {
        case 'fn':
            acidenteCase = 'fissura nuclear'
            break
        case 'aa':
            acidenteCase = 'ascensão da Anitta'
            break
        case 'ag':
            acidenteCase = 'aquecimento global'
            break
        case 'ip':
            acidenteCase = 'inversão dos polos'
            break
    }

    var txt = `Era uma vez um lugar chamado ${localCase}, havia lá um habitante que se chamava ${valueNome}, era um ${protTypeCase} muito alegre, até que foi chegada a era dos ${monsterTypeCase}, que foi causada em ${ano} por ${acidenteCase} que fazia com que os humanos se tornassem ${monsterTypeCase}, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${protTypeCase} e ${randomMovesCase}. O ${protTypeCase} se viu obrigado a aprender têcnicas de combate aprimoradas. até que encontrou no ${subLocalCase}, ${endingPhrase}... Fim`
    var i = 0;
    var speed = 100;

    var div = document.createElement('div')
    div.setAttribute('class', 'pDiv')
    div.style.color = 'white';
    document.body.appendChild(div)
    

    document.body.style.backgroundImage = `url('${backImages[1]}')`;


    function typeWriter(){
        if(i < txt.length){
            div.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed)
        }
    }
    typeWriter()

    

    function changeBG(){
        var randomBack = Math.floor(Math.random() * backImages.length);
        if(randomBack == 0){
            randomBack = 1;
        }
        document.body.style.backgroundImage = `url('${backImages[randomBack]}')`;
        console.log(backImages[randomBack]);
    }
    

    setInterval(changeBG, 3500);

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat'
   
    

    document.body.innerHTML = '';
    document.body.appendChild(div);
}

