function distanceFromHqInBlocks(distance){
    return Math.abs(42-distance);
};

const distanceFromHqInFeet = distance => {return Math.abs(42-distance) * 264;}

const distanceTravelledInFeet = (start, end) => {
    return Math.abs(start-end) *264
};

const calculatesFarePrice = (start, end) => {
    const distance = Math.abs(start - end) * 264;
    switch (true){
        case distance <= 400:
            return 0;
            break;

        case distance <= 2000:
            return (distance - 400) * .02;
            break;

        case distance <= 2500:
            return 25;
            break;

        default: return 'cannot travel that far';    
      
    }

};