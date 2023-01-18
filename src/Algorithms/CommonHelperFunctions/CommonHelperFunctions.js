// Common function for algorithms to swap elements in the array.
export function swap(index1, index2, arr) {
  let temp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = temp;  
}

// Common function for algorithms to change new color in two comparing elements.
export function changeTwoColors(index1, index2, color1, color2, setColorArr, delay) {
  return setTimeout(() => {
    setColorArr(prevColor => {
      const newColor = [...prevColor];
      newColor[index1] = color1;
      newColor[index2] = color2;
      return newColor;
    });
  }, delay);
}

// Common function for algorithms to change new color of the selected element.
export function changeOneColor(index, color, setColorArr, delay) {
  return setTimeout(() => {
    setColorArr(prevColor => {
      const newColor = [...prevColor];
      newColor[index] = color;
      return newColor;
    });
  }, delay);
}