/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { getPokedex } from '../utils.js';


const ctx1 = document.getElementById('pokeEncounters');
const ctx2 = document.getElementById('pokesCaught');

const pokeDex = getPokedex();
const pokeNamesEncountered = pokeDex
    .filter(item => item.encounters > 0)
    .map(({ name }) => name);

const pokeNamesCaught = pokeDex
    .filter(item => item.caught > 0)
    .map(({ name }) => name);

const pokesEncountered = pokeDex
    .filter(item => item.encounters > 0)
    .map(({ encounters }) => encounters);

const pokesCaught = pokeDex
    .filter(item => item.caught > 0)
    .map(({ caught }) => caught);

Chart.defaults.font.family = "'Press Start 2P', cursive";
Chart.defaults.font.size = 24;
Chart.defaults.plugins.legend = false;


// eslint-disable-next-line no-unused-vars
const pokeEncounters = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: pokeNamesEncountered,
        datasets: [{
            label: 'Encounters',
            data: pokesEncountered,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },     
    options: {
        plugins: {
            title: {
                display: true,
                text: 'ENCOUNTERS',
                color: 'white',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
});


const pokiesCaught = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: pokeNamesCaught,
        datasets: [{
            label: 'Catches',
            data: pokesCaught,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ],
            borderWidth: 1,
            borderColor: 'white',
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'CATCHES',
                color: 'white',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
});
