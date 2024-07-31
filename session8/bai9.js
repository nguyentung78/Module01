let a = 5;
let b= "5";
console.log(a==b);  // true vì đây là so sánh giá trị của 2 biến a và b, khi tiến hành so sánh sẽ tự động chuyển đổi b từ string thành number, lúc đó a và b đều cùng giá trị và cùng kiểu dữ liệu nên sẽ trả về true
console.log(a===b); // false vì đây là so sánh giá trị và kiểu dữ liệu, kiểu dữ liệu khác nhau, a là number còn b là string nên sẽ trả về false
console.log(a!=b);  // false vì đây là so sánh giá trị, khi tiến hành so sánh sẽ tự động chuyển đổi kiểu dữ liệu của b về string nên a và b đều có cùng giá trị và kiểu dữ liệu, nên a khác b là sẽ trả về false
console.log(a!==b); // true vì đây là so sánh giá trị và kiểu dữ liệu, kiểu dữ liệu khác nhau nên nó ko đúng cả về giá trị và kiểu dữ liệu nên sẽ trả về true