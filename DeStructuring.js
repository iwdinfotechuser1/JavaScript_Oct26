const emp1 = {
    fname: "Neha",
    mobNo:98765543,
    mailID:"test@test.com",
    empID: 98765
};

// const {fname, mobNo, mailID, empID} = emp1;

// const { fname, ...otherDeatils } = emp1;
const { fname, ...remainingemp1 } = emp1;

console.log(fname);
// console.log(otherDeatils);
console.log(remainingemp1);

