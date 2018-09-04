describe ('Airport', function() {
  beforeEach(function() {
    heathrow = new Airport(5);
    // spyOn(heathrow, 'isStormy').and.returnValue(false)
  });
  it ('show the planes it has', function() {
    expect(heathrow.planes.length).toEqual(0)
  });
  
  describe ('#land', function() {
    it ('can land a plane', function() {
      heathrow.land('plane1')
      expect(heathrow.planes.length).toEqual(1)
      });
    it ('cannot land if the airport is at capacity', function() {
      gatwick = new Airport(5)
      for(var i = 0; i < 5; i++) {
        gatwick.land(`plane${i}`)
      }
      expect(function() {
        gatwick.land('plane5');
      }).toThrowError("Airport is full!"); 
    });
  });
  
  describe ('#takeOff', function() {
    it ('can take off a plane', function() {
      heathrow.land('plane1')
      heathrow.takeOff()
      expect(heathrow.planes.length).toEqual(0)
    });
    it ('cannot take off a plane if the airport is empty', function() {
      expect(function() {
        heathrow.takeOff();
      }).toThrowError("No planes in the airport!");
    });
  });


  describe ('isStormy', function() {
    it ('can return sunny or stormy', function() {
      expect([true, false]).toContain(heathrow.isStormy())
    });

    it ('isStormySpy', function () {
      spyOn(heathrow, 'isStormy').and.returnValue(false)
      expect(heathrow.isStormy()).toEqual(false)
    });


  });

  
  



  
}); 