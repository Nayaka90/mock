const todayDate = new Date()
const twomonth = new Date()
twomonth.setMonth(todayDate.getMonth() + 2)
console.log(todayDate);
let deliverydate = "2/25/2023"
deliverydate = new Date(deliverydate)
console.log(deliverydate);
const fullmonth = deliverydate.toLocaleDateString('default', { month: 'long' });
const date = deliverydate.getDate()
console.log(date);
const year = deliverydate.getFullYear()
if (deliverydate >= todayDate && deliverydate<= twomonth) {
    console.log(deliverydate);
}