// 1 task
function findN(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let nearest;
    if(100 - num1 < 100 - num2 && 100-num1 < 100-num3){
        nearest = num1;
    }
    else if(100-num2 < 100-num1 && 100-num2 < 100-num3){
        nearest = num2;
    }
    else{
        nearest = num3;
    }
    document.getElementById('n').textContent = nearest;
}
function findF(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let farthest;
    if(100 - num1 > 100 - num2 && 100 - num1 > 100 - num3){
        farthest = num1;
    }
    else if (100 - num2 > 100 - num1 && 100 - num2 > 100 - num3){
        farthest = num2;
    }
    else{
        farthest = num3;
    }
    document.getElementById('f').textContent = farthest;
}

//2 task

function alphabet(){
    let text = document.getElementById('sentence').value;
    let words = text.split(" ");
    let sorted = words.map(word => word.split("").sort().join(""));
    let order = sorted.join(" ")
    document.getElementById('order').textContent = order;
}

//3 task

function firstNonRepeatedCharacter(){
    let str = document.getElementById('lol').value
    for(let char of str){
        if(str.indexOf(char)==str.lastIndexOf(char)){
            document.getElementById('res').textContent = char;
            return char;
        }
    }
    document.getElementById('res').textContent = 'No';
    return null;
}

//4 task
function replaceCharacters(){
    const input = document.getElementById('inputstr').value;
    let result = ' ';
    for(let char of input){
        if(/[a-zA-Z]/.test(char)){
            let newChar = String.fromCharCode(char.charCodeAt(0)+1);

            if(char=='z') newChar = 'a';
            if(char == 'Z') newChar = 'A';

            result += newChar;
        } else{
            document.getElementById('rs').textContent = ""
            result += char;
        }
    }

    document.getElementById('rs').innerText = result;

}

//5 task
function LongestAndShortest(){
    const word1 = document.getElementById('word1').value
    const word2 = document.getElementById('word2').value
    const word3 = document.getElementById('word3').value

    const words = [word1,word2,word3];

    const longestWord = words.reduce((a,b)=> a.length >= b.length ? a:b );
    const ShortestWord = words.reduce((a,b) => a.length <= b.length ? a:b);

    document.getElementById('furry').innerText = longestWord
    document.getElementById('zesty').innerHTML = ShortestWord
}

//6 task

function highlight(){
    const paragraph = document.querySelector('#pdd');
    paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => { 
        if(word.length > 7){
        return `<span style = "background-color: blue">${word}</span>`;
    } else if(word.length > 3 ) {
        return `<span style = "font-weight: bold">${word}</span>`;
    }
    return word;
})
    .join(' ');
}

//7 task

function replace(){
    const p = document.querySelector('#p'); 
        p.innerHTML = p.innerHTML
        .replace(/\?/g,'*')
        .replace(/\!/g,'@');

}

//8 task
function split(){
    const pp = document.querySelector('#pp');
    pp.innerHTML = pp.innerHTML
  .split(/([.!?])\s*/)
  .map(sentence => `<p>${sentence.trim()}</p>`)
  .join(' ');
}
//9 task
function countWords() {

    const paragraph = document.getElementById("ppp").innerText;
    const words = paragraph.trim().split(/\s+/);
    const wordCount = words.length;
    alert(wordCount);
}

//10 task
function highlightWords(){
    const paragraph = document.getElementById("lorem").innerText;
    const words = paragraph.split(/\s+/);
    const highlightedWords = words.map(word => {
     if (word.startsWith("a")) {
        return `<em>${word}</em>`;
    } else if (word.endsWith("y")) {
        return `<u>${word}</u>`; 
        }
        return word; 
         });

    const newParagraph = highlightedWords.join(" ");
    document.getElementById("lorem").innerHTML = newParagraph;
        }

//11 task
function calculateVolume(){
const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius) || radius <= 0) {
            alert("Please enter a valid radius.");
            return;
        }

        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('volume').value = volume.toFixed(4);
}

//12 task
function calculateCylinder(){
    const radius1 = parseFloat(document.getElementById('radius1').value);
    const height = parseFloat(document.getElementById('height').value);
    if(isNaN(radius1) || radious1 <=0 || isNaN(height) || height <= 0){
        alert("Please enter a valid radius");
        return;
    }

    const volume1 = Math.PI*Math.pow(radius1,2)*height;
    document.getElementById('volume1').value = volume1.toFixed(4);

}
//13 task