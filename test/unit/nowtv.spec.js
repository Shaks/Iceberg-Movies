describe('Testing Main Controller', function() {

	beforeEach(module('moviesApp'));

	var service, httpBackend;

	beforeEach(inject(function ($injector) {
		service 	= $injector.get('dataService');
		httpBackend = $injector.get('$httpBackend');
	}));

    it('Should load 160 movies...', function() {
    	service.getJson().then(function(response) {
	        expect(response.data.length).toBe(160);
    	})

    });
});
