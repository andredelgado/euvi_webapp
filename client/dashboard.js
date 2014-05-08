Meteor.subscribe('reports');

Template.showReports.reports = function() {
	return Reports.find({ });
};

Template.addReports.events({
  'click #add-report': function() {
  	console.log("Adicionando nova opcao");
  	
  	var reportText = $('#report-input').val();

  	Meteor.call('addReport', reportText);
  }
});