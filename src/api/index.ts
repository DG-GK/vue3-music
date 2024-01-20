import service from "./request.ts"

export function getBanner() {
    return service.get('/banner',{params:{type:0}})
}