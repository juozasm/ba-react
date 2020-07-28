export default function generateUrlParams(arrayOfParams) {
    const params = new URLSearchParams()
    for (const param of arrayOfParams) {
        if(typeof param === 'object' && param.name && param.value){
            params.append(param.name, param.value)
        }
    }

    return params
}
