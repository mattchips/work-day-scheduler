$(document).ready(function () 
{

    var init = false;
    var now = moment().format('LLLL'); // Day, M/D/Y/T format

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format
    if (init) 
    {
        now24 = 13;
        now12 = 1;
    }

    // Display current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

    var cal = new Date();
    var currentHour = cal.getHours();

    //checks each hour to see if its past present or future
    for (var i = 9; i < 23; i++) 
    {
        if (i < currentHour) document.getElementById(i.toString()).classList.add('past');
        else if (i === currentHour) document.getElementById(i.toString()).classList.add('present');
        else if (i > currentHour) document.getElementById(i.toString()).classList.add('future');
    }

    //when a save button is clicked, the task will be saved
    $('.saveBtn').click(function () 
    {
        var hr9 = document.getElementById('9').value;
        localStorage.setItem('text9', hr9);
        var hr10 = document.getElementById('10').value;
        localStorage.setItem('text10', hr10);
        var hr11 = document.getElementById('11').value;
        localStorage.setItem('text11', hr11);
        var hr12 = document.getElementById('12').value;
        localStorage.setItem('text12', hr12);
        var hr13 = document.getElementById('13').value;
        localStorage.setItem('text13', hr13);
        var hr14 = document.getElementById('14').value;
        localStorage.setItem('text14', hr14);
        var hr15 = document.getElementById('15').value;
        localStorage.setItem('text15', hr15);
        var hr16 = document.getElementById('16').value;
        localStorage.setItem('text16', hr16);
        var hr17 = document.getElementById('17').value;
        localStorage.setItem('text17', hr17);
        var hr18 = document.getElementById('18').value;
        localStorage.setItem('text18', hr18);
        var hr19 = document.getElementById('19').value;
        localStorage.setItem('text19', hr19);
        var hr20 = document.getElementById('20').value;
        localStorage.setItem('text20', hr20);
        var hr21 = document.getElementById('21').value;
        localStorage.setItem('text21', hr21);
        var hr22 = document.getElementById('22').value;
        localStorage.setItem('text22', hr22);
    });
     
     // saved tasks
     var saved9 = localStorage.getItem('text9');
     document.getElementById('9').value = saved9;
     var saved10 = localStorage.getItem('text10');
     document.getElementById('10').value = saved10;
     var saved11 = localStorage.getItem('text11');
     document.getElementById('11').value = saved11;
     var saved12 = localStorage.getItem('text12');
     document.getElementById('12').value = saved12;
     var saved13 = localStorage.getItem('text13');
     document.getElementById('13').value = saved13;
     var saved14 = localStorage.getItem('text14');
     document.getElementById('14').value = saved14;
     var saved15 = localStorage.getItem('text15');
     document.getElementById('15').value = saved15;
     var saved16 = localStorage.getItem('text16');
     document.getElementById('16').value = saved16;
     var saved17 = localStorage.getItem('text17');
     document.getElementById('17').value = saved17;
     var saved18 = localStorage.getItem('text18');
     document.getElementById('18').value = saved18;
     var saved19 = localStorage.getItem('text19');
     document.getElementById('19').value = saved19;
     var saved20 = localStorage.getItem('text20');
     document.getElementById('20').value = saved20;
     var saved21 = localStorage.getItem('text21');
     document.getElementById('21').value = saved21;
     var saved22 = localStorage.getItem('text22');
     document.getElementById('22').value = saved22;
});