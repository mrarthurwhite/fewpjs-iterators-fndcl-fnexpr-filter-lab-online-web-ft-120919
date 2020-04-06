// Code your solution here

function findMatching(drivers , keyword){
  let matchingDrivers = [];
  matchingDrivers = drivers.filter( driver=>{
    return driver.toLowerCase() == keyword.toLowerCase();
  });
  return matchingDrivers;
}

function fuzzyMatch(drivers , keyword){
  let matchingDrivers = drivers.filter( driver=>{
    return driver.startsWith(keyword);
  });
  return matchingDrivers;
}

function matchName(drivers , keyword){
  let matchingDrivers = drivers.filter( driver=>{
    return driver.name==keyword;
  });
  return matchingDrivers;
}


