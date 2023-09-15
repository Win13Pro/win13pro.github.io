//计时器
const lastMaintainedDate1 = new Date('2023/9/15').getTime();
const lastMaintainedDate2 = new Date('2023/7/16').getTime();


function updateDaysSinceMaintenance() {
  const currentDate = new Date().getTime();


  const days1 = Math.floor((currentDate - lastMaintainedDate1) / (1000 * 60 * 60 * 24));

  const days2 = Math.floor((currentDate - lastMaintainedDate2) / (1000 * 60 * 60 * 24));


  document.getElementById('timer').textContent = `${days1} 天`;
  document.getElementById('run').textContent = `${days2} 天`;
}


updateDaysSinceMaintenance();


//底栏日期更新
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = currentYear;
}


document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
});
