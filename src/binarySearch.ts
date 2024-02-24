export default function binary_search(haystack: number[], needle: number): boolean {
    
    let split = 0;
    let lowerEnd = 0;
    let upperEnd = haystack.length;
    do {
    let middle = Math.ceil(lowerEnd + (upperEnd - lowerEnd)/2);

    console.log(`at split ${split} middle is: ${middle}`);

    if(needle === middle) {
        console.log(`number of split: ${split}`);
        return true;
    }
    else if(needle > middle){
        lowerEnd = middle + 1;
        console.log(`number of splits: ${split}`);
        console.log(`needle is above ${middle}`); 
    }
    else {
        upperEnd = middle;

        console.log(`number of splits: ${split}`);
        console.log(`needle is below ${middle}`);
    }
    split++;
    }while(lowerEnd < upperEnd);
    
    console.log(`final number of splil ts: ${split}`);

    return false;
}
