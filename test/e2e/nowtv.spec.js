describe('Movie List app', function(){

    beforeEach( function(){
        browser.driver.get('http://localhost');
    });

    it('Should filter movies once user start typing into the search box', function(){
        
        var movieList 	= element.all(by.repeater('movie in movies'));
        var query		= element(by.model('query'));

        expect(movieList.count()).toBe(160);

        query.sendKeys('Days');
        expect(movieList.count()).toBe(4);

        query.clear();
        query.sendKeys('Sea');
        expect(movieList.count()).toBe(3);

        query.clear();
        query.sendKeys('Super');
        expect(movieList.count()).toBe(0);
        expect(element(by.binding('movies'))).toBe('No matching items');

    });

    it('Should display first 20 movies', function() {
        expect(element(by.css('table tr').length)).toBe(20);
    });

});