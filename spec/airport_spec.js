describe ('Airport', function() {
  beforeEach(function() {
    heathrow = new Airport(5);
  });
  it ('show the planes it has', function() {
    expect(heathrow.planes.length).toEqual(1)
  });

  describe ('Sunny weather - everything can proceed as normal', function () {
    beforeEach(function() {
      heathrow = new Airport(5);
      spyOn(heathrow, 'isStormy').and.returnValue(false)
    });
    describe ('#land', function() {
      it ('can land a plane', function() {
        heathrow.land('plane1')
        expect(heathrow.planes.length).toEqual(2)
        });
      it ('cannot land if the airport is at capacity', function() {
        for(var i = 0; i < 4; i++) { heathrow.land(`plane${i}`) }
        expect(function() { heathrow.land('plane5') }).toThrowError("Airport is full!");
      });
    });
    describe ('#takeOff', function() {
      it ('can take off a plane', function() {
        heathrow.land('plane2')
        heathrow.takeOff()
        expect(heathrow.planes.length).toEqual(1)
      });
      it ('cannot take off a plane if the airport is empty', function() {
        heathrow.takeOff('plane1')
        expect(function() { heathrow.takeOff() }).toThrowError("No planes in the airport!");
      });
    });
  });


  describe ('stormy weather - no taking off or landing', function() {
    beforeEach(function() {
      heathrow = new Airport(5);
      spyOn(heathrow, 'isStormy').and.returnValue(true)
    });
    it ('will not land a plane', function() {
      expect(function() { heathrow.land('plane5') }).toThrowError("No landing here, too stormy!");
    });
    it ('will not take off a plane', function () {
      expect(function() { heathrow.takeOff('plane1') }).toThrowError("No taking off, too stormy!");
    });
  });

  
  describe ('isStormy', function() {
    it ('can return sunny or stormy', function() {
      expect([true, false]).toContain(heathrow.isStormy())
    });
  });
  
}); 