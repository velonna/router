import instance from "../Config/axios"
export function getAll(query=""){
    return instance.get("empinfo/"+query)


}
export function getById(id){
    return instance.get("empinfo/"+id)
}