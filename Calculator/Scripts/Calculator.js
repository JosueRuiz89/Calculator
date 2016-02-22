/*
    File: Calculator.js
    Created By: Josue Ruiz
    Created at: 02/22/2016

    Summary: Evaluates expression provided by the user and tries to calculate the result, otherwise show
    a notification that the expression is not well formatted.
*/

var calculator = (function () {
    return {
        onKeyPress: function (e) {
            // Handling browser enter code
            var keyCode = e.keyCode || e.which;
            if (e.keyCode === 13) {
                this.onCalculate();
            }
        },
        onCalculate: function () {
            var expression = document.getElementById('expression').value;
            var error = '';
            var result = '';
            expression = expression.replace(/sqrt/g, 'Math.sqrt');

            try {
                if (!expression.replace(/Math\.sqrt|\(|\)|\+|\-|\^|\*|\/|[0-9]/g, '').match(/\w/g) && !isNaN(eval(expression))) {
                    result = 'Result: ' + eval(expression)
                } else {
                    error = 'Invalid expression, please provide a valid expression.';
                }

                this.setMessages(result, error, '');
            } catch (e) {
                this.setMessages(result, 'Invalid expression, please provide a valid expression.', e.message);
            }
        },
        setMessages: function (success, error, exception) {
            document.getElementById('resultMessage').innerHTML = success;
            document.getElementById('errorMessage').innerHTML = error;
            document.getElementById('exception').value = exception;
        }
    };
})();