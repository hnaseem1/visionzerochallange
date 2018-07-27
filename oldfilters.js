// pedestrians
pedestriansFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      pedestrians(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
    }
    initMap();
  })
  // cyclists
  cyclistsFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      motorists(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
    }
    initMap();
  })
  // motorcycles
  motorcyclesFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      motorcycles(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
    }
    initMap();
  })
  // motorists
  motoristsFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
      motorists(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
    }
    initMap();
  })

  // aggressive driving
  aggressiveDrivingFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      aggressiveDriving(data);
    } else if (this.checked !== true) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // alcohol
  alcoholFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      alcohol(data);
    } else if (this.checked !== true) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // speeding
  speedingFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        alcohol(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      speeding(data);
    } else if (this.checked !== true) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        alcohol(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // ran red light
  ranRedLightFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      ranRedLight(data);
    } else if (this.checked !== true) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
    }
    initMap();
  })


  // ======================== Filter Functions ==========================

// pedestrians

function pedestrians(data) {
    data.features.map(function(feature) {
      if (feature.attributes.PEDESTRIAN === 'Yes') {
        locations.push(feature)
      }
    })
  }
  
  // cyclists
  
  function cyclists(data) {
    data.features.map(function(feature) {
      if (feature.attributes.CYCLIST === 'Yes') {
        locations.push(feature)
      }
    })
  }
  
  // injuries
  
  function motorcycles(data) {
    data.features.map(function(feature) {
      if (feature.attributes.INJURY !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // fatalities
  
  function fatalities(data) {
    data.features.map(function(feature) {
      if (feature.attributes.FATAL_NO > 0) {
        locations.push(feature)
      }
    })
  }
  
  // motorcycles
  
  function motorcycles(data) {
    data.features.map(function(feature) {
      if (feature.attributes.MOTORCYCLE !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // motorists
  
  function motorists(data) {
    data.features.map(function(feature) {
      if (feature.attributes.AUTOMOBILE !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // aggressive driving
  
  function aggressiveDriving(data) {
    data.features.map(function(feature) {
      if (feature.attributes.AG_DRIV !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // alcohol
  
  function alcohol(data) {
    data.features.map(function(feature) {
      if (feature.attributes.ALCOHOL !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // speeding
  
  function speeding(data) {
    data.features.map(function(feature) {
      if (feature.attributes.SPEEDING !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  // ran red light
  
  function ranRedLight(data) {
    data.features.map(function(feature) {
      if (feature.attributes.REDLIGHT !== ' ') {
        locations.push(feature)
      }
    })
  }
  
  