function handleSubmit(e) {
    e.preventDefault();


}
function emailCheck() {
    const pattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

    const email = document.getElementById("email").value;

    console.log(email)
    const result = pattern.test(email);
    console.log(result);

    document.querySelector(".valid_email_hide").classList.toggle("valid_email_show", result);

    document.querySelector(".invalid_email_hide").classList.toggle("invalid_email_show", !result);







}
function passwordCheck() {
    const pattern = /^(?=.*\d)(?=.* [A - Z])(?=.* [a - z])(?=.* [^\w\d\s:])([^\s]){ 8, 16 }$/gm
    const password = document.querySelector(".password").value;
    console.log(password)
    const result = pattern.test(password);
    console.log(result);
    document.querySelector(".valid_password_hide").classList.toggle("valid_password_show",result)
    document.querySelector(".invvalid_password_hide").classList.toggle("invalid_password_show",!result)
}