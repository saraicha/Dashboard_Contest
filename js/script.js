function openElement(elem){
        $(".hide-section").css('display','none');
        $("."+elem.id+"-section").css('display','grid');
}
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
    datasets: [{
      label: '# of Sales',
      data: [25, 35, 26, 60, 3, 10, 9],
      borderWidth: 1
    }],

  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctr = document.getElementById('myChart-2');

new Chart (ctr, 
{
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [123, 340, 125, 55],
          backgroundColor: [
            'rgb(34, 34, 59)',
            'rgb(74, 78, 105)',
            'rgb(154, 140, 152)',
            '#780000',
          ],
        },
      ],
      labels: ['Pastries', 'Boxes of chocolate', 'Birthday cakes', 'Flower decorations'],
    },
    options: {
      plugins: {
        datalabels: {
          formatter: (value) => {
            return value + '%';
          },
        },
      },
    },
  });