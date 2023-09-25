//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(arr)  {

    let map = new Map()

    for (let i=0; i< arr.length; i++) {

        if (map.has(arr[i])) return arr[i];

        map.set(arr[i], i)
    }


    return null;
}


console.log(firstRecurringCharacter([2, 1, 3, 4, 5, 2]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2