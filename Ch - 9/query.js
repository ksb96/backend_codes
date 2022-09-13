//finding from the documents and returning(client)

async function getCourses() {
    const courses = await Course
    .find({ author: 'kb', isPublished: true})
    //added filters
    .limit(10)
    .sort({ name: 1}) // 1  asce, -1 desc
    .select({ name: 1, tags: 1});
    console.log(courses);
}

getCourses();

//regex - regular expression

async function getCourses() {
    const courses = await Course

    //starts with k
    .find({ author: /^kb/ })
    
    //ends with Bh
    .find({ author: /Bh$/i }) //i - not case sensitive
    
    //contains 'kb' - anywhere in the string
    .find({ author: /.*kb.*/i })
}

getCourses();