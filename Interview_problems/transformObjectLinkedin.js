const skills = [
    {skill: 'javascript', user: 'Sandeep'},
    {skill: 'HTML', user: 'Rubio'},
    {skill: 'javascript', user: 'Jose'},
    {skill: 'HTML', user: 'Mario'},
    {skill: 'javascript', user: 'Rob'},
    {skill: 'CSS', user: 'Jon'}
];

const convert = [
    {skill: 'javascript', users:['Sandeep', 'Jose', 'Rob'], count: 3},
    {skill: 'HTML', users:['Rubio', 'Mario'], count: 2},
    {skill: 'CSS', users:['Jon'], count: 1}
]

function transform(skills) {
    let result = [];

    for (let entry of skills) {
        const index = checkIfEntryExist(entry.skill, result);
        console.log(entry);
        console.log(index);
        if (index === undefined) {
            const obj = {skill: entry.skill, users: [entry.user], count: 1};
            result.push(obj);
        } else {
            result.map((val) => {
                if (val.skill === entry.skill) {
                    val.users.push(entry.user);
                    val.count++;
                }
            });
            // result[index].users.push(entry.user);
            // result[index].count++;
        }
    }

    return result;
}

function checkIfEntryExist(skill, arr) {
    let ifExist = false;
    let indexExist;

    arr.forEach((val, index) => {
        if(val.skill === skill) {
            ifExist = true;
            indexExist = index;
        }
    })

    return indexExist;
    // return arr.reduce((rev, val) => {
    //     if(val.skill === skill) {
    //         rev = true;
    //     }
    //     return rev;
    // }, false)
}

transform(skills);





















// ASKED IN ITERVIEW COPY
// const Foo = function(a) {
//     this.a = a;
  
//     this.bar = function () {
//       return a;
//     }
//     this.baz = function() {
//       return a;
//     };
//   };
   
//   Foo.prototype = {
//     biz() {
//       return this.a;
//     },
//   };
   
//   const f = new Foo(7);
  
//   {
//     a:
//     baz:
//     prototype:
//       {
//         biz:
//       }
//   }
   
//   f.bar(); // undefined
//   f.baz(); // 7
//   f.biz(); // undefined
  
//   //////
  
  
//   // Given
//   const endorsements = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' },
//   ];
//   const skills = [];
  
//   function trnsform(){
//     let storage = [];
//     let skillAgg = []; // keep track of skill
//     for (let { skill, user } in endorsements ) {
      
//       if(!skillAgg.includes(skill)){
//         skillAgg.push(skill);
//         storage.push({'skill': skill});
//       }
  
//       storage.forEach((obj) => {
//         if(obj.skill === skill){
//           if(!obj.user){
//             obj.user = [];
//           }
//           obj.user.push(user)
//         }
//         return obj;
//       })
//     }
    
//     storage.map((val) => {
//       return { ...val, {'count': val.users.length}}
//     });
  
//       return storage;
//   }
  
//   // Result
//   console.log(skills);
//   // [
//   //   { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
//   //   { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
//   //   { skill: 'html', users: ['Sue'], count: 1 },
//   // ]
  
//   //////
//   // https://i.imgur.com/wmnmXsX.png
  
  
//   <div>
//     <span>
//       <p class="heading name">Jack smith</p>
//       <p clas="heading work"> software Engineer at EMC </p>
//     </span>
//     <button id="discard"> </button>
//     <span> 
//       <img src="/path"> </img>
//       <button id="connect"> </button>
//     </span>
//   </div>  
