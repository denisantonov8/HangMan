const думи = ['ябълка', 'банан', 'портокал', 'грозде', 'домат']; // Примерен списък с думи на български език

let избранаДума = '';
let дисплейНаДумата = [];
let познатиБукви = [];
let оставащиОпити = 6;

function избериДума() {
  избранаДума = думи[Math.floor(Math.random() * думи.length)];
  дисплейНаДумата = избранаДума.split('').map(буква => '_');
}

function актуализирайДисплея() {
  document.getElementById('word-display').textContent = дисплейНаДумата.join(' ');
  document.getElementById('letters-guessed').textContent = познатиБукви.join(', ');
  document.getElementById('guesses-remaining').textContent = оставащиОпити;
}

function провериПознатаБуква(позната) {
  if (познатиБукви.includes(позната)) {
    alert('Тази буква вече е позната!');
    return;
  }

  познатиБукви.push(позната);

  if (избранаДума.includes(позната)) {
    избранаДума.split('').forEach((буква, индекс) => {
      if (буква === позната) {
        дисплейНаДумата[индекс] = позната;
      }
    });
  } else {
    оставащиОпити--;
  }

  актуализирайДисплея();

  if (!дисплейНаДумата.includes('_')) {
    alert('Поздравления! Печелите играта!');
    нулиранеИгра();
  } else if (оставащиОпити === 0) {
    alert('Край на играта! Думата беше: ' + избранаДума);
    нулиранеИгра();
  }
}

function нулиранеИгра() {
  избранаДума = '';
  дисплейНаДумата = [];
  познатиБукви = [];
  оставащиОпити = 6;
  избериДума();
  актуализирайДисплея();
}

document.getElementById('guess-btn').addEventListener('click', function() {
  const позната = document.getElementById('guess-input').value.toLowerCase();
  document.getElementById('guess-input').value = ''; // Изчистване на полето за въвеждане
  провериПознатаБуква(позната);
});

избериДума();
актуализирайДисплея();