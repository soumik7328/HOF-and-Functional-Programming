function reverse(user_input){
    var stringtoarray = user_input.split("");

    var revarse_array = stringtoarray.reverse();

    var strings = revarse_array.join("");

    return () => {
        console.log(strings);
    }
}

let user_input = "Hello! Word ";

setTimeout(reverse(user_input), 2000);