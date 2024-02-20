// 获取用户选择的车型信息
import { toRefs } from "vue";
import { useSelectStore } from "@/store/select";

const { carselected } = toRefs(useSelectStore());

export const addCarSelected = (infoName, item) => {
  // console.log(infoName);
  // console.log(item);
  carselected.value[infoName] = item;
  console.log(carselected.value);
};

export const getCarSelected = async () => {
  //将用户选择的车型信息存储到sessionStorage中
  if (sessionStorage.getItem("carselected")) {
    return JSON.parse(sessionStorage.getItem("carselected"));
  }
  // console.log(JSON.stringify(carselected),'------------------');
  sessionStorage.setItem("carselected", JSON.stringify(carselected.value)); //不加.value会导致把整个store的数据全都存上去
  return JSON.parse(sessionStorage.getItem("carselected"));
};
