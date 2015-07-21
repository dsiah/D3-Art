var Shuffle = (function () {
    var input = [];
    
    return {
        init: function (len) {
            for (var i = 0; i < len; i++) {
                input.push(Math.round(Math.random()*100));
            }

            return input;
        },

        getArray: function () {
            return input;
        }
    };
    
}());
