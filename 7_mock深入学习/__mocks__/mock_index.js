
export const fetchData = () => {
    return new Promise((resolved, reject) => {
        resolved({
            data: "(function(){return '123'})()"
        })
    })
}
