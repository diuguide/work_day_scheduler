$(document).ready(() => {
    let dateEl = $("#date");
    let date = moment().format("MM/DD/YYYY");
    console.log(date);
    dateEl.append(date);
    timeColor();
    function timeColor() {
        if (moment().isBefore(moment('9:00', "hh:mm"))) {
            $('#hour0').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('10:00', "hh:mm"))) {
            $('#hour1').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('11:00', "hh:mm"))) {
            $('#hour2').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('12:00', "hh:mm"))) {
            $('#hour3').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('13:00', "hh:mm"))) {
            $('#hour4').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('14:00', "hh:mm"))) {
            $('#hour5').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('15:00', "hh:mm"))) {
            $('#hour6').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('16:00', "hh:mm"))) {
            $('#hour7').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('17:00', "hh:mm"))) {
            $('#hour8').css('background-color', '#d4fcc3')
        };

        // sets the color of the time blocks after the current time //
        // IS AFTER //
        if (moment().isAfter(moment('10:00', "hh:mm"))) {
            $('#hour0').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('11:00', "hh:mm"))) {
            $('#hour1').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('12:00', "hh:mm"))) {
            $('#hour2').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('13:00', "hh:mm"))) {
            $('#hour3').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('14:00', "hh:mm"))) {
            $('#hour4').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('15:00', "hh:mm"))) {
            $('#hour5').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('16:00', "hh:mm"))) {
            $('#hour6').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('17:00', "hh:mm"))) {
            $('#hour7').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('18:00', "hh:mm"))) {
            $('#hour8').css('background-color', '#cad2c5')
        };
    }
});

