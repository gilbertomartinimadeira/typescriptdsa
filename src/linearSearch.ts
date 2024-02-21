export default function linear_search(haystack: number[], needle: number): boolean {

    // Linear Search Complexity:  O(N)
    for (let i = 0; i < haystack.length; i++) {
        if(needle == haystack[i]) return true;    
    }

    return false;
}

