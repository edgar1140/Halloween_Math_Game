function checkAddition() {
    var num1 = Number($('#number1').val());
    var num2 = Number($('#number2').val());
    var answer = Number($('#answer').val());

    $('.form-group')
        .removeClass('has-error')
        .removeClass('has-success');

    $('#checkAnswer')
        .removeClass('btn-success')
        .removeClass('btn-danger')
        .removeClass('btn-primary');

    if (answer == num1 * num2) {
        $('.form-group').addClass('has-success');
        $('#checkAnswer').addClass('btn-success');
    } else {
        $('.form-group').addClass('has-error');
        $('#checkAnswer').addClass('btn-danger');
    }
}

function genRandomNums() {
    $('#checkAnswer')
        .removeClass('btn-success')
        .removeClass('btn-danger')
        .removeClass('btn-primary')
        .addClass('btn-primary');

    var rnA = Math.floor(Math.random() * 10) + 2;
    $('#number1').val(rnA);
    var rnB = Math.floor(Math.random() * 10) + 2;
    $('#number2').val(rnB);

    var total = rnA * rnB;
    var html = '<table><tr>';
    for (var c = 1; c <= total; c++) {
        html +=
            '<td><img src="https://ih1.redbubble.net/image.52661850.2277/ap,550x550,16x12,1,transparent,t.u2.png" height="50"></td>';
        if (c % rnA == 0) {
            html += '</tr><tr>';
        }
    }
    // for (var c = 1; c <= rnB; c++) {
    //     html +=
    //         '<td><img src="https://i.imgur.com/lR3bpHB.png" height="50"></td>';
    //     if ((c + rnA) % 10 == 0) {
    //         html += '</tr><tr>';
    //     }
    // }

    http: html += '</tr></table>';

    $('#pumpkins').html(html);
}
