// 1. Loop through an Array with For-Of
// const favouriteMovies: string[] = [
//     "Inception", "The Matrix", "Interstellar"
// ];
function describeColor(rgb) {
    var red = rgb[0], green = rgb[1], biue = rgb[2];
    return "RGB(".concat(red, ", ").concat(green, ", ").concat(biue, ")");
}
var color = [255, 0, 0];
console.log(describeColor(color));
