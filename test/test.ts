import linear_search from "../src/linearSearch";

test('Should find a needle if it is on the stack', async function() {
        
    const result = linear_search([1,2,3,4,5,6], 5);

    expect(result).toBeTruthy();
    
});