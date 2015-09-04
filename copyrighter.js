//copyright global for access anywhere in project
copyright = {};

Meteor.methods ({
    //single call to set copyright parameters
    'setCopyright': function (data) {
        //check name is not null and log if no name was entered
        if (data.name) {
            copyright.name = data.name;
        } else {
            console.log('please enter the owners name');
        }
        //check for a year, if entered as a string, convert to number
        var dateNumber = data.date *= 1;
        if (data.date) {
            if (data.date.toFixed || dateNumber.toFixed) {
                copyright.date = dateNumber;
            } else {
                console.log('please enter a proper 4 digit year');
            }
        }
        //convert to unicode
        if (data.mark) {
            if (data.mark === "copyright") {
                copyright.mark = "&copy;";
            } else if (data.mark === "trademark") {
                copyright.mark = "&reg;";
            }
        }
        //css style can be a defined style or a user created style
        copyright.style = data.style || "small-copyright";
        //logging
        return 'created copyright';
    }
});

if (Meteor.isClient) {
    //Template does not point to copyright object, so we need helpers
    Template.cTemplate.helpers({
        'style' : function () {
            return copyright.style;
        }, 'name' : function () {
            return copyright.name;
        }, 'date': function () {
            return copyright.date;
        }, 'mark' : function () {
            return copyright.mark;
        }
    });
}
