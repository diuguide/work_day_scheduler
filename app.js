$(document).ready(function () {
    let schedule = localStorage.getItem('schedule') ? JSON.parse(localStorage.getItem('schedule')) : {};
    const hours = [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
    ];
    //function to render the timeblocks with seperate id's for each element//
    function renderSchedule() {


        console.log('test');
        for (i = 0; i < hours.length; i++) {
            var hourString = i.toString();
            $("#container").append($('<div>').addClass('row blocks').attr("id", "time-block-" + hourString));
            $('#time-block-' + hourString).append($("<div>").text(hours[i]).addClass('col-1').attr('id', 'time'));
            $('#time-block-' + hourString).append($("<div>").addClass('col-10').attr('id', `${hourString}`));
            $("#" + hourString).append($('<form>').attr('id', 'textBox-' + hourString));
            $('#textBox-' + hourString).append($('<textarea>').addClass('form-control').attr('id', 'textForm-' + hourString).attr('rows', '1'));
            $('#textBox-' + hourString).append($('<textar>').addClass('form-control').attr('id', 'textForm-' + hourString).attr('rows', '1'));

            $('#time-block-' + hourString).append($("<button>").text('Add Task').addClass('col-1').attr('id', 'editBtn-' + hourString));
            console.log('editBtn-' + hourString);
        }


        // add event listeners to the 'add task' buttons which add content from each text area to each time block //
        $('#editBtn-0').on('click', function () {
            alert('alert')
            let taskInput = $('#textForm-0').val();
            localStorage.setItem('task0', taskInput)
            $('#0').append($('<div>').attr('id', 'task0').html(taskInput).css('margin', '5px'));
            console.log(schedule);
            if (schedule.hour9) {
                $('#0').append(schedule.hour9)
            }

            $('textarea').val('');

        })

        $('#edit-btn-0').click();

        $('#editBtn-1').on('click', function () {
            let taskInput = $('#textForm-1').val();
            localStorage.setItem('task1', taskInput);
            $('#1').append($('<div>').attr('id', 'task1').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-2').on('click', function () {
            let taskInput = $('#textForm-2').val();
            localStorage.setItem('task2', taskInput);
            $('#2').append($('<div>').attr('id', 'task2').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-3').on('click', function () {
            let taskInput = $('#textForm-3').val();
            localStorage.setItem('task3', taskInput);
            $('#3').append($('<div>').attr('id', 'task3').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-4').on('click', function () {
            let taskInput = $('#textForm-4').val();
            localStorage.setItem('task4', taskInput);
            $('#4').append($('<div>').attr('id', 'task4').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-5').on('click', function () {
            let taskInput = $('#textForm-5').val();
            localStorage.setItem('task5', taskInput);
            $('#5').append($('<div>').attr('id', 'task5').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-6').on('click', function () {
            let taskInput = $('#textForm-6').val();
            localStorage.setItem('task6', taskInput);
            $('#6').append($('<div>').attr('id', 'task6').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-7').on('click', function () {
            let taskInput = $('#textForm-7').val();
            localStorage.setItem('task7', taskInput);
            $('#7').append($('<div>').attr('id', 'task7').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-8').on('click', function () {
            let taskInput = $('#textForm-8').val();
            localStorage.setItem('task8', taskInput);
            $('#8').append($('<div>').attr('id', 'task8').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-9').on('click', function () {
            let taskInput = $('#textForm-9').val();
            localStorage.setItem('task9', taskInput);
            $('#9').append($('<div>').attr('id', 'task9').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-10').on('click', function () {
            let taskInput = $('#textForm-10').val();
            localStorage.setItem('task10', taskInput);
            $('#10').append($('<div>').attr('id', 'task10').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-11').on('click', function () {
            let taskInput = $('#textForm-11').val();
            localStorage.setItem('task11', taskInput);
            $('#11').append($('<div>').attr('id', 'task11').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })
        $('#editBtn-12').on('click', function () {
            let taskInput = $('#textForm-12').val();
            localStorage.setItem('task12', taskInput);
            $('#12').append($('<div>').attr('id', 'task12').text(taskInput).css('margin', '5px'));
            $('textarea').val('');
        })

    }
    // saves items inputted into the schedule into an array then into local storage //
    $('#save').on('click', function toLocalStorage() {
        alert('Saved!');
        let hour9 = localStorage.getItem('task0');
        let hour10 = localStorage.getItem('task1');
        let hour11 = localStorage.getItem('task2');
        let hour12 = localStorage.getItem('task3');
        let hour13 = localStorage.getItem('task4');
        let hour14 = localStorage.getItem('task5');
        let hour15 = localStorage.getItem('task6');
        let hour16 = localStorage.getItem('task7');
        let hour17 = localStorage.getItem('task8');
        let hour18 = localStorage.getItem('task9');

        let localArray = {
            hour9,
            hour10,
            hour11,
            hour12,
            hour13,
            hour14,
            hour15,
            hour16,
            hour17,
            hour18,
        };
        localStorage.setItem('schedule', JSON.stringify(localArray));
    });
    // retrieves information from local storage //
    $('#loadBtn').on('click', function fromLocalStorage() {
        let storage = JSON.parse(localStorage.getItem('schedule'));
        console.log(storage);
        console.log(storage.hour9);
        $('#task0').append(storage.hour9);

    });

    // sets the color of time blocks before the current time //
    $('#renderBlock').on('click', function () {
        renderSchedule();
        // IS BEFORE //
        if (moment().isBefore(moment('9:00', "hh:mm"))) {
            $('#time-block-0').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('10:00', "hh:mm"))) {
            $('#time-block-1').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('11:00', "hh:mm"))) {
            $('#time-block-2').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('12:00', "hh:mm"))) {
            $('#time-block-3').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('13:00', "hh:mm"))) {
            $('#time-block-4').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('14:00', "hh:mm"))) {
            $('#time-block-5').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('15:00', "hh:mm"))) {
            $('#time-block-6').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('16:00', "hh:mm"))) {
            $('#time-block-7').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('17:00', "hh:mm"))) {
            $('#time-block-8').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('18:00', "hh:mm"))) {
            $('#time-block-9').css('background-color', '#d4fcc3')
        };
        if (moment().isBefore(moment('19:00', "hh:mm"))) {
            $('#time-block-10').css('background-color', '#d4fcc3')
        };

        // sets the color of the time blocks after the current time //
        // IS AFTER //
        if (moment().isAfter(moment('10:00', "hh:mm"))) {
            $('#time-block-0').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('11:00', "hh:mm"))) {
            $('#time-block-1').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('12:00', "hh:mm"))) {
            $('#time-block-2').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('13:00', "hh:mm"))) {
            $('#time-block-3').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('14:00', "hh:mm"))) {
            $('#time-block-4').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('15:00', "hh:mm"))) {
            $('#time-block-5').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('16:00', "hh:mm"))) {
            $('#time-block-6').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('17:00', "hh:mm"))) {
            $('#time-block-7').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('18:00', "hh:mm"))) {
            $('#time-block-8').css('background-color', '#cad2c5')
        };
        if (moment().isAfter(moment('19:00', "hh:mm"))) {
            $('#time-block-9').css('background-color', '#cad2c5')
        };


    });
    // function for the clock at the top of the page //
    function update() {
        $('#clock').html(moment().format('MMMM D, YYYY H:mm:ss'));
    }

    setInterval(update, 1000);

});