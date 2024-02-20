// 获取用户选择的车型信息
import { toRefs } from 'vue' 
import { useSelectStore } from "@/store/select";

const { carselected } = toRefs(useSelectStore());

export const addCarSelected = (item) => {
    carselected.value.push(item)
}

export const getCarSelected = async () => {
    //将用户选择的车型信息存储到sessionStorage中
    if (sessionStorage.getItem('carselected')) {
        return JSON.parse(sessionStorage.getItem('carselected'))._object.carselected
    }
    sessionStorage.setItem('carselected', JSON.stringify(carselected))
    return JSON.parse(sessionStorage.getItem('carselected'))._object.carselected
}
