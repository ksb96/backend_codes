//using references (normalization)
let author = {
    name: 'KB'
}

let course = {
    author : 'id'
}

//using embedded documents (denormilizationlet)
let courses = {
    author: {
        name: 'KB'
    }
}