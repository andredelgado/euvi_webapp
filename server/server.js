Meteor.startup(function () {

});

Meteor.publish('reports', function() {
	return Reports.find({ });
});

Meteor.methods({
	addReport: function(reportText) {
			Reports.insert({text: reportText});
	}
});