import Chart from './node_modules/chart.js/auto';


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

  let fifty = localStorage.getItem('fifty');
  let thirty = localStorage.getItem('thirty');
  let twenty = localStorage.getItem('twenty');
  let fiftyOutput = document.getElementById('fiftyNum')
  let thirtyOutput = document.getElementById('thirtyNum')
  let twentyOutput = document.getElementById('twentyNum')
  fiftyOutput.innerText = (formatter.format(fifty));
  thirtyOutput.innerText = (formatter.format(thirty));
  twentyOutput.innerText = (formatter.format(twenty));

(async function() {
  let fifty = localStorage.getItem('fifty');
  let thirty = localStorage.getItem('thirty');
  let twenty = localStorage.getItem('twenty');
 
    const data = {
        labels: [
          'Fifty',
          'Thirty',
          'Twenty'
        ],
        datasets: [{
          label: 'Your Finances',
          data: [fifty, thirty, twenty],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
    new Chart(
      document.getElementById('chart'),
      {
        type: 'pie',
        data: data,
      }
    );
  })();