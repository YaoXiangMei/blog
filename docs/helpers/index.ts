const COLOR_TYPE = ['gray', 'red', 'green', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
const COLOR_WEIGHT = [300, 400, 500, 600, 700, 800, 900]
const randomMinToMaxNumber = function (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min)
}

// 随机一个背景色
export const randomBgColorClass = function () : string {
  return `bg-${COLOR_TYPE[randomMinToMaxNumber(0, COLOR_TYPE.length)]}-${COLOR_WEIGHT[randomMinToMaxNumber(0, COLOR_WEIGHT.length)]}`
}
